

const loadCreateNewProject = function(contentSection, myList, mySavedList) {

    contentSection.innerHTML = `		
    <div id = 'content'>
    <div id = 'form'>
        <label for='project'>Project</label>
        <input type='text' id='project' class='text-input' name='project' maxlength='200' value=' ' onfocus='this.value=" "'><br>
        <div id = 'button'></div>
    </div>
`	
    console.log('add project');

    addProject(contentSection, myList, mySavedList);
};

function addProject(contentSection, myList, mySavedList){
    
    const addCreateButton = document.querySelector('#button');

    addCreateButton.innerHTML =
        `<nav class = 'button'>
            <ul>
                <button id = 'create'>Create</a></li>
            </ul>
        </nav>`

    //add event listeners for create button

    create.addEventListener('click', () => {
        createProject(contentSection, myList, mySavedList);
    });
}

function createProject(contentSection, myList, mySavedList) {
    console.log('created new project');
}

export {loadCreateNewProject};