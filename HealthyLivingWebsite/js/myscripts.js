
function displayDate(){
    var aDate = new Date(2018,5,11);
    today = aDate.getDate()+'/'+aDate.getMonth()+'/'+aDate.getFullYear();
    document.getElementById("todayDate").innerHTML = today;
}
