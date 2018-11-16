var myContent = {'TRIANGLE': {description:"1st geometric shape", image:"images/flower1.jpg"}, "SQUARE": {description:"2nd geometric shape", image:"images/flower2.jp3g"}, "CIRCLE": {description:"3rd geometric shape", image:"images/flower3.jpg"}};

function updateInfo(elem) {
    var description = myContent[elem.innerText].description;
    var image = myContent[elem.innerText].image;
    
    return function (){
        document.getElementsByClassName("description")[0].innerHTML = description;
    }
    

//    document.getElementsByClassName("image").innerHTML = image;
}

function chgPgBg(elem){
    var aColor = elem.style.backgroundColor;
    return function() {
        document.body.style.backgroundImage = "none";
        document.bgColor = aColor;
    };  
}

function chgPgText(elem){
    var aColor = elem.style.backgroundColor;
    return function() {
        document.fgColor = aColor;
    };  
}

function chgPgImg(elem){
    var aColor = elem.style.backgroundImage;
    return function() {
       document.body.style.backgroundImage = elem.style.backgroundImage;
    };  
}

for (let el of document.getElementsByClassName("objects")[0].children) {
   el.onclick = updateInfo(el);
}

for (let el of document.getElementById("background").children) {
   el.onclick = chgPgBg(el);

}

for (let el of document.getElementById("foreground").children) {
   el.onclick = chgPgText(el);
}

for (let el of document.getElementById("images").children) {
   el.onclick = chgPgImg(el);
}





