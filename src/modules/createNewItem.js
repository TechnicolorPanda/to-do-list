/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import { createList } from './arrayLogic';

// set form values when editing an item

function getInputValue(myList, itemValue) {
  for (let i = myList.length - 1; i >= 0; i--) {
    if (myList[i].item === itemValue) {
      document.getElementById('project').value = myList[i].project;
      document.getElementById('item').value = myList[i].item;
      document.getElementById('dueDate').value = myList[i].dueDate;
      document.getElementById('priority').value = myList[i].priority;
      document.getElementById('notes').value = myList[i].notes;
    }
  }
}

// create dropdown menu with list of projects

const getProject = function (myProject) {
  const addDropdownMenu = document.getElementById('project');

  for (let i = 0; i < myProject.length; i++) {
    const projectOption = myProject[i];
    const projectName = document.createElement('option');
    projectName.textContent = projectOption;
    projectName.value = projectOption;
    addDropdownMenu.appendChild(projectName);
  }
};

// create working submit button for create list item form

const addListItem = function (
  contentSection,
  myList,
  mySavedList,
  myProject,
  itemValue,
  edit,
) {
  const addSubmitButton = document.querySelector('#button');

  addSubmitButton.innerHTML = `<nav class = 'button'>
            <ul>
                <button id = 'submit'>Submit</a></li>
            </ul>
        </nav>
        `;

  submit.addEventListener('click', () => {
    createList(contentSection, myList, mySavedList, myProject, itemValue, edit);
  });
};

// create input fields for list items

const loadCreateNewItem = function (
  contentSection,
  myList,
  mySavedList,
  myProject,
  itemValue,
  edit,
) {
  contentSection.innerHTML = `
    <div id = 'content'>
        <div id = 'form'>
            <label for='project'>Project</label>
            <select id = 'project' name='project'>
            </select><br> 
            <label for='item'>Item</label>
            <input type='text' id='item' class='text-input' name='item' maxlength='200' value=' '><br>
            <label for='dueDate'>Due Date</label>
            <input type='text' id='dueDate' class='text-input' name='dueDate' maxlength='100' value=' '><br>
            <label for='priority'>Priority</label>
            <select id = 'priority' name='priority'>
                <option value = 1>high</option>
                <option value = 2>medium</option>
                <option value = 3>low</option>
            </select><br>
            <label for='notes'>Notes</label><br>
            <input type='text' id='notes' class='text-input' name='notes' maxlength='20000' value = ' '></input><br>
            <div id='button'></div>
        </div>
    </div>
`;
  getInputValue(myList, itemValue);
  getProject(myProject);
  addListItem(contentSection, myList, mySavedList, myProject, itemValue, edit);
};

export { loadCreateNewItem };
