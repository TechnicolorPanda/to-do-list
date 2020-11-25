import {loadHome} from './home.js';

//create form to add new project option

const loadCreateNewProject = function(contentSection, myList, mySavedList, myProject) {

    contentSection.innerHTML = `		
    <div id = 'content'>
        <div id = 'form'>
            <label for='newProject'>Project</label>
            <input type='text' id='newProject' class='text-input' name='newProject' maxlength='200' onfocus='this.value=" "'><br>
            <div id = 'button'></div>
        </div>
    </div>
`	
    addProject(contentSection, myList, mySavedList, myProject);
};

//add working button to create a new project

function addProject(contentSection, myList, mySavedList, myProject){

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
        createProject(contentSection, myList, mySavedList, myProject);
    });
}

//push new project to list of project options

function createProject(contentSection, myList, mySavedList, myProject) {
    let projectItem = document.getElementById('newProject').value;
    myProject.push(projectItem);	
    loadHome(contentSection, myList, mySavedList);
}

export {loadCreateNewProject};