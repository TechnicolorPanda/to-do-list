
import {loadHome} from './home.js';

//create input fields for list items

const loadCreateNewItem = function(contentSection, myList, mySavedList) {

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

    addListItem(contentSection, myList, mySavedList);
};

//create working submit button

const addListItem = function(contentSection, myList, mySavedList) {

    //create submit button

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
        createList(contentSection, myList, mySavedList);
    })
}

//create a class for list items

class listItem {
    constructor(item, dueDate, priority) {
        this.item = item;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

// push list items into a saved array

function createList(contentSection, myList, mySavedList) {

    let item = document.getElementById('item').value;
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('priority').value;
    let myListItem = new listItem(item, dueDate, priority);

    myList.push(myListItem);
	
	myList.forEach(element => 
        mySavedList = element);

    placeInStorage(myList);
    loadHome(contentSection, myList);
}

//add to do list to local storage

function placeInStorage(myList) {
    localStorage.setItem('mySavedList', JSON.stringify(myList));
}

export {loadCreateNewItem};