var myContent = {'TRIANGLE': {description:"A triangle is a polygon with three edges and three vertices. It is one of the basic shapes in geometry. A triangle with vertices A, B, and C is denoted &#9651;ABC.", image:"<svg height='300' width='300'><path class='svgdraw' stroke='#000' d='m20,280l130,-280l130,280l-130,0z' stroke-width='2' fill='#fff'/></svg>"}, "SQUARE": {description:"In geometry, a square is a regular quadrilateral, which means that it has four equal sides and four equal angles (90-degree angles). It can also be defined as a rectangle in which two adjacent sides have equal length. A square with vertices ABCD would be denoted &#9634;ABCD.", image:" <svg height='300' width='300'><rect class='svgdraw' height='280' width='280' y='10' x='10' stroke-width='2' stroke='#000' fill='white'/></svg>"}, "CIRCLE": {description:"A circle is a simple closed shape. It is the set of all points in a plane that are at a given distance from a given point, the centre; equivalently it is the curve traced out by a point that moves so that its distance from a given point is constant. The distance between any of the points and the centre is called the radius.", image: "<svg height='300' width='300'> <circle class='svgdraw' cx='150' cy='150' r='140' stroke='black' stroke-width='2' fill='white' /></svg>"}};

function updateInfo(elem) {
    var description = myContent[elem.innerText].description;
    var image = myContent[elem.innerText].image;
    
    return function (){
        if(document.getElementsByClassName("description")[0])
            document.getElementsByClassName("description")[0].innerHTML = description;
        
        if(document.getElementsByClassName("image")[0]){
            document.getElementsByClassName("image")[0].innerHTML = image;
            document.getElementsByClassName("svgdraw")[0].style.fill = document.body.style.backgroundColor;
        }
        
        for (let el of document.getElementsByClassName("objects")[0].children) {
            el.style.fontWeight = "normal";
        }
        
        elem.style.fontWeight = "bold";
    }
}

function chgPgBgColor(elem){
    var aColor = elem.style.backgroundColor;
    console.log(aColor);
    return function() {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = aColor;
        document.getElementsByClassName("svgdraw")[0].style.fill = aColor;
    };  
}

function chgPgTextColor(elem){
    //var aColor = elem.style.backgroundColor;
    var aColor = elem.style.borderBottomColor;
    return function() {
        document.body.style.color = aColor;
        for (let el of document.getElementsByClassName("objects")[0].children) {
            el.style.color = aColor;
        }
        document.getElementsByTagName("h1")[0].style.color = aColor;
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
   el.onclick = chgPgBgColor(el);

}

for (let el of document.getElementById("foreground").children) {
   el.onclick = chgPgTextColor(el);
}

for (let el of document.getElementById("images").children) {
   el.onclick = chgPgImg(el);
}

function createTheme1(){
    var objList = document.getElementById("main1");  
    var swap = objList.removeChild(objList.children[1]);
    objList.appendChild(swap);
    swap = objList.removeChild(objList.children[0]);
    objList.appendChild(swap);   
}

function createTheme2() {
    var newNode = document.getElementsByTagName("body")[0].removeChild(document.getElementsByTagName("body")[0].children[3]);
    var parentDiv = document.getElementsByTagName("body")[0];
    var referenceNode = document.getElementsByTagName("body")[0].children[2];
    parentDiv.insertBefore(newNode, referenceNode);
}

function createTheme3() {
    for(let el of document.getElementsByClassName("area")){
        el.style.backgroundColor = "transparent";
    }
    document.body.style.backgroundColor = "#c0d3def0";
    for (let el of document.getElementsByClassName("customArea")){
        el.style.borderStyle = "none";
        el.style.backgroundColor = "transparent";
    }
}






