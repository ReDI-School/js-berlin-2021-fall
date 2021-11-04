let divCount = 0;

// This function is called every time the user presses one of the buttons
// It gets the id of the parent as a parameter
function createNewItem(id) {

    // create a new <div> element
    let newDiv = document.createElement('div');

    // set the textContent of the new <div> element
    divCount++;
    newDiv.textContent = 'New Div ' + divCount;

    // remember - we need to tell the browser what to do with the new element
    // just createElement() doesn't do that
    // Only after we add it to some parent element it will actually be displayed
    let parent = document.getElementById(id);
    parent.appendChild(newDiv);
}
