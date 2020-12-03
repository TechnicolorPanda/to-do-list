
import {loadHome} from './home.js';

//create input fields for list items

const loadCreateNewItem = function(contentSection, myList, mySavedList, myProject, itemValue) {

    console.log('load create new item');
    
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
    getInputValue(myList, itemValue);
    getProject(contentSection, myProject);
    addListItem(contentSection, myList, mySavedList);
};

//set form values

function getInputValue(myList, itemValue) {
    console.log('get input value');
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

const getProject = function(contentSection, myProject) {
    console.log("create dropdown menu");
    const addDropdownMenu = document.getElementById('project');

    for(let i = 0; i < myProject.length; i++){
        let projectOption = myProject[i];
        let projectName = document.createElement('option');
        projectName.textContent = projectOption;
        projectName.value = projectOption;
        addDropdownMenu.appendChild(projectName);
    }
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
        </nav>
        `

    //add event listeners for submit button

    submit.addEventListener('click', () => {
        createList(contentSection, myList, mySavedList);
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

function createList(contentSection, myList, mySavedList) {

    console.log("create list");
    
    let item = document.getElementById('item').value;
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('priority').value;
    let completed = 'no';
    let notes = document.getElementById('notes').value;
    let project = document.getElementById('project').value;
    let myListItem = new listItem(item, dueDate, priority, notes, completed, project);

    myList.push(myListItem);
	
	myList.forEach(element => 
        mySavedList = element);

    console.log(myList);

    placeInStorage(myList);
    loadHome(contentSection, myList);
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
export {crossOffItem};