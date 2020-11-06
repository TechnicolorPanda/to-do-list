
import {loadHome} from './home.js';

//create input fields for list items

const loadCreateNewItem = function(contentSection, myList) {

    contentSection.innerHTML = `		
    <div id = 'container'>
    <div id = 'form'>
        <label for='item'>Item</label>
        <input type='text' id='item' class='text-input' name='item' maxlength='100' onfocus='this.value=" "'><br>
        <label for='dueDate'>Due Date</label>
        <input type='text' id='dueDate' class='text-input' name='dueDate' maxlength='100' onfocus='this.value=" "'><br>
        <label for='priority'>Priority</label>
        <input type='number' id='priority' value = '0' name='priority' min='0' max='9999' onfocus='this.value=""'><br>
        <div id='button'></div>
    </div>
`	

    addListItem(contentSection, myList);
};

//create working submit button

const addListItem = function(contentSection, myList) {

    const addSubmitButton = document.querySelector('#button');

    addSubmitButton.innerHTML =
        `<nav class = 'button'>
            <ul>
                <button id = 'submit'>Submit</a></li>
            </ul>
        </nav>`

    const newTab = document.querySelector('#submit');

    //add event listeners for submit button

    submit.addEventListener('click', () => {
        //resetPage(contentSection);
        console.log('select submit');
        createList(contentSection, myList);
        }
    )
}

//create a class for list items

class listItem {
    constructor(item, dueDate, priority) {
        this.item = item;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

// push list items into an array

function createList(contentSection, myList) {

    const mySavedList = [];

    let item = document.getElementById('item').value;
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('priority').value;
    let myListItem = new listItem(item, dueDate, priority);

	myList.push(myListItem);
	
	// myList.forEach(element => 
    //     mySavedList = element);

    loadHome(contentSection, myList);
}


export {loadCreateNewItem};