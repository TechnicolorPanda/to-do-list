
import {createOutput} from './output.js';

const loadCreateNewItem = function(contentSection) {

    console.log('create new item');
    
    contentSection.innerHTML = `		
    <div id = 'container'>
    <div id = 'form'>
        <label for='item'>Item</label>
        <input type='text' id='title' class='text-input' name='item' maxlength='100' onfocus='this.value=" "'><br>
        <label for='dueDate'>Due Date</label>
        <input type='text' id='dueDate' class='text-input' name='dueDate' maxlength='100' onfocus='this.value=" "'><br>
        <label for='priority'>Priority</label>
        <input type='number' id='priority' value = '0' name='priority' min='0' max='9999' onfocus='this.value=""'><br>
        <div id='button'></div>
    </div>
`	

    addListItem(createOutput);
};

const addListItem = function(contentSection) {

    console.log('button');

    //load submit button

    const addSubmitButton = document.querySelector('#button');

    addSubmitButton.innerHTML =
        `<nav class = 'button'>
            <ul>
                <button id = 'submit'>Submit</a></li>
            </ul>
        </nav>`

    const newTab = document.querySelector('#submit');

    //add event listeners for tabs

    submit.addEventListener('click', () => {
        //resetPage(contentSection);
        createOutput(contentSection);
        }
    )
}

export {loadCreateNewItem};