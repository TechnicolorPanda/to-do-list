const loadHome = function(contentSection) {

	console.log('load home');

	contentSection.innerHTML = `		
		<h1 class='header'>Getting Stuff Done</h1>
		<div id = "box">
			<table id = "heading"></table>
			<table id = "listTable"></table>
	  </div>
`	
};

export {loadHome};


