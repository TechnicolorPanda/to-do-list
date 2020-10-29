
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
        <input type='number' id='priority' name='priority' min='1' max='9999' onfocus='this.value=" "'><br>
        <button onclick='addListItem()'>Submit</button>
    </div>
`	
};



export {loadCreateNewItem};