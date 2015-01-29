(function () {
  'use strict'

  var pad = function (str) {
    str = String(str)

    return (str.length < 2 ? '0' : '') + str
  }

  var dec2hex = function (dec) {
    var hex = Number(dec).toString(16)

    return pad(hex)
  }

  var hexCol = function (h, m, s) {
    return '#' + [
      dec2hex(Math.floor(h / 24 * 256)),
      dec2hex(Math.floor(m / 60 * 256)),
      dec2hex(Math.floor(s / 60 * 256))
    ].join('')
  }

  var ui = {
    clock: document.getElementById('js-clock'),
    hex: document.getElementById('js-hex'),
    body: document.body
  }

  var loop = function () {
    setTimeout(loop, 1000)

    var now = new Date()

    var hours = now.getHours()
    var minutes = now.getMinutes()
    var seconds = now.getSeconds()

    var hex = hexCol(hours, minutes, seconds)

    console.log(hex)

    ui.clock.innerHTML = [pad(hours), pad(minutes), pad(seconds)].join(':')
    ui.hex.innerHTML = hex;
    ui.body.style.backgroundColor = hex;
  }

  loop()
})()
