const { Optimizer } = require('@parcel/plugin');

module.exports = new Optimizer({
  name: 'html-google-tag-manager-compatibility',
  async optimize({ bundle, contents, map }) {
    if (bundle.type === 'html') {
      let html = contents.toString();
      
      // Modifica type="module" para type="text/javascript" para compatibilidade com Google Tag Manager
      const originalHtml = html;
      html = html.replace(/type="module"/g, 'type="text/javascript"');
      html = html.replace(/type='module'/g, "type='text/javascript'");
      
      return {
        contents: html,
        map
      };
    }
    
    return { contents, map };
  }
});
