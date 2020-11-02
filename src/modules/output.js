import {renderList} from './render.js';

const myList = [];
const mySavedList = [];

const createOutput = function(contentSection) {
    console.log('output');
    //loadOutputBox(contentSection);
    createList();
}

// const loadOutputBox = function(contentSection) {

//     console.log('output box');

// 	contentSection.innerHTML = `		
//         <div id = 'box'>
//             <table id = 'listTable'></table>
//         </div>
//     `	
// }

//create list item class

class listItem {
    constructor(item, dueDate, priority) {
        this.item = item;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

//populate array with list items

function createList() {

    let item = document.getElementById('item').value;
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('priority').value;
    const myListItem = new listItem(item, dueDate, priority);

    console.log(item, dueDate, priority);
    console.log(myListItem);
    console.log(myList);
    
    myList.push(myListItem);

    console.log(myList);

    console.log(myList + " list item");

    renderList();
}


//     myList.forEach(element => 
//         render(element.item, element.dueDate, element.priority));
// }

       export {createOutput};