const renderList = function(){
	console.log('render list');
}

//write list to screen

// function render() {
//     console.log('render');
//     const contentSection = document.querySelector('#content');
//     const box = document.getElementById('box');
//     console.log(box);
//     const table = document.getElementById('listTable');
//     console.log(table);
//     let row = table.insertRow(0);
//         for(let j = 0; j < 3; j++){ 
//             let cell = document.createElement("td");
//             cell.innerHTML = (arguments[j]);
//             row.appendChild(cell);
//         }
//     table.appendChild(row);
//     box.appendChild(table);
//     contentSection.appendChild(box);
// }

export {renderList};