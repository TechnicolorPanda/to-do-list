// import page modules

import { loadHome } from './modules/home';
import { loadClearCompleted } from './modules/arrayLogic';
import { loadCreateNewItem } from './modules/createNewItem';
import { testLocalStorage } from './modules/localStorage';
import { loadCreateNewProject } from './modules/createNewProject';

(function initiatePage() {
  // set arrays and variables

  const contentSection = document.querySelector('#content');
  const myList = [];
  const mySavedList = [];
  const myProject = [];
  const mySavedProject = [];
  const itemValue = ' ';

  // display home page content

  testLocalStorage(myList, mySavedList, myProject, mySavedProject);
  loadHome(contentSection, myList, mySavedList, myProject);
  // eslint-disable-next-line no-use-before-define
  loadSectionTabs(
    contentSection,
    myList,
    mySavedList,
    myProject,
    mySavedProject,
    itemValue,
  );
}());

// create empty MyList array in place of numberOfItems

function loadSectionTabs(
  contentSection,
  myList,
  mySavedList,
  myProject,
  mySavedProject,
  itemValue,
) {
  // load tabs

  const sectionTabs = document.querySelector('#tabs');

  sectionTabs.innerHTML = `<nav class = 'header'>
            <ul>
                <li id = 'view'>View List</a></li>
                <li id = 'new'>Create new item</a></li>
                <li id = 'addProject'>Add New Project</a></li>
                <li id = 'clear'>Clear Completed Items</a></li>
            </ul>
        </nav>`;

  const newTab = document.querySelector('#new');
  const newProject = document.querySelector('#addProject');
  const viewList = document.querySelector('#view');
  const clearItems = document.querySelector('#clear');

  // add event listeners for tabs

  newTab.addEventListener('click', () => {
    // eslint-disable-next-line prefer-const
    let edit = false;
    loadCreateNewItem(
      contentSection,
      myList,
      mySavedList,
      myProject,
      itemValue,
      edit,
    );
  });

  newProject.addEventListener('click', () => {
    loadCreateNewProject(contentSection, myProject, mySavedProject);
  });

  viewList.addEventListener('click', () => {
    loadHome(contentSection, myList, mySavedList, myProject);
  });

  clearItems.addEventListener('click', () => {
    loadClearCompleted(contentSection, myList, mySavedList, myProject);
  });
}
