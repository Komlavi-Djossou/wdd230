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



function openClose(){
    const mainnav = document.querySelector('.nonResponsive');
    const menup = document.querySelector('.open');
    
    mainnav.classList.toggle('responsive');
    menup.classList.toggle('close');
}