let inputdate = document.querySelector("input");
let count = document.getElementById("result");

inputdate.addEventListener("input",()=>{
    let birthdate = new Date(inputdate.value);
    let currentdate = new Date();
    let newDate = new Date(currentdate - birthdate);
    let years = newDate.getFullYear() - 1970;
    let months = newDate.getMonth();
    let days = newDate.getDate()-1;
    count.innerText = `you're ${years} years ${months} months ${days} days old .`
})