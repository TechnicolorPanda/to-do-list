const loadCreateNewItem = function(contentSection) {

	console.log('load create new item');

    contentSection.innerHTML = `		
    <div id = "container">
    <div id = "form">
        <input type="checkbox" id="read" name="read" 
            onclick="if(this.checked){value='yes'} else {value='no'}">
        <label for="title">Item</label>
        <input type="text" id="title" class="text-input" name="title" maxlength="100" onfocus="this.value=''"><br>
        <label for="author">Due Date</label>
        <input type="text" id="author" class="text-input" name="author"maxlength="100" onfocus="this.value=''"><br>
        <label for="pages">Priority</label>
        <input type="number" id="pages" name="pages" min="1" max="9999" onfocus="this.value=''"><br>
        <label for="read">Read?</label>
        <button onclick="addListItem()">Submit</button>
    </div>
`	
	
};

export {loadCreateNewItem};