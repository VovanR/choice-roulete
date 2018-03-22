// import Timeout from './timeout.js'
import Stat from './stat.js'
import ApproveTimer from './approve-timer.js'
import DoneMessage from './done-message.js'
import Random from './random.js'

const stat = new Stat()
const random = new Random()

const doneMessage = new DoneMessage({
	element: document.getElementById('done-message'),
})

const approveTimer = new ApproveTimer({
	element: document.getElementById('progress'),
	onDone: () => {
		doneMessage.show()
	}
})

const items = []

const addItem = (name) => items.push({name})

const i = [
	'Башмачники',
	'Китайцы',
	'Блины',
	'Пышка',
	'Вон там',
]

i.forEach(addItem)

function update() {
	document.getElementById('result').innerText = random.getRandomItem(items).name
	approveTimer.start()
	stat.log()
}

document.getElementById('app').addEventListener('click', update)

update()
