import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_9957c296.mjs';

const _page0  = () => import('./chunks/generic_e52668b6.mjs');
const _page1  = () => import('./chunks/index_06424c84.mjs');
const _page2  = () => import('./chunks/messages_c7498686.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.6.0_typescript@5.3.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/api/messages.ts", _page2]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
