const testLocalStorage = function(myList, mySavedList) {
    if (storageAvailable('localStorage')) {
        if(!localStorage.getItem('mySavedList')) {
            console.log('populate storage');
            populateStorage(mySavedList);
        } else {
            console.log('retrieve storage');
            retrieveStorage(myList);
        }
    } else {
        alert('List can not be saved to device.')
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

const populateStorage = function(mySavedList) {
    localStorage.setItem('mySavedList', mySavedList);
}

const retrieveStorage = function(myList) {
    const mySavedList = JSON.parse(localStorage.getItem('mySavedList'));
    mySavedList.forEach(element => 
            myList.push(element)); 
}

export {testLocalStorage};