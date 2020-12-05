(()=>{"use strict";const e=function(e,o,l,c,i,a){e.innerHTML="\t\t\n    <div id = 'content'>\n        <div id = 'form'>\n            <label for='project'>Project</label>\n            <select id = 'project' name='project'>\n            </select><br> \n            <label for='item'>Item</label>\n            <input type='text' id='item' class='text-input' name='item' maxlength='200' value=' ' onfocus='this.value=\" \"'><br>\n            <label for='dueDate'>Due Date</label>\n            <input type='text' id='dueDate' class='text-input' name='dueDate' maxlength='100' value=' ' onfocus='this.value=\" \"'><br>\n            <label for='priority'>Priority</label>\n            <select id = 'priority' name='priority' value = ' '>\n                <option value = 'high'>high</option>\n                <option value = 'medium'>medium</option>\n                <option value = 'low'>low</option>\n            </select><br>\n            <label for='notes'>Notes</label><br>\n            <textarea type='text' id='notes' class='text-input' name='notes' maxlength='20000' value = ' ' onfocus='this.value=\" \"'></textarea><br>\n            <div id='button'></div>\n        </div>\n    </div>\n",function(e,t,n){console.log("get input value"),console.log("item value "+n);for(let t=e.length-1;t>=0;t--)e[t].item===n&&(console.log(e[t].item),document.getElementById("project").value=e[t].project,document.getElementById("item").value=e[t].item,document.getElementById("dueDate").value=e[t].dueDate,document.getElementById("priority").value=e[t].priority,document.getElementById("notes").value=e[t].notes)}(o,0,i),t(e,c),n(e,o,l,c,i,a)},t=function(e,t){const n=document.getElementById("project");for(let e=0;e<t.length;e++){let o=t[e],l=document.createElement("option");l.textContent=o,l.value=o,n.appendChild(l)}},n=function(e,t,n,a,d,r){document.querySelector("#button").innerHTML="<nav class = 'button'>\n            <ul>\n                <button id = 'submit'>Submit</a></li>\n            </ul>\n        </nav>\n        ",submit.addEventListener("click",(()=>{!function(e,t,n,a,d,r){let u=document.getElementById("item").value,m=document.getElementById("dueDate").value,s=document.getElementById("priority").value,p=document.getElementById("notes").value,h=document.getElementById("project").value,f=new o(u,m,s,p,"no",h);t.push(f),c(d,t),t.forEach((e=>n=e)),l(t),i(e,t,n,a)}(e,t,n,a,d)}))};class o{constructor(e,t,n,o,l,c){this.item=e,this.dueDate=t,this.priority=n,this.completed=l,this.notes=o,this.project=c}}function l(e){localStorage.setItem("mySavedList",JSON.stringify(e))}function c(e,t,n){if(" "!=e){console.log(t.length);for(let n=t.length-1;n>=0;n--)if(t[n].item===e){t.splice(n,1);break}t.forEach((e=>e)),l(t)}}const i=function(e,t,n,o){a(),d(e,t,n,o),t.length>0?function(e,t,n,o){for(let c=0;c<o.length;c++){document.createElement("box");const i=document.createElement("table");let a=document.createElement("th"),d=i.insertRow(0);function l(){if(o[c]===arguments[5]){let l=i.insertRow(0);r(l,t,0,0,arguments[3],arguments[0]);for(let c=0;c<3;c++){let i=document.createElement("td");i.innerHTML=arguments[c],l.appendChild(i),l.addEventListener("dblclick",(()=>{m(t,n,e,o,arguments[0])}))}u(l,t,n,e,arguments[0],o),e.appendChild(l)}}a.innerHTML=o[c],d.appendChild(a),e.appendChild(d),t.forEach((e=>l(e.item,e.dueDate,e.priority,e.completed,e.notes,e.project)))}}(e,t,n,o):console.log("no list items")},a=function(){let e=document.createElement("style");e.innerHTML="\n\t\tbody{\n\t\t\tbackground-color: white;\n\t\t\tbackground-repeat: no-repeat;\n\t\t\tbackground-attachment: fixed;\n\t\t\tbackground-size: cover;\n\t\t}\n\t\t",document.head.appendChild(e)},d=function(e,t,n,o){e.innerHTML="\t\t\n\t\t<h1 class='header'>Getting Stuff Done</h1>\n\t\t",function(){const t=document.createElement("box"),n=document.createElement("table");let o=n.insertRow(0);for(let e=0;e<3;e++){let t=document.createElement("th");t.innerHTML=arguments[e],o.appendChild(t)}n.appendChild(o),t.appendChild(n),e.appendChild(t)}("Item","Due Date","Priority",e)};function r(e,t,n,o,c,i){const a=document.createElement("input");a.setAttribute("id","completed"),a.setAttribute("type","checkbox"),a.setAttribute("style","height: 20px; width: 20px; margin-top: 25px;"),"yes"===c?(a.checked=!0,a.value=i,e.appendChild(a)):(a.checked=!1,a.value=i,e.appendChild(a)),a.addEventListener("click",(function(){!function(e,t,n,o){for(let e=t.length-1;e>=0;e--)t[e].item===n.value&&(!1===n.checked?t[e].completed="no":t[e].completed="yes"),t.forEach((e=>e)),l(t)}(0,t,a)}),!1)}function u(e,t,n,o,l,a){const d=document.createElement("button");d.value=l,d.id="trashButton",e.appendChild(d),d.addEventListener("click",(()=>{!function(e,t,n,o,l){c(e.value,t),i(o,t,n,l)}(d,t,n,o,a)}))}function m(t,n,o,l,c){e(o,t,n,l,c,!0)}const s=function(e,t,n){e.innerHTML="\t\t\n    <div id = 'content'>\n        <div id = 'form'>\n            <label for='newProject'>Project</label>\n            <input type='text' id='newProject' class='text-input' name='newProject' maxlength='200' onfocus='this.value=\" \"'><br>\n            <div id = 'button'></div>\n        </div>\n    </div>\n",function(e,t,n){document.querySelector("#button").innerHTML="<nav class = 'button'>\n            <ul>\n                <button id = 'create'>Create</a></li>\n            </ul>\n        </nav>\n        ",create.addEventListener("click",(()=>{!function(e,t,n){let o=document.getElementById("newProject").value;t.push(o),p(t),s(e,t,undefined)}(e,t)}))}(e,t),function(e){const t=document.createElement("box"),n=document.createElement("table");let o=n.insertRow(0),l=document.createElement("th");l.innerHTML="Current Projects",o.appendChild(l),n.appendChild(o),t.appendChild(n),e.appendChild(t)}(e),function(e,t,n){t.forEach((o=>function(){document.createElement("box");let o=document.createElement("table").insertRow(0);for(let e=0;e<1;e++){let t=document.createElement("td");console.log(arguments[e]),t.innerHTML=arguments[e],o.appendChild(t)}h(o,t,n,e,arguments[0]),e.appendChild(o)}(o)))}(e,t,n)};function p(e){localStorage.setItem("mySavedProject",JSON.stringify(e))}function h(e,t,n,o,l){const c=document.createElement("button");c.value=l,c.id="trashButton",e.appendChild(c),c.addEventListener("click",(()=>{!function(e,t,n,o){for(let n=t.length-1;n>=0;n--)t[n]===e.value&&t.splice(n,1);t.forEach((e=>n=e)),p(t),s(o,t,n)}(c,t,n,o)}))}!function(){const t=document.querySelector("#content"),n=[],o=[],l=[],a=[];(function(e,t,n,o){!function(e){let t;try{t=window[e];let n="__storage_test__";return t.setItem(n,n),t.removeItem(n),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}("localStorage")?alert("List can not be saved to device."):localStorage.getItem("mySavedList")?function(e,t){const n=JSON.parse(localStorage.getItem("mySavedList")),o=JSON.parse(localStorage.getItem("mySavedProject"));n.forEach((t=>e.push(t))),o.forEach((e=>t.push(e)))}(e,n):function(e,t,n){n.push("Miscellaneous"),localStorage.setItem("mySavedList",e),localStorage.setItem("mySavedProject",t)}(t,o,n)})(n,o,l,a),i(t,n,o,l),function(t,n,o,l,a,d){document.querySelector("#tabs").innerHTML="<nav class = 'header'>\n            <ul>\n                <li id = 'view'>View List</a></li>\n                <li id = 'new'>Create new item</a></li>\n                <li id = 'addProject'>Add New Project</a></li>\n                <li id = 'clear'>Clear Completed Items</a></li>\n            </ul>\n        </nav>";const r=document.querySelector("#new"),u=document.querySelector("#addProject"),m=document.querySelector("#view"),p=document.querySelector("#clear");r.addEventListener("click",(()=>{e(t,n,o,l," ",!1)})),u.addEventListener("click",(()=>{s(t,l,a)})),m.addEventListener("click",(()=>{i(t,n,o,l)})),p.addEventListener("click",(()=>{!function(e,t,n,o){console.log(t);for(let e=t.length-1;e>=0;e--)"yes"===t[e].completed&&(console.log(t[e].completed),c(t[e].item,t));i(e,t,n,o)}(t,n,o,l)}))}(t,n,o,l,a)}()})();