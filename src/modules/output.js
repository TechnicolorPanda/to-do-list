const createOutput = function(contentSection) {
    console.log('output');
    loadOutputBox(contentSection);
}

const loadOutputBox = function(contentSection) {
	contentSection.innerHTML = `		
	<div id = "box">
		<table id = "listTable"></table>
    </div>
`	
}

function addListItem() {
    let item = document.getElementById('item').value;
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('priority').value;
    const listItem = new listItem(item, dueDate, priority);

    myList.push(listItem);
    
    myList.forEach(element => 
        mySavedList = element);
    
//     localStorage.setItem("mySavedList", JSON.stringify(myList));

//     clearTable();
//     myList.forEach(element => 
//         render(element.item, element.dueDate, element.priority));
// }

// const addListItem = function(contentSection) {

// button.addEventListener('click', () => {
//     console.log('press button');
//     resetPage(contentSection);
//     loadCreateNewItem(contentSection);
// });

}

{/* <input type="checkbox" id="read" name="read" 
onclick="if(this.checked){value='yes'} else {value='no'}"> */}

export {createOutput};