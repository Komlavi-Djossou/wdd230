let imagesToLoad = document.querySelectorAll('img[data-src]');
const imgOptions = {
    threshold:1,
    rootMargin: "0px 0px 20px 0px"
}

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {image.removeAttribute('data-src');};
};

 

if('IntersectionObserver' in window) {
const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
    if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
    }
    });
}, imgOptions);

imagesToLoad.forEach((img) => {
    observer.observe(img);
});
} 
else {
imagesToLoad.forEach((img) => {
    loadImages(img);
});
}

// localStorage
function days(x, y) {
    const firstDay = x;
    const secondDay = y;
    const singleDay = 1000 * 60 * 24;
    const dayDifference = secondDay - firstDay;
    const setDay = Math.round(dayDifference/singleDay);
    return setDay;
}

let thisVisit = Date.now();

let lastVisit = localStorage.getItem('lastVisit') || thisVisit;
if(lastVisit == thisVisit){
    document.getElementById("daysSinceVisit").innerHTML = "Today is your first visit, welcome!";
}
else{document.getElementById("daysSinceVisit").innerHTML = "You visited this site ${days(lastVisit, thisVisit)} ago;"
}

localStorage.setItem("lastVisit", thisVisit);

const lastVisit = localStorage.getItem('lastVisit') || today;
const millisecondsToDays = 86400000;
if (lastVisit == today) {
    document.querySelector('#galleryVisits').textContent = 'Last Visit: ${displayDate}';
}
localStorage.setItem('lastVisit', today);




// display current date and time
let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Friday",
    "Thursday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let date = dayName + "," + monthName + " " + d.getDate() + ", " + year;
let hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
let fullDate = date+' '+hours;
document.getElementById("currentdate").textContent = fullDate;
