
function chgPgBg(elem){
    console.log(elem.style.backgroundColor);
    var aColor = elem.style.backgroundColor;
    return function() {
    document.body.style.backgroundColor = aColor;
  };
    
}

for (let el of document.getElementById("background").children) {
    el.onclick = chgPgBg(el);
}