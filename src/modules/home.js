//load home page elements

const loadHome = function(contentSection, myList) {
	loadBackground();
	loadTitle(contentSection, myList);
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

const loadTitle = function(contentSection, myList) {
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

	if (myList.length>0) {
		renderList(contentSection, myList);
	} else {
		console.log('no list items');
	};
}

//render to do list to the page

function renderList(contentSection, myList) {

	myList.forEach(element => 
		render(element.item, element.dueDate, element.priority));

		function render() {
			const box = document.createElement('box');
			const table = document.createElement('table');
			let row = table.insertRow(0);
				for(let j = 0; j < 3; j++){ 
					let cell = document.createElement('td');
					console.log(arguments[j]);
					cell.innerHTML = (arguments[j]);
					row.appendChild(cell);
				}
			contentSection.appendChild(row);
		}
	}

// 	myList.push(myListItem);
	
	// myList.forEach(element => 
	// 	mySavedList = element);
		
	//localStorage.setItem('mySavedList', JSON.stringify(myList));

	//clearTable();


export {loadHome};
