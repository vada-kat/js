//DOM-document object Model
//this is a way in which javascript interacts with and manipulate web pages
//the Dom represent the html document in a tree structure(javascript object)with methods and propreties to allow javascript access,modify and create elements on the page, dynamically changing content and behavior.

//accessing elements
/**
 * document.getElementsBytagName(tagname)
 * document.getElementsByClassName(class)
 * document.getElementById(id)
 */

//Each element is an object with its own properties and values to manipulate it(eg. change text content,change inner html/chlidren,add/remove or change attributes ,style,add event listeners)

console.log( document.getElementsByTagName("p").length);

let myP = document.getElementById("testelement")

console.log(myP);
myP.style.backgroundColor = "green"
myP.textContent = "albert kipchirchir"


myP.setAttribute("class","newp jjj uhfsu")

myP.addEventListener("click", handleClicking)

let count = 0
function handleClicking(){
    count++


    console.log("Element clicked!!!!" + count + "times")
}
