(()=>{"use strict";!function(){const t=document.querySelector("#content");(function(t){(function(){let t=document.createElement("style");t.innerHTML='\n\t\tbody{\n\t\t\tbackground-image: url("images/november.jpg");\n\t\t\tbackground-repeat: no-repeat;\n\t\t\tbackground-attachment: fixed;\n\t\t\tbackground-size: cover;\n\t\t}\n\t\t',document.head.appendChild(t)})(),function(t){t.innerHTML='\t\t\n\t<h1 class=\'header\'>Getting Stuff Done</h1>\n\t<div id = "box">\n\t\t<table id = "heading"></table>\n\t</div>\n'}(t)})(t),function(t){document.querySelector("#tabs").innerHTML="<nav class = 'header'>\n            <ul>\n                <li id = 'new'>Create new item</a></li>\n            </ul>\n        </nav>",document.querySelector("#new").addEventListener("click",(()=>{!function(t){console.log("create new item"),t.innerHTML="\t\t\n    <div id = 'container'>\n    <div id = 'form'>\n        <label for='item'>Item</label>\n        <input type='text' id='title' class='text-input' name='item' maxlength='100' onfocus='this.value=\" \"'><br>\n        <label for='dueDate'>Due Date</label>\n        <input type='text' id='dueDate' class='text-input' name='dueDate' maxlength='100' onfocus='this.value=\" \"'><br>\n        <label for='priority'>Priority</label>\n        <input type='number' id='priority' name='priority' min='1' max='9999' onfocus='this.value=\" \"'><br>\n        <button onclick='addListItem()'>Submit</button>\n    </div>\n"}(t)}))}(t)}()})();