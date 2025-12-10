var date=document.getElementById("date");
var day=document.getElementById("day");
var year=document.getElementById("year");
var month=document.getElementById("month");

const today=new Date();
const weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const allMonths=["January","February","March","April","May","June","July","August","September","October","November","December"];
date.innerHTML=(today.getDate()<10?"0":"")+today.getDate();
day.innerHTML=weekDays[today.getDay()];
month.innerHTML=allMonths[today.getMonth()];
year.innerHTML=today.getFullYear();
