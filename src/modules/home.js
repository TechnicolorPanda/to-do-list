//load home page elements

const loadHome = function(contentSection) {
	loadBackground();
	loadTitle(contentSection);
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

const loadTitle = function(contentSection) {
	contentSection.innerHTML = `		
		<h1 class='header'>Getting Stuff Done</h1>
		`

	createHeading('Item', 'Due Date', 'Priority', contentSection);

	function createHeading() {
		const box = document.createElement('box');
		const heading = document.createElement('table');
		let row = heading.insertRow(0);
			for(let i = 0; i < 3; i++){ 
				let cell = document.createElement('td');
				cell.innerHTML = (arguments[i]);
				row.appendChild(cell);
		   }
		heading.appendChild(row);
		box.appendChild(heading);
		contentSection.appendChild(box);
	}
}

//create list class

class listItem {
    constructor(item, dueDate, priority) {
        this.item = item;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

// add items to list

function createList() {

	const myList = [];
	const mySavedList = [];

    let item = document.getElementById('item').value;
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('priority').value;
    const myListItem = new listItem(item, dueDate, priority);

	myList.push(myListItem);
	
	myList.forEach(element => 
		mySavedList = element);
		
	localStorage.setItem('mySavedList', JSON.stringify(myList));

	//clearTable();
	myList.forEach(element => 
		render(element.title, element.author, element.pages, element.read));
}

function render() {
    const box = document.createElement('box');
    console.log(box);
    const table = document.createElement('table');
    let row = table.insertRow(0);
        for(let j = 0; j < 3; j++){ 
            let cell = document.createElement("td");
            cell.innerHTML = (arguments[j]);
            row.appendChild(cell);
		}
}


export {loadHome};


