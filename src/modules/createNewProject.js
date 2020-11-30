import {loadHome} from './home.js';

//create form to add new project option

const loadCreateNewProject = function(contentSection, myProject, mySavedProject) {

    contentSection.innerHTML = `		
    <div id = 'content'>
        <div id = 'form'>
            <label for='newProject'>Project</label>
            <input type='text' id='newProject' class='text-input' name='newProject' maxlength='200' onfocus='this.value=" "'><br>
            <div id = 'button'></div>
        </div>
    </div>
`	
    addProject(contentSection, myProject);
    createHeading(contentSection);
    renderProject(contentSection, myProject, mySavedProject);
};

//add working button to create a new project

function addProject(contentSection, myProject, mySavedProject){

    console.log('add project');
    
    const addCreateButton = document.querySelector('#button');

    addCreateButton.innerHTML =
        `<nav class = 'button'>
            <ul>
                <button id = 'create'>Create</a></li>
            </ul>
        </nav>
        `

    create.addEventListener('click', () => {
        createProject(contentSection, myProject, mySavedProject);
    });
}

//push new project to list of project options

function createProject(contentSection, myProject, mySavedProject) {
    let projectItem = document.getElementById('newProject').value;
    myProject.push(projectItem);	
    placeInStorage(myProject);
    loadCreateNewProject(contentSection, myProject, mySavedProject); 
}

//place project list in local storage

function placeInStorage(myProject) {
    localStorage.setItem('mySavedProject', JSON.stringify(myProject));
}

//create heading for current project list

function createHeading(contentSection) {
    const box = document.createElement('box');
    const heading = document.createElement('table');
    let row = heading.insertRow(0);
    let cell = document.createElement('th');
    cell.innerHTML = ('Current Projects');
    row.appendChild(cell);
    heading.appendChild(row);
    box.appendChild(heading);
    contentSection.appendChild(box);
}

//render current project list below box to add new projects

function renderProject(contentSection, myProject, mySavedProject) {

    console.log(myProject);
    console.log('renderProject');

    myProject.forEach(element => 
        render(element));
        
    function render() {
        const box = document.createElement('box');
        const table = document.createElement('table');
        let row = table.insertRow(0);
        for(let j = 0; j < 1; j++){ 
            let cell = document.createElement('td');
            console.log(arguments[j]);
            cell.innerHTML = (arguments[j]);
            row.appendChild(cell);
        };
        addRemoveButton(row, myProject, mySavedProject, contentSection, arguments[0]);
        contentSection.appendChild(row);
    }

}

//add trash button to remove projects from current options

function addRemoveButton(row, myProject, mySavedProject, contentSection, itemValue) {
	const button = document.createElement('button');
	button.value =  itemValue;
	button.id = 'trashButton';
	row.appendChild(button);
	button.addEventListener('click', () => {
		removeItem(button, myProject, mySavedProject, contentSection);
	})
}

//remove project item from list

function removeItem(button, myProject, mySavedProject, contentSection) {
    for (let i = myProject.length-1; i>=0; i--) {
        console.log("project value");
        console.log(myProject[i]);
        if (myProject[i] === button.value)
            myProject.splice(i,1);
    }

    myProject.forEach(element => 
        mySavedProject = element);

    placeInStorage(myProject);
    loadCreateNewProject(contentSection, myProject, mySavedProject);
}

export {loadCreateNewProject};