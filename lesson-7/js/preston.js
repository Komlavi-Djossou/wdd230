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



// Local Storage

// document.addEventListener('DOMContentLoaded', () => {
//     getStoredList();
// });

// function getStoredList() {
//     try {
//         let chapters = localStorage.getItem('bomchaps');
//         if (chapters.length > 0) {
//             count.textContent = chapters.length
//             renderList(chapters);
//         } else
//           count.textContent = 0;
//     }
//     catch (er) {
//         count.textContent = 0;
//     }
// }


let imagesToLoad = document.querySelectorAll('img[data-src]');
const imgOptions = {
    threshold:2,
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