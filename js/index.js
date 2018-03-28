import Stat from './stat.js';
import ApproveTimer from './approve-timer.js';
import DoneMessage from './done-message.js';
import Random from './random.js';
import Data from './data.js';

const stat = new Stat();
const random = new Random();

const doneMessage = new DoneMessage({
	element: document.getElementById('done-message')
});

const approveTimer = new ApproveTimer({
	element: document.getElementById('progress'),
	onDone: () => {
		doneMessage.show();
	}
});

// TODO: Remove fish data
const i = [
	'Башмачники',
	'Китайцы',
	'Блины',
	'Пышка',
	'Вон там'
];

const data = new Data();

// TODO: Remove with fish data
data._clear();

i.forEach(data.addItem.bind(data));

function update() {
	const items = data.getItems();
	const randomItem = random.getRandomItem(items).name;
	document.getElementById('result').innerText = randomItem;
	approveTimer.start();
	stat.log();
}

document.getElementById('app').addEventListener('click', update);

update();
