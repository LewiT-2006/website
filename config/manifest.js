'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/zonkyio/ember-web-app#documentation for a list of
  // supported properties

  return {
    "name": "Chennai EmberJS",
    "short_name": "Ember Chennai",
    "theme_color": "#b14d38",
    "background_color": "#70afd0",
    "display": "standalone",
    "Scope": "/",
    "start_url": "/schedule",
    "icons": [
      {
        "src": "assets/manifest-icons/icon-72x72.png",
        "sizes": "72x72",
        "type": "image/png"
      },
      {
        "src": "assets/manifest-icons/icon-96x96.png",
        "sizes": "96x96",
        "type": "image/png"
      },
      {
        "src": "assets/manifest-icons/icon-128x128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "assets/manifest-icons/icon-144x144.png",
        "sizes": "144x144",
        "type": "image/png"
      },
      {
        "src": "assets/manifest-icons/icon-152x152.png",
        "sizes": "152x152",
        "type": "image/png"
      },
      {
        "src": "assets/manifest-icons/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "assets/manifest-icons/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "assets/manifest-icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    ms: {
      tileColor: '#fff'
    }
  };
}
