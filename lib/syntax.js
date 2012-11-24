var hl = require("highlight").Highlight;

var highlight = function(text, cb) {
  cb(null, hl(text, false, true))
}

exports.highlight = highlight;
