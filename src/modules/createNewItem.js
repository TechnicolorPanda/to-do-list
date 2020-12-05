
import {loadHome} from './home.js';

//create input fields for list items

const loadCreateNewItem = function(contentSection, myList, mySavedList, myProject, itemValue, edit) {

    contentSection.innerHTML = `		
    <div id = 'content'>
        <div id = 'form'>
            <label for='project'>Project</label>
            <select id = 'project' name='project'>
            </select><br> 
            <label for='item'>Item</label>
            <input type='text' id='item' class='text-input' name='item' maxlength='200' value=' ' onfocus='this.value=" "'><br>
            <label for='dueDate'>Due Date</label>
            <input type='text' id='dueDate' class='text-input' name='dueDate' maxlength='100' value=' ' onfocus='this.value=" "'><br>
            <label for='priority'>Priority</label>
            <select id = 'priority' name='priority' value = ' '>
                <option value = 'high'>high</option>
                <option value = 'medium'>medium</option>
                <option value = 'low'>low</option>
            </select><br>
            <label for='notes'>Notes</label><br>
            <textarea type='text' id='notes' class='text-input' name='notes' maxlength='20000' value = ' ' onfocus='this.value=" "'></textarea><br>
            <div id='button'></div>
        </div>
    </div>
`	
    getInputValue(myList, mySavedList, itemValue);
    getProject(contentSection, myProject);
    addListItem(contentSection, myList, mySavedList, myProject, itemValue, edit);
};

//set form values when editing an item

function getInputValue(myList, mySavedList, itemValue) {
    console.log('get input value');
    console.log('item value ' + itemValue);
    for (let i = myList.length-1; i >= 0; i--){
        if (myList[i].item === itemValue) {
            console.log(myList[i].item);
            document.getElementById('project').value = myList[i].project;
            document.getElementById('item').value = myList[i].item;
            document.getElementById('dueDate').value = myList[i].dueDate;
            document.getElementById('priority').value = myList[i].priority;
            document.getElementById('notes').value = myList[i].notes;
        }
    }
}

//create dropdown menu with listof projects

const getProject = function(contentSection, myProject) {

    const addDropdownMenu = document.getElementById('project');

    for(let i = 0; i < myProject.length; i++){
        let projectOption = myProject[i];
        let projectName = document.createElement('option');
        projectName.textContent = projectOption;
        projectName.value = projectOption;
        addDropdownMenu.appendChild(projectName);
    }
};

//create working submit button for create list item form

const addListItem = function(contentSection, myList, mySavedList, myProject, itemValue, edit) {

    const addSubmitButton = document.querySelector('#button');

    addSubmitButton.innerHTML =
        `<nav class = 'button'>
            <ul>
                <button id = 'submit'>Submit</a></li>
            </ul>
        </nav>
        `

    submit.addEventListener('click', () => {
        createList(contentSection, myList, mySavedList, myProject, itemValue, edit);
    })
}

//create a class for list items

class listItem {
    constructor(item, dueDate, priority, notes, completed, project) {
        this.item = item;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
        this.notes = notes;
        this.project = project;
    }
}

// push list items into a saved array

function createList(contentSection, myList, mySavedList, myProject, itemValue, edit) {

    let item = document.getElementById('item').value;
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('priority').value;
    let completed = 'no';
    let notes = document.getElementById('notes').value;
    let project = document.getElementById('project').value;
    let myListItem = new listItem(item, dueDate, priority, notes, completed, project);

    myList.push(myListItem);

    //delete old list item to prevent duplication when editing

    if (edit = true) {
        clearListItem(itemValue, myList, mySavedList);
    }

    //save items to local storage
	
	myList.forEach(element => 
        mySavedList = element);

    placeInStorage(myList);
    loadHome(contentSection, myList, mySavedList, myProject);
}

//add to do list to local storage

function placeInStorage(myList) {
    localStorage.setItem('mySavedList', JSON.stringify(myList));
}

//remove checked off item from array

function crossOffItem(row, myList, checkbox, mySavedList){
		for (let i = myList.length-1; i>=0; i--) {
			if (myList[i].item === checkbox.value) {
				if (checkbox.checked === false) {
					myList[i].completed = 'no';
				} else {
					myList[i].completed = 'yes';
				};
            }
            myList.forEach(element => 
                mySavedList = element);

            placeInStorage(myList);
		}
}

//remove item from array when button selected

function removeItem(button, myList, mySavedList, contentSection, myProject) {
        clearListItem(button.value, myList, mySavedList)
        loadHome(contentSection, myList, mySavedList, myProject);
}

//delete one item from list item array

function clearListItem(itemValue, myList, mySavedList) {
    if (itemValue != ' ') {
        console.log(myList.length);
        for (let k = myList.length-1; k>=0; k--) {
            if (myList[k].item === itemValue) {
                myList.splice(k,1);
                break;
            }
        }

        myList.forEach(element => 
            mySavedList = element);
    
        placeInStorage(myList);
    }
}

const loadClearCompleted = function(contentSection, myList, mySavedList, myProject) {
    console.log(myList);
	for (let l = myList.length-1; l >= 0; l--) {
        if (myList[l].completed === 'yes') {
            console.log(myList[l].completed);
            clearListItem(myList[l].item, myList, mySavedList);
        }
    }
    loadHome(contentSection, myList, mySavedList, myProject);
}

export {loadCreateNewItem};
export {removeItem};
export {crossOffItem};
export {loadClearCompleted};