import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const templatePath = path.resolve(rootDir, 'index.html');
const ENTRY_TAG = '<script type="module" crossorigin src="assets/index.js"></script>';

// Gera o index.html publicado a partir do template original, sem reprocessar os scripts inline.
const githubPagesHtml = () => ({
	name: 'github-pages-html',
	apply: 'build',
	generateBundle(_, bundle) {
		const template = fs.readFileSync(templatePath, 'utf-8');
		const preloads = Object.values(bundle)
			.filter((chunk) => chunk.type === 'chunk' && !chunk.isEntry)
			.map((chunk) => `\n\t<link rel="modulepreload" crossorigin href="${chunk.fileName}">`)
			.join('');
		this.emitFile({ type: 'asset', fileName: 'index.html', source: template.replace(ENTRY_TAG, ENTRY_TAG + preloads) });
	},
});

// No modo de desenvolvimento, aponta o template para o código-fonte.
const devEntry = () => ({
	name: 'dev-entry',
	apply: 'serve',
	transformIndexHtml: (html) => html.replace(ENTRY_TAG, '<script type="module" src="/src/main.jsx"></script>').replace('<link rel="stylesheet" href="assets/index.css">', ''),
});

const vendorChunk = (id) => {
	if (id.includes('commonjsHelpers')) return 'vendor-react';
	if (!id.includes('node_modules')) return undefined;
	if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) return 'vendor-react';
	return 'vendor';
};

export default defineConfig({
	base: './',
	publicDir: false,
	plugins: [react(), githubPagesHtml(), devEntry()],
	resolve: {
		alias: { '@': path.resolve(rootDir, 'src') },
	},
	build: {
		outDir: '..',
		emptyOutDir: false,
		assetsDir: 'assets',
		rollupOptions: {
			input: { index: path.resolve(rootDir, 'src/main.jsx') },
			output: {
				entryFileNames: 'assets/index.js',
				chunkFileNames: 'assets/[name].js',
				assetFileNames: (asset) => (asset.name && asset.name.endsWith('.css') ? 'assets/index.css' : 'assets/[name][extname]'),
				manualChunks: vendorChunk,
			},
		},
	},
});
