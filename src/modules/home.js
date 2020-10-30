//load home page elements

const loadHome = function(contentSection) {
	loadBackground();
	loadTitle(contentSection);
};

//load page background image

const loadBackground = function() {
	let style = document.createElement('style');
	style.innerHTML = `
		body{
			background-image: url("images/november.jpg");
			background-repeat: no-repeat;
			background-attachment: fixed;
			background-size: cover;
		}
		`
		document.head.appendChild(style);
};

//load page title

const loadTitle = function(contentSection) {
	contentSection.innerHTML = `		
		<h1 class='header'>Getting Stuff Done</h1>
		<div id = "box">
			<table id = "heading"></table>
		</div>
	`	
}

export {loadHome};


