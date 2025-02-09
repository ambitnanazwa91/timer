const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const stopwatch = document.querySelector('.stopwatch')
const historyBtn = document.querySelector('.history')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')

const infoBtn = document.querySelector('.icon-info')
const colorsBtn = document.querySelector('.icon-colors')
const color = document.querySelector('.colors')
const colorOne = document.querySelector('.one')
const colorTwo = document.querySelector('.two')
const colorThree = document.querySelector('.three')
const colorFour = document.querySelector('.four')
const modalShadow = document.querySelector('.modal-shadow')
const closeBtn = document.querySelector('.close')

let root = document.documentElement

let countTime
let minutes = 0
let seconds = 0

let timesArr = []

const handleStart = () => {
	clearInterval(countTime)

	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++
			stopwatch.textContent = `${minutes}:0${seconds}`
		} else if (seconds >= 9 && seconds < 59) {
			seconds++

			stopwatch.textContent = `${minutes}:${seconds}`
		} else {
			minutes++
			seconds = 0
			stopwatch.textContent = `${minutes}:00`
		}
	}, 1000)
}

const handleStop = () => {
	time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`

	if (stopwatch.textContent !== '0:00') {
		time.style.visibility = 'visible'
		timesArr.push(stopwatch.textContent)
		console.log(timesArr)
	}
	clearStuff()
}

const handlePuase = () => {
	clearInterval(countTime)
}

const handleReset = () => {
	time.style.Visibilty = 'hidden'
	timesArr = []
	console.log(timesArr)
	clearStuff()
}

const clearStuff = () => {
	clearInterval(countTime)
	minutes = 0
	seconds = 0
	stopwatch.textContent = '0:00'
	timeList.textContent = ''
}

const showHistory = () => {
	timeList.textContent = ''

	timesArr.forEach(time => {
		const newTime = document.createElement('li')
		const measur = timesArr.indexOf(time) + 1
		newTime.innerHTML = `Pomiar nr ${measur}: <span>${time}</span>`
		timeList.appendChild(newTime)
		console.log(measur)
	})
}

const showModal = () => {
	if (!(modalShadow.style.display === 'block')) {
		modalShadow.style.display = 'block'
	} else {
		modalShadow.style.display = 'none'
	}
	modalShadow.classList.add('modal-animation')
}

startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePuase)
stopBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReset)
historyBtn.addEventListener('click', showHistory)
infoBtn.addEventListener('click', showModal)
closeBtn.addEventListener('click', showModal)
window.addEventListener('click', e => {
	e.target === modalShadow ? showModal() : false
})

colorsBtn.addEventListener('click', () => {
	color.classList.toggle('show-colors')
})

colorOne.addEventListener('click', () => {
	root.style.setProperty('--first-color', '#fa4b06')
})
colorTwo.addEventListener('click', () => {
	root.style.setProperty('--first-color', '#45d133')
})
colorThree.addEventListener('click', () => {
	root.style.setProperty('--first-color', '#d135d1')
})
colorFour.addEventListener('click', () => {
	root.style.setProperty('--first-color', '#45d133')
})
