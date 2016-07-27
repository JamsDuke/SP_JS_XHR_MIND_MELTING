var Predator = (function () {
  var carnivores = []
  var herbivores = []

  return {
    getCarnivores: function (cb) {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', 'carnivores.json')
      xhr.addEventListener('load', function (evt) {
        carnivores = JSON.parse(evt.target.responseText)
        cb(carnivores)
      })
      xhr.send()
      // store it in the private varriable
    },
    getHerbivores: function (cb) {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', 'herbivores.json')
      xhr.addEventListener('load', function (evt) {
        herbivores = JSON.parse(evt.target.responseText)
        cb(herbivores)
      })
      xhr.send()
    }
  }
}())