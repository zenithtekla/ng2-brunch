exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^node_modules/,
        'main.js': /^app/
      },
      order: {
        after: [/\.html$/, /\.css$/]
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    },
    templates: {
      joinTo: 'main.js'
    }
  },
  plugins: {
    sass: {
      module: true,
      options: {
        includePaths: ['app']
      }
    },
    inlineCss: {
      html: true,
      passthrough: [/^node_modules/, 'app/global.css']
    }
  }
};
