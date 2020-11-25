//import page modules

import {loadHome} from './modules/home.js';
import {loadCreateNewItem} from './modules/createNewItem.js';
import {testLocalStorage} from './modules/localStorage.js';
import {loadCreateNewProject} from './modules/createNewProject.js';

initiatePage();

function initiatePage() {

    //load home page

    const contentSection = document.querySelector('#content');
    const myList = [];
    const mySavedList = [];
    const myProject = ['Miscellaneous'];
    testLocalStorage(myList, mySavedList);
    loadHome(contentSection, myList, mySavedList);
    loadSectionTabs(contentSection, myList, mySavedList, myProject);
    
}

//create empty MyList array in place of numberOfItems

function loadSectionTabs(contentSection, myList, mySavedList, myProject) {
    
    //load tabs

    const sectionTabs = document.querySelector('#tabs');

    sectionTabs.innerHTML =
        `<nav class = 'header'>
            <ul>
                <li id = 'new'>Create new item</a></li>
                <li id = 'addProject'>Add New Project</a></li>
                <li id = 'view'>View List</a></li>
            </ul>
        </nav>`

    const newTab = document.querySelector('#new');
    const newProject = document.querySelector('#addProject');
    const viewList = document.querySelector('#view');

    //add event listeners for tabs

    newTab.addEventListener('click', () => {
        loadCreateNewItem(contentSection, myList, mySavedList, myProject);
    })

    newProject.addEventListener('click', () => {
        loadCreateNewProject(contentSection, myList, mySavedList, myProject);
    })

    viewList.addEventListener('click', () => {
        loadHome(contentSection, myList, mySavedList, myProject);
    })
}

