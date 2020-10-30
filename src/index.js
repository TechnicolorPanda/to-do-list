//import page modules

import {loadHome} from './modules/home.js';
import {loadCreateNewItem} from './modules/createNewItem.js';

initiatePage();

function initiatePage() {

    //load home page

    const contentSection = document.querySelector('#content');

    loadHome(contentSection);
    loadSectionTabs(contentSection);

}

function loadSectionTabs(contentSection) {
    
    //load tabs

    const sectionTabs = document.querySelector('#tabs');

    sectionTabs.innerHTML =
        `<nav class = 'header'>
            <ul>
                <li id = 'new'>Create new item</a></li>
            </ul>
        </nav>`

    const newTab = document.querySelector('#new');

    //add event listeners for tabs

    newTab.addEventListener('click', () => {
        //resetPage(contentSection);
        loadCreateNewItem(contentSection);
        }
    )
}

//reset page to change tabs

// const resetPage = function(contentSection) {

//     console.log('reset');

//     // while (contentSection.childElementCount > 0) {
//     //     contentSection.removeChild(contentSection.lastChild);
//     // }
// };
