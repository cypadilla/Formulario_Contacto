
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/Formulario_Contacto/contact-page"
  },
  {
    "renderMode": 2,
    "route": "/Formulario_Contacto/contact-table"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Formulario_Contacto/contact-page",
    "route": "/Formulario_Contacto/**"
  }
],
  assets: new Map([
['index.csr.html', {size: 14417, hash: '2b8bfd34807c0f34c21b8be2eb8ef8004f654f933c43aaa1b1b243f049eb740b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 7991, hash: 'db91ae7d58ea2fb6e86874f3e4f6ed7dd5bba803c777c62a8d113b09437945a6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['contact-page/index.html', {size: 16945, hash: '352213ced3aefe3c79e23d100c76c856c2b6be4acf29668eecb49e603948f95b', text: () => import('./assets-chunks/contact-page_index_html.mjs').then(m => m.default)}], 
['contact-table/index.html', {size: 81465, hash: 'ab1dae18f5ac1ffdb0e805f7b4573840ed7693d55ac4516dbf403ca1432cad32', text: () => import('./assets-chunks/contact-table_index_html.mjs').then(m => m.default)}], 
['styles-CXQUZ3PB.css', {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
