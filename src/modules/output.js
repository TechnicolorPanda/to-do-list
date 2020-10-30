const myList = [];
const mySavedList = [];

const createOutput = function(contentSection) {
    console.log('output');
    loadOutputBox(contentSection);
    addListItem();
}

const loadOutputBox = function(contentSection) {

    console.log('output box');

	contentSection.innerHTML = `		
        <div id = 'box'>
            <table id = 'listTable'></table>
        </div>
    `	
}

//create list item class

class listItem {
    constructor(item, dueDate, priority) {
        this.item = item;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

//populate array with list items

function addListItem() {
    console.log ('add list items');

    //add HTML for elements***

    let item = document.getElementById('item').value;
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('priority').value;
    const myListItem = new listItem(item, dueDate, priority);

    myList.push(myListItem);

    console.log('List array ' + myList);
    
    myList.forEach(element => 
        mySavedList = element);

    //localStorage.setItem('mySavedList', JSON.stringify(myList));

    //clearTable();
    myList.forEach(element => 
        render(element.item, element.dueDate, element.priority));
}

function render() {
    console.log('render');
    const box = document.getElementById("box");
    const table = document.getElementById('listTable');
    let row = table.insertRow(0);
        for(let j = 0; j < 3; j++){ 
            let cell = document.createElement("td");
            cell.innerHTML = (arguments[j]);
            row.appendChild(cell);
        }

export {createOutput};