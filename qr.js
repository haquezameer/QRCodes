const qr = require('qr-image');
var qrSvg = qr.image('https://github.com/zamhaq', {type: 'png', parse_url: true});
qrSvg.pipe(require('fs').createWriteStream('github.png'));