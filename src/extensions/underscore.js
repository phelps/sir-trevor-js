/*
  Underscore helpers
*/

var url_regex = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

_.mixin({
  isURI : function(string) {
    return (url_regex.test(string));
  },

  capitalize : function(string) {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  },

  trim : function(string) {
    return string.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  },

  flattern: function(obj) {
    var x = {};
    _.each(obj, function(a,b) {
      x[(_.isArray(obj)) ? a : b] = true;
    });
    return x;
  },

  to_slug: function(str) {
    return str
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-');
  }

});

