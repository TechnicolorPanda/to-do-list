const testLocalStorage = function() {
    if (storageAvailable('localStorage')) {
        if(!localStorage.getItem('mySavedList')) {
            populateStorage();
        } else {
            retrieveStorage();
        }
    } else {
        alert("List can not be saved to device.")
    }
}

const storageAvailable = function(type) {
    let storage;
    try {
        storage = window[type];
        let x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            e.code === 22 ||
            e.code === 1014 ||
            e.name === 'QuotaExceededError' ||
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            (storage && storage.length !== 0);
    }
}

const populateStorage = function() {
    let mySavedList = [];
    localStorage.setItem('mySavedList', mySavedList);
}

const retrieveStorage = function() {
    const mySavedList = JSON.parse(localStorage.getItem('mySavedList'));
    mySavedList.forEach(element => 
            myList.push(element)); 
    clearTable();
    mySavedList.forEach(element => 
        render(element.item, element.dueDate, element.priority));
}

export {testLocalStorage};