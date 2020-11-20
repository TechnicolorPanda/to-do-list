import {removeItem} from './createNewItem.js';
import {crossOffItem} from './createNewItem.js';

//load home page elements

const loadHome = function(contentSection, myList, mySavedList) {
	loadBackground();
	loadTitle(contentSection, myList, mySavedList);
};

//load page background image

const loadBackground = function() {
	let style = document.createElement('style');
	style.innerHTML = `
		body{
			background-image: url("images/november.jpg");
			background-repeat: no-repeat;
			background-attachment: fixed;
			background-size: cover;
		}
		`
		document.head.appendChild(style);
};

//load page title

const loadTitle = function(contentSection, myList, mySavedList) {
	contentSection.innerHTML = `		
		<h1 class='header'>Getting Stuff Done</h1>
		`

	createHeading('Item', 'Due Date', 'Priority', contentSection);

	function createHeading() {
		const box = document.createElement('box');
		const heading = document.createElement('table');
		let row = heading.insertRow(0);
			for(let i = 0; i < 3; i++){ 
				let cell = document.createElement('th');
				cell.innerHTML = (arguments[i]);
				row.appendChild(cell);
		   }
		heading.appendChild(row);
		box.appendChild(heading);
		contentSection.appendChild(box);
	}

	if (myList.length>0) {
		renderList(contentSection, myList, mySavedList);
	} else {
		console.log('no list items');
	};
}

//render to do list to the page

function renderList(contentSection, myList, mySavedList) {

	myList.forEach(element => 
		render(element.item, element.dueDate, element.priority, element.completed, element.notes));

	function render() {
		const box = document.createElement('box');
		const table = document.createElement('table');
		let row = table.insertRow(0);
		createCheckbox(row, myList, mySavedList, contentSection, arguments[3], arguments[0]);
		for(let j = 0; j < 4; j++){ 
			let cell = document.createElement('td');
			console.log(arguments[j]);
			cell.innerHTML = (arguments[j]);
			row.appendChild(cell);

			row.addEventListener('dblclick', () => {
				selectItem(row, myList, mySavedList, contentSection, arguments[0]);
			});
		}

	addRemoveButton(row, myList, mySavedList, contentSection, arguments[0]);
	contentSection.appendChild(row);
	}
}

//create task completed checkbox on table

function createCheckbox(row, myList, mySavedList, contentSection, isCompleted, checkboxID) {

	console.log("createCheckbox");

	const checkbox = document.createElement('input');
	checkbox.setAttribute('id','completed');
	checkbox.setAttribute('type','checkbox');
	checkbox.setAttribute('style', 'height: 20px; width: 20px; margin-top: 25px;');

	if (isCompleted === 'yes') {
		checkbox.checked = true;
		checkbox.value = checkboxID;
		row.appendChild(checkbox);
	} else {
		checkbox.checked = false;
		checkbox.value = checkboxID;
		row.appendChild(checkbox);
	}

	checkbox.addEventListener('click', function() {
		console.log('event selected');
		crossOffItem(row, myList, checkbox, mySavedList);
	}, false);

}

//add ability to delete items

function addRemoveButton(row, myList, mySavedList, contentSection, itemValue) {
	const button = document.createElement('button');
	button.value =  itemValue;
	row.appendChild(button);
	button.addEventListener('click', () => {
		removeItem(button, myList, mySavedList, contentSection);
	})
}

function selectItem(row, myList, mySavedList, contentSection, itemValue) {
	console.log('item selected');
	console.log(itemValue);
}

export {loadHome};
