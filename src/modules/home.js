import { removeItem, crossOffItem } from "./arrayLogic";
import { loadCreateNewItem } from './createNewItem';

// load home page elements

const loadHome = (contentSection, myList, mySavedList, myProject) => {
  loadBackground();
  loadTitle(contentSection);
  if (myList.length > 0) {
    renderList(contentSection, myList, mySavedList, myProject);
  } else {
    contentSection.innerHTML = `
      <h1 class='header'>Getting Stuff Done</h1>
      <h2 class = 'instructions'>You have nothing to do! Create a new item/project or just take a nap.</h2>
		`;
  }
};

// load page background image

const loadBackground = function () {
  let style = document.createElement('style');
  style.innerHTML = `
		body{
			background-color: white;
			background-repeat: no-repeat;
			background-attachment: fixed;
			background-size: cover;
		}
		`;
  document.head.appendChild(style);
};

// load page title

const loadTitle = function (contentSection) {
  contentSection.innerHTML = `		
		<h1 class='header'>Getting Stuff Done</h1>
		`;
};

// render to do list to the page

function renderList(contentSection, myList, mySavedList, myProject) {
  for (let i = 0; i < myProject.length; i++) {
    const box = document.createElement('box');
    const table = document.createElement('table');
    let cell = document.createElement('th');
    let row = table.insertRow(0);
    cell.innerHTML = myProject[i];
    row.appendChild(cell);
    contentSection.appendChild(row);

    // sort items by priority

    myList.sort((a, b) => a.priority - b.priority);

    // render list

    myList.forEach((element) => render(
      element.item,
      element.dueDate,
      element.priority,
      element.completed,
      element.notes,
      element.project,
    ),
    );

    function render() {
      if (myProject[i] === arguments[5]) {
        let row = table.insertRow(0);
        createCheckbox(row, myList, mySavedList, arguments[3], arguments[0]);

        for (let j = 0; j < 2; j++) {
          let cell = document.createElement('td');
          cell.innerHTML = arguments[j];
          row.appendChild(cell);

          // make myProject array carry through to createNewItem page

          row.addEventListener('dblclick', () => {
            selectItem(
              myList,
              mySavedList,
              contentSection,
              myProject,
              arguments[0],
            );
          });
        }

        addRemoveButton(
          row,
          myList,
          mySavedList,
          contentSection,
          arguments[0],
          myProject,
        );
        contentSection.appendChild(row);
      }
    }
  }
}

// create task completed checkbox on table

function createCheckbox(row, myList, mySavedList, isCompleted, checkboxID) {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('id', 'completed');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute(
    'style',
    'height: 20px; width: 20px; margin-top: 25px;',
  );

  if (isCompleted === 'yes') {
    checkbox.checked = true;
    checkbox.value = checkboxID;
    row.appendChild(checkbox);
  } else {
    checkbox.checked = false;
    checkbox.value = checkboxID;
    row.appendChild(checkbox);
  }

  checkbox.addEventListener(
    'click',
    () => {
      crossOffItem(row, myList, checkbox, mySavedList);
    },
    false,
  );
}

// add ability to delete items

function addRemoveButton(
  row,
  myList,
  mySavedList,
  contentSection,
  itemValue,
  myProject,
) {
  const button = document.createElement('button');
  button.value = itemValue;
  button.id = 'trashButton';
  row.appendChild(button);
  button.addEventListener('click', () => {
    removeItem(button, myList, mySavedList, contentSection, myProject);
  });
}

function selectItem(myList, mySavedList, contentSection, myProject, itemValue) {
  const edit = true;
  loadCreateNewItem(
    contentSection,
    myList,
    mySavedList,
    myProject,
    itemValue,
    edit,
  );
}

export { loadHome };
