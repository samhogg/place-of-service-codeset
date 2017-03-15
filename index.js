poscJSON = require('./codes.json')

// We need a two char string code
function pad (code) {
  var stringCode = '' + code
  return stringCode.length === 2 ? stringCode : '0' + stringCode
}

module.exports = function placeOfServiceCode (code) {
  var filtered = poscJSON.filter(function (d) {
    return d.placeOfServiceCode === pad(code)
  })
  return filtered.length > 0 ? filtered[0] : null
}
