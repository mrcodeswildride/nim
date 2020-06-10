let pile1Paragraph = document.getElementById(`pile1Paragraph`)
let pile1Input = document.getElementById(`pile1Input`)
let pile1Button = document.getElementById(`pile1Button`)

let pile2Paragraph = document.getElementById(`pile2Paragraph`)
let pile2Input = document.getElementById(`pile2Input`)
let pile2Button = document.getElementById(`pile2Button`)

let pile3Paragraph = document.getElementById(`pile3Paragraph`)
let pile3Input = document.getElementById(`pile3Input`)
let pile3Button = document.getElementById(`pile3Button`)

let turnParagraph = document.getElementById(`turnParagraph`)

let pile1 = 3
let pile2 = 4
let pile3 = 5
let turn = `Player 1`

pile1Button.addEventListener(`click`, takePile1)
pile2Button.addEventListener(`click`, takePile2)
pile3Button.addEventListener(`click`, takePile3)

function takePile1() {
  let pile1Value = Math.floor(pile1Input.value)

  if (pile1Value > 0 && pile1Value <= pile1) {
    pile1 = pile1 - pile1Value
    pile1Paragraph.innerHTML = `1st pile: ${pile1}`

    pile1Input.value = ``
    pile1Input.max = pile1

    if (pile1 == 0) {
      pile1Input.disabled = true
      pile1Button.disabled = true
    }

    switchTurn()
  }
}

function takePile2() {
  let pile2Value = Math.floor(pile2Input.value)

  if (pile2Value > 0 && pile2Value <= pile2) {
    pile2 = pile2 - pile2Value
    pile2Paragraph.innerHTML = `2nd pile: ${pile2}`

    pile2Input.value = ``
    pile2Input.max = pile2

    if (pile2 == 0) {
      pile2Input.disabled = true
      pile2Button.disabled = true
    }

    switchTurn()
  }
}

function takePile3() {
  let pile3Value = Math.floor(pile3Input.value)

  if (pile3Value > 0 && pile3Value <= pile3) {
    pile3 = pile3 - pile3Value
    pile3Paragraph.innerHTML = `3rd pile: ${pile3}`

    pile3Input.value = ``
    pile3Input.max = pile3

    if (pile3 == 0) {
      pile3Input.disabled = true
      pile3Button.disabled = true
    }

    switchTurn()
  }
}

function switchTurn() {
  if (pile1 == 0 && pile2 == 0 && pile3 == 0) {
    turnParagraph.style.color = `#ff4c00`
    turnParagraph.innerHTML = `${turn} wins`
  }
  else {
    if (turn == `Player 1`) {
      turn = `Player 2`
    }
    else if (turn == `Player 2`) {
      turn = `Player 1`
    }

    turnParagraph.innerHTML = `${turn}'s turn`
  }
}