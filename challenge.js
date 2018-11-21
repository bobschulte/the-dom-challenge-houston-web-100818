const incrementCounter = function(event) {
  if (event && event.srcElement === document.getElementById('-')) {
    document.getElementById('counter').innerHTML = parseInt(counter.innerHTML) - 1;
  } else {
    document.getElementById('counter').innerHTML = parseInt(counter.innerHTML) + 1;
  }
}

const likes = function(){
  const likeDiv = document.getElementById('list')
  const likeList = likeDiv.appendChild(document.createElement('ul'))

  function addListItem(list, num, count) {
    list.innerHTML += `<li id=${num} data-count=${count} >${num} has been liked ${count} times</li>`
  }

  function addLike(){
    const num = document.getElementById('counter').innerHTML
    const listNum = document.getElementById(`${num}`)

    if (listNum) {
      let count = parseInt(listNum.dataset.count) + 1
      listNum.remove()
      addListItem(likeList, num, count)
    } else {
      let count = 1
      addListItem(likeList, num, count)
    }
  }
  document.getElementById('<3').addEventListener('click', addLike)
}

const pauseButton = function() {

  let button = document.getElementById('pause')

  function pause() {
    if (button.innerText === 'pause') {
      button.innerText = 'resume'
      document.getElementById('-').disabled = true
      document.getElementById('+').disabled = true
      document.getElementById('<3').disabled = true
      clearInterval(timer)
    } else {
      button.innerText = 'pause'
      document.getElementById('-').disabled = false
      document.getElementById('+').disabled = false
      document.getElementById('<3').disabled = false
      timer =  setInterval(incrementCounter, 1000)
    }
  }
  button.addEventListener('click', pause)
}

let timer = setInterval(incrementCounter, 1000)
document.getElementById('-').addEventListener('click', incrementCounter)
document.getElementById('+').addEventListener('click', incrementCounter)

likes()
pauseButton()
