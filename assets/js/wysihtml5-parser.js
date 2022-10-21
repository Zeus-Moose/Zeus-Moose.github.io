/**
 * Very simple basic rule set
 *
 * Allows
 *    <i>, <em>, <b>, <strong>, <p>, <div>, <a href="http://foo"></a>, <br>, <span>, <ol>, <ul>, <li>
 *
 * For a proper documentation of the format check advanced.js
 */
var wysihtml5ParserRules = {
  "classes": {
     "gallery": 1
  },
  "tags": {
    "strong": {},
    "b":      {},
    "i":      {},
    "em":     {},
    "br":     {},
    "p":      {},
    "h1":     {},
    "h2":     {},
    "h3":     {},
    "h4":     {},
    "div":    {},
    "span":   {},
    "ul":     {},
    "ol":     {},
    "li":     {},
    "gallery": {
            "rename_tag": "div",
            "set_class": "gallery"
        },
    
    a: {
      check_attributes: {
        href:   "url" // important to avoid XSS
      }
    }
  }
};