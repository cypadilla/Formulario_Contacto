
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/contact-page"
  },
  {
    "renderMode": 2,
    "route": "/contact-table"
  },
  {
    "renderMode": 2,
    "redirectTo": "/contact-table",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  assets: new Map([
['index.csr.html', {size: 14397, hash: 'ef27986b7ad13d1bc66f9de20e94f21fc40f357c4f7528911c2d3a5b5c7df22c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 7971, hash: '7ca7708fdd5a119a3cf731d93850c4b70493a64b23150f3767c7d9402e61d726', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['contact-page/index.html', {size: 16925, hash: 'cad1bc98584454b99365cac2023ab48876634cfdcb226868a3558252c6277a32', text: () => import('./assets-chunks/contact-page_index_html.mjs').then(m => m.default)}], 
['contact-table/index.html', {size: 81445, hash: 'fbf7d0ad757f3dc7aa2545b59d68c8cd7a66415deb01f5b9cbec6871807a11ea', text: () => import('./assets-chunks/contact-table_index_html.mjs').then(m => m.default)}], 
['styles-CXQUZ3PB.css', {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
