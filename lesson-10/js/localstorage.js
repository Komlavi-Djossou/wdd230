// localStorage

function days(x, y) {
    const firstDay = x;
    const secondDay = y;
    const singleDay = 1000 * 60 * 60* 24;
    const dayDifference = secondDay - firstDay;
    const setDay = Math.round(dayDifference/singleDay);
    return setDay;
}

let thisVisit = Date.now();

let lastVisit = localStorage.getItem('lastVisit') || thisVisit;
if(lastVisit == thisVisit){
    document.getElementById("daysSinceVisit").innerHTML = "Today is your first visit, welcome!";
}
else{document.getElementById("daysSinceVisit").innerHTML = "You visited this site ${days(lastVisit, thisVisit)} ago";
}

localStorage.setItem("lastVisit", thisVisit);

const lastVisit = localStorage.getItem('lastVisit') || today;
const millisecondsToDays = 86400000;
if (lastVisit == today) {
    document.querySelector('#galleryVisits').textContent = 'Last Visit: ${displayDate}';
}
localStorage.setItem('lastVisit', today);

