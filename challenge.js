const incrementCounter = function() {
  function increment(plusOrMinusOne) {
    currentCount.innerHTML = parseInt(counter.innerText) + plusOrMinusOne
  }
  event && event.srcElement === buttons['minus'] ? increment(-1) : increment(1)
}

const addLike = function() {
  function addListItem(num, count) {
    likeList.innerHTML += `<li id=${num} data-count=${count} >${num} has been liked ${count} times</li>`
  }

  const num = currentCount.innerHTML
  const listNum = document.getElementById(`${num}`)
  let count = 0

  if (listNum) {
    count = parseInt(listNum.dataset.count)
    listNum.remove()
  }

  count++
  addListItem(num, count)
}

const pause = function() {
  function buttonToggle(boolean, pauseOrResume) {
    for (button in buttons) {
      if (button === 'pause') { buttons[button].innerText = pauseOrResume }
      else { buttons[button].disabled = boolean }
    }
  }

  if (buttons['pause'].innerText === 'pause') {
    clearInterval(timer)
    buttonToggle(true, 'resume')
  } else {
    timer =  setInterval(incrementCounter, 1000)
    buttonToggle(false, 'pause')
  }
}

const addComment = function() {
  let form = document.getElementById('comment-form')
  let comment = form.children[0].value
  commentList.innerHTML += `<li>${comment}</li>`
}

let timer = setInterval(incrementCounter, 1000)
let currentCount = document.getElementById('counter')
let likeList = document.getElementsByClassName('likes')[0]
let commentList = document.getElementById('list').appendChild(document.createElement('ul'))
let buttons = {
  minus: document.getElementById('-'),
  plus: document.getElementById('+'),
  like: document.getElementById('<3'),
  pause: document.getElementById('pause'),
  submit: document.getElementById('submit')
}

buttons['minus'].addEventListener('click', incrementCounter)
buttons['plus'].addEventListener('click', incrementCounter)
buttons['like'].addEventListener('click', addLike)
buttons['pause'].addEventListener('click', pause)
buttons['submit'].addEventListener('click', addComment)
