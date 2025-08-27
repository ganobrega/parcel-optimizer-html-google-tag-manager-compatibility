const { Optimizer } = require('@parcel/plugin');

module.exports = new Optimizer({
  name: 'html-google-tag-manager-compatibility',
  async optimize({ bundle, contents, map }) {
    if (bundle.type === 'html') {
      let html = contents.toString();
      
      const originalHtml = html;

      // Modifica type="module" para type="text/javascript" para compatibilidade com Google Tag Manager
      html = html.replace(/type="module"/g, 'type="text/javascript"');
      html = html.replace(/type='module'/g, "type='text/javascript'");

      // Remove tags <html>, <head> e <body> para evitar problemas de copiar e colar no Google Tag Manager
      html = html.replace('/<html(.*?)>/', '');
      html = html.replace('/<\/html>/', '');

      html = html.replace('/<head(.*?)>/', '');
      html = html.replace('/<\/head>/', '');

      html = html.replace('/<body(.*?)>/', '');
      html = html.replace('/<\/body>/', '');

      
      return {
        contents: html,
        map
      };
    }
    
    return { contents, map };
  }
});
