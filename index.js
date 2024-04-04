// Write your code here!
// first we grab the element with the id 'main'
let mainNode = document.querySelector('#main');
mainNode.id = ' '// make the id and empty string
// add a newHeader that points to a new element <h1>
let newHeader = document.createElement('h1');
// add the id 'victory'
newHeader.setAttribute('id', 'victory');
// add the text 'YOUR-NAME' is the champion
newHeader.textContent = ("Alistairs is the champion")