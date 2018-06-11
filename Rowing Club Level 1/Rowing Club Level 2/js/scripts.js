
var textHome = { heading: "" , text : "<p>London Rowing Club made its debut on the bosom of old Father Thames on the evening of Thursday 22 May 1856. This bald, proud birth announcement followed a six week pregnancy after conception at a meeting at the Craven Hotel, Strand, where those summoned by a circular letter from Josias Nottidge resolved to ‘form themselves into an association to be called the London Rowing Club, having for its object the encouragement of rowing on the River Thames, and the bringing together of gentlemen interested in that sport.'</p> <p>London Rowing Club (LRC) focuses on producing crews to win events at Henley Royal Regatta and helping rowers to get selected for the Great Britain rowing team and race at the Olympic games and World Championships.</p><p>While London is a High Performance Centre for lightweight rowing, and has been the base for many successful international Lightweights since the inception of the weight class, we pride ourselves on helping anyone with any level of experience to embrace ambition, bring focus and commitment and we can help make your rowing aspirations come true. With a tremendous fleet of boats and professional coaching, coupled with a strong club spirit, we aim to be the club of choice for all athletes whether working part-time or full-time.</p>"};
var textWomenRowing = { heading : "Women's Rowing", text : "LRC has a small, predominantly lightweight, women's squad that is focussed on developing athletes to perform at the highest level of the sport; principally trialling for the GB team, aiming to win at Women’s Henley and the National Championships and race at Henley Royal Regatta. Under the guidance of Phil Bourguignon, LRC senior coach, the group trains in small boats for the majority of the year, mostly single and double sculls, with crew sculling boats formed for the main head races in the winter season. Off the water, the squad train alongside the men’s squad in the gym and on the erg, completing 10 – 12 sessions a week."};
var textMenRowing = { heading : "Men's Rowing", text : "The highest performance level for men's rowing is Henley Royal Regatta and trialing for the Great Britain rowing team for Olympic Games and World Championships.  However, the heart and bulk of the men's squad at London Rowing Club are not full-time internationals but people trying to enjoy competitive rowing while balancing their family, work and/or education commitments. They'd love to have you contribute alongside them in their passion for the beautiful sport of rowing. Our coaches can provide you with whatever you should want to enjoy your rowing; whether it's a training program, technical advice, a calendar of racing or a fair chance at selection for the racing crews."};
var textLearnToRow = { heading:"Learn to Row", text:"London Rowing Club offers 'Learn to Row' courses which provide an introduction to our exciting sport.  Aimed at those with no previous experience, the courses take participants through the basics of technique, both on and off the water, as well as navigation and safety. The courses culminate in some fun side-by-side races to give everyone a taste of racing.  Courses last for six weeks, with two sessions per week, each lasting two hours.   The courses are headed up by a qualified coach who are assisted by Club members."};
var textRecreational = { heading:"Recreational Rowing & Explore Rowing", text:"There is a strong social aspect to the happy boaters. It is normal to meet up for a drink and a chat after an outing and on the first Wednesday of the month a dinner is held at the Club. We are also enthusiastic rowing tourists, meet up with other English Clubs and row different bits of river. We also go abroad and in recent time have visited Venice for the Vogalonga, Berlin, Madrid, Paris and Holland. Those joining us have some previous rowing experience, but we will shortly be running a “Learn to Row” course, which will provide an entrance for those with no rowing experience."};

var objContent = {
	'home':  { contentText : textHome, contentImage : "images/img1.bmp" },
	'womenrowing':    { contentText : textWomenRowing, contentImage : "images/imogen2.bmp" },
	'menrowing': { contentText : textMenRowing, contentImage : "images/MR.jpg" },
	'learntorow': { contentText : textLearnToRow, contentImage : "images/3.bmp" },
	'recreational': { contentText : textRecreational, contentImage : "images/HomePage-8.jpg" }
};

function openPage(evt, aPage, displayLeftMenu){
    document.getElementById("contentHeading").innerHTML = objContent[aPage].contentText.heading;
    document.getElementById("contentText").innerHTML = objContent[aPage].contentText.text;
    document.getElementById("contentImage").src = objContent[aPage].contentImage;
    document.getElementsByClassName("menu")[0].style.visibility = "hidden";

    if(evt.currentTarget.classList.contains("tablinks")){
        document.getElementsByClassName("menu")[0].style.visibility = "visible";

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        } 
    }

    if (evt.currentTarget.className == "menuoption") {
        menuoptions = document.querySelectorAll('.topnav>ul>li>a');
        for (const li of menuoptions) {
            console.log(li.textContent);
            li.className = li.className.replace(" active", "");
        }

        if(evt.currentTarget.innerText == "ROWING")
            document.getElementById("defaultOpen2").click();
    }

    evt.currentTarget.className += " active";
};