
import {loadHome} from './home.js';

//create input fields for list items

const loadCreateNewItem = function(contentSection, myList, mySavedList) {

    contentSection.innerHTML = `		
    <div id = 'content'>
    <div id = 'form'>
        <label for='item'>Item</label>
        <input type='text' id='item' class='text-input' name='item' maxlength='200' onfocus='this.value=" "'><br>
        <label for='dueDate'>Due Date</label>
        <input type='text' id='dueDate' class='text-input' name='dueDate' maxlength='100' onfocus='this.value=" "'><br>
        <label for='priority'>Priority</label>
        <select id = 'priority' name='priority'>
            <option value = 'high'>high</option>
            <option value = 'medium'>medium</option>
            <option value = 'low'>low</option>
        </select><br>
        <label for='notes'>Notes</label><br>
        <textarea type='text' id='notes' class='text-input' name='notes' maxlength='20000' onfocus='this.value=" "'></textarea><br>
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
    constructor(item, dueDate, priority, notes) {
        this.item = item;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

// push list items into a saved array

function createList(contentSection, myList, mySavedList) {

    let item = document.getElementById('item').value;
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('priority').value;
    let notes = document.getElementById('notes').value;
    let myListItem = new listItem(item, dueDate, priority, notes);

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

//remove item from array when button selected

function removeItem(button, myList, mySavedList, contentSection) {
        for (let i = myList.length-1; i>=0; i--) {
            if (myList[i].item === button.value)
                myList.splice(i,1);
        }

        myList.forEach(element => 
            mySavedList = element);
    
        placeInStorage(myList);
        loadHome(contentSection, myList);
}

export {loadCreateNewItem};
export {removeItem};