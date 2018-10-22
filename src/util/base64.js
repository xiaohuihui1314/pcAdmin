/**
 *
 *  Base64 encode / decode
 *  http://www.webtoolkit.info/
 *
 */
/* eslint-disable */
const Base64 = {
  
  // private property
  keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  
  // public method for encoding
  encode: function(input) {
    var output = '',
      chr1, chr2, chr3, enc1, enc2, enc3, enc4,
      i = 0,
      inputStr = Base64.utf8_encode(input);
    while (i < inputStr.length) {
      chr1 = inputStr.charCodeAt(i++);
      chr2 = inputStr.charCodeAt(i++);
      chr3 = inputStr.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output = output +
        this.keyStr.charAt(enc1) + this.keyStr.charAt(enc2) +
        this.keyStr.charAt(enc3) + this.keyStr.charAt(enc4);
    }
    return output;
  },
  
  // public method for decoding
  decode: function(input) {
    var output = '',
      chr1, chr2, chr3,
      enc1, enc2, enc3, enc4,
      i = 0,
      inputStr = input.replace(/[^A-Za-z0-9+/=]/g, '');
    while (i < inputStr.length) {
      enc1 = this.keyStr.indexOf(inputStr.charAt(i++));
      enc2 = this.keyStr.indexOf(inputStr.charAt(i++));
      enc3 = this.keyStr.indexOf(inputStr.charAt(i++));
      enc4 = this.keyStr.indexOf(inputStr.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output += String.fromCharCode(chr1);
      if (enc3 !== 64) {
        output += String.fromCharCode(chr2);
      }
      if (enc4 !== 64) {
        output += String.fromCharCode(chr3);
      }
    }
    output = Base64.utf8_decode(output);
    return output;
  },
  
  // private method for UTF-8 encoding
  utf8_encode: function(string) {
    var utftext = '',
      n, c,
      str = string.replace(/\r\n/g, '\n');
    for (n = 0; n < str.length; n++) {
      c = str.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if ((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }
    return utftext;
  },
  // private method for UTF-8 decoding
  utf8_decode: function(utftext) {
    var string = '',
      i = 0,
      c = 0,
      c2 = 0,
      c3 = 0;
    while (i < utftext.length) {
      c = utftext.charCodeAt(i);
      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if ((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }
    }
    return string;
  }
};

const base64Cucpay = {
  base64EncodeChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  base64DecodeChars: new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54,
    55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1,
    -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1),
  
  decode: function(str){
    var c1, c2, c3, c4;
    var i, len, out;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
      /* c1 */
      do {
        c1 = this.base64DecodeChars[str.charCodeAt(i++) & 0xff];
      } while (i < len && c1 == -1);
      if (c1 == -1) break;
      /* c2 */
      do {
        c2 = this.base64DecodeChars[str.charCodeAt(i++) & 0xff];
      } while (i < len && c2 == -1);
      if (c2 == -1) break;
      out += String.fromCharCode(c1 << 2 | (c2 & 0x30) >> 4);
      /* c3 */
      do {
        c3 = str.charCodeAt(i++) & 0xff;
        if (c3 == 61) return out;
        c3 = this.base64DecodeChars[c3];
      } while (i < len && c3 == -1);
      if (c3 == -1) break;
      out += String.fromCharCode((c2 & 0XF) << 4 | (c3 & 0x3C) >> 2);
      /* c4 */
      do {
        c4 = str.charCodeAt(i++) & 0xff;
        if (c4 == 61) return out;
        c4 = this.base64DecodeChars[c4];
      } while (i < len && c4 == -1);
      if (c4 == -1) break;
      out += String.fromCharCode((c3 & 0x03) << 6 | c4);
    }
    return out;
  }
}


export {
  Base64,
  base64Cucpay
}
