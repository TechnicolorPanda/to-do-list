import {removeItem} from './createNewItem.js';
import {crossOffItem} from './createNewItem.js';
import {loadCreateNewItem} from './createNewItem.js';

//load home page elements

const loadHome = function(contentSection, myList, mySavedList, myProject) {
	loadBackground();
	loadTitle(contentSection, myList, mySavedList, myProject);
	if (myList.length>0) {
		renderList(contentSection, myList, mySavedList, myProject);
	} else {
		console.log('no list items');
	};
};

//load page background image

const loadBackground = function() {
	let style = document.createElement('style');
	style.innerHTML = `
		body{
			background-color: white;
			background-repeat: no-repeat;
			background-attachment: fixed;
			background-size: cover;
		}
		`
		document.head.appendChild(style);
};

//load page title

const loadTitle = function(contentSection, myList, mySavedList, myProject) {
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
}

//render to do list to the page

function renderList(contentSection, myList, mySavedList, myProject) {

	for(let i = 0; i < myProject.length; i++) {

		const box = document.createElement('box');
		const table = document.createElement('table');
		let cell = document.createElement('th');
		let row = table.insertRow(0);
		cell.innerHTML = (myProject[i]);
		row.appendChild(cell);
		contentSection.appendChild(row);

			myList.forEach(element => 
				render(element.item, element.dueDate, element.priority, element.completed, element.notes, element.project));

			function render() {

				if (myProject[i] === arguments[5]) {

					let row = table.insertRow(0);
					createCheckbox(row, myList, mySavedList, contentSection, arguments[3], arguments[0]);
					
					for(let j = 0; j < 3; j++){ 
						let cell = document.createElement('td');
						cell.innerHTML = (arguments[j]);
						row.appendChild(cell);

						//make myProject array carry through to createNewItem page

						row.addEventListener('dblclick', () => {
							selectItem(myList, mySavedList, contentSection, myProject, arguments[0]);
						});
				}
				
			addRemoveButton(row, myList, mySavedList, contentSection, arguments[0], myProject);
			contentSection.appendChild(row);
			}
		}
	}	
}

//create task completed checkbox on table

function createCheckbox(row, myList, mySavedList, contentSection, isCompleted, checkboxID) {

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
		crossOffItem(row, myList, checkbox, mySavedList);
	}, false);

}

//add ability to delete items

function addRemoveButton(row, myList, mySavedList, contentSection, itemValue, myProject) {
	const button = document.createElement('button');
	button.value =  itemValue;
	button.id = 'trashButton';
	row.appendChild(button);
	button.addEventListener('click', () => {
		removeItem(button, myList, mySavedList, contentSection, myProject);
	})
}

function selectItem(myList, mySavedList, contentSection, myProject, itemValue) {
	let edit = true; 
	loadCreateNewItem(contentSection, myList, mySavedList, myProject, itemValue, edit);
}

export {loadHome};
