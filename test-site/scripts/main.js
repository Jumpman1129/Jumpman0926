var myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/RS.jpg") {
        myImage.setAttribute("src", "images/RS2.jpg");
    } else {
        myImage.setAttribute("src", "images/RS.jpg");
    }
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if(!myName || myName === null){
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.innerHTML = "Kodiaq is cool, " + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Kodiaq is cool, " + storedName;
  }
  
myButton.onclick = function () {
    setUserName();
}  ;