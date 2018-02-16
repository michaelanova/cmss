/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "ČMSS kalkulačka",
    short_name: "ČMSS",
    description: "",
    start_url: "/",
    display: "standalone",
    background_color: "#e2001a",
    theme_color: "#e2001a",
    icons: [
      src: "/cmss-logo-white.png",
       sizes: "152x152",
       type: "image/png"
    ],
    ms: {
      tileColor: '#e2001a'
    }
  };
}
