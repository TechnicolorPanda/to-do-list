import {loadHome} from './home.js';
import {placeInStorage} from './localStorage.js';

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

const createList = function(contentSection, myList, mySavedList, myProject, itemValue, edit) {

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

//clear checked off items

const loadClearCompleted = function(contentSection, myList, mySavedList, myProject) {
	for (let l = myList.length-1; l >= 0; l--) {
        if (myList[l].completed === 'yes') {
            clearListItem(myList[l].item, myList, mySavedList);
        }
    }
    loadHome(contentSection, myList, mySavedList, myProject);
}

export {removeItem};
export {crossOffItem};
export {loadClearCompleted};
export {createList};
