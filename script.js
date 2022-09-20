var blueCar = document.getElementById('blueCar')
var raceCar = document.getElementById('raceCar')
var result = document.getElementById('result')
const score = document.getElementById('score')
var game = document.getElementById('game')
var counter = 0
var jumpsound = document.getElementById('jumpsound')

//blueCar move
//animationiteration -> It is an event and when their animation get completed and then again repeat is is calles as iteration
blueCar.addEventListener('animationiteration', function () {
  var random = Math.floor(Math.random() * 3) * 130
  blueCar.style.left = random + 'px'
  counter++
})

//RaceCar
// keydown - it is event
window.addEventListener('keydown', function (e) {
  //right key
  if (e.keyCode == '39') {
    var raceCarLeft = parseInt(
      window.getComputedStyle(raceCar).getPropertyValue('left')
    )

    if (raceCarLeft < 315) {
      raceCar.style.left = raceCarLeft + 65 + 'px'
      jumpsound.play()
    }
  }
  //left key
  if (e.keyCode == '37') {
    var raceCarLeft = parseInt(
      window.getComputedStyle(raceCar).getPropertyValue('left')
    )

    if (raceCarLeft > 0) {
      raceCar.style.left = raceCarLeft - 65 + 'px'
      jumpsound.play()
    }
  }
})

// Game Over
setInterval(function Gameover() {
  var blueCarTop = parseInt(
    window.getComputedStyle(blueCar).getPropertyValue('top')
  )
  var blueCarLeft = parseInt(
    window.getComputedStyle(blueCar).getPropertyValue('left')
  )
  var raceCarLeft = parseInt(
    window.getComputedStyle(raceCar).getPropertyValue('left')
  )
  if (blueCarLeft == raceCarLeft && blueCarTop > 240 && blueCarTop < 450) {
    result.style.display = 'block'
    game.style.display = 'none'
    score.innerHTML = `score: ${counter}`
    counter = 0
  }
}, 10)
//240 460
