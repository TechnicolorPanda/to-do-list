const testLocalStorage = function (
  myList,
  mySavedList,
  myProject,
  mySavedProject
) {
  if (storageAvailable("localStorage")) {
    if (!localStorage.getItem("mySavedList")) {
      populateStorage(mySavedList, mySavedProject, myProject);
    } else {
      retrieveStorage(myList, myProject);
    }
  } else {
    alert("List can not be saved to device.");
  }
};

//determine if local storage is available on this device

const storageAvailable = function (type) {
  let storage;
  try {
    storage = window[type];
    let x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      (e.code === 22 ||
        e.code === 1014 ||
        e.name === "QuotaExceededError" ||
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      storage &&
      storage.length !== 0
    );
  }
};

//if user is new on this device, create local storage on this device

const populateStorage = function (mySavedList, mySavedProject, myProject) {
  myProject.push("Miscellaneous");
  localStorage.setItem("mySavedList", mySavedList);
  localStorage.setItem("mySavedProject", mySavedProject);
};

//retrieve local storage stored on device

const retrieveStorage = function (myList, myProject) {
  const mySavedList = JSON.parse(localStorage.getItem("mySavedList"));
  const mySavedProject = JSON.parse(localStorage.getItem("mySavedProject"));
  mySavedList.forEach((element) => myList.push(element));
  mySavedProject.forEach((element) => myProject.push(element));
};

//add to do list to local storage

const placeInStorage = function (myList) {
  localStorage.setItem("mySavedList", JSON.stringify(myList));
};

export { testLocalStorage };
export { placeInStorage };
