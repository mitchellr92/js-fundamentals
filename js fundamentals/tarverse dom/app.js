let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// Get child nodes of ul
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// Types of nodes
// 1 - Element
// 2 - Attribute(deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
val = list.children;
val = list.children[0];
list.children[0].textContent = "hello";
// Children of children
val = list.children[3].children[0]

val = list.firstChild

console.log(val);
