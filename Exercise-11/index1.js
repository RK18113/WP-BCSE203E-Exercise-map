// question 1
function returnBreak(){
    const br = document.createElement("br")
    document.body.appendChild(br)
}

const table = document.createElement("table")
table.setAttribute("border", "1")

const headerValues = ["this", "is", "dynamic"];

const header = document.createElement("tr")

headerValues.forEach(element => {
    const value = document.createElement("td")
    value.textContent = element
    header.appendChild(value)
})

table.appendChild(header)

const rows = [["one", "two", "three"], ["four", "five", "six"]]

rows.forEach(row => {
    const temp = document.createElement("tr")
    row.forEach(element  => {
        const value = document.createElement("td")
        value.textContent = element
        temp.appendChild(value)
    })
    table.appendChild(temp)
})

document.body.appendChild(table)

returnBreak()
// const br = document.createElement("br")
// document.body.appendChild(br)

// ---------------------------------------------------

const button = document.createElement("button")
button.textContent = "hover"

button.style.backgroundColor = "red"

button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "green"
})

document.body.appendChild(button)

// ----------------------------------------------------

returnBreak()
returnBreak()
// const br1 = document.createElement("br")
// document.body.appendChild(br1)

// const br2 = document.createElement("br")
// document.body.appendChild(br2)

const textarea = document.createElement("textarea")

textarea.setAttribute("placeholder", "focus me")
textarea.style.backgroundColor = "green"
textarea.addEventListener("focus", () => {
    textarea.style.backgroundColor = "yellow"
    textarea.value = "greeting message!!!"
}) 

document.body.appendChild(textarea)

// -----------------------------------------------------

returnBreak()
returnBreak()

const input = document.createElement("input")
input.type = "text"
input.id = "input"

document.body.appendChild(input)

const button2 = document.createElement("button")
button2.textContent = "double click"

button2.addEventListener("dblclick", () => {
    const ul = document.createElement("ul")
    const li = document.createElement("li")

    const text = document.getElementById("input")

    li.textContent = text.value
    text.value = ""
    ul.appendChild(li)

    document.body.appendChild(ul)
})

document.body.appendChild(button2)

// ----------------------------------------------------------

returnBreak()
returnBreak()

const inp1 = document.createElement("input")
const inp2 = document.createElement("input")

let count = 0

inp1.addEventListener("input", () => {
    count++
    inp2.value = count;
})

inp2.readOnly = true

document.body.appendChild(inp1)
document.body.appendChild(inp2)

// -----------------------------------------------------------
// question 2
const start = document.getElementById("start")
const stop = document.getElementById("stop")
const restart = document.getElementById("restart")

const time = document.getElementById("time")

let sec = 0;
let min = 0;
let hour = 0;
let interval;

start.addEventListener("click", () => {
    if (!interval) { 
        interval = setInterval(() => {
            sec++;
            if (sec >= 60) {
                sec = 0;
                min++;
            }
            if (min >= 60) {
                min = 0;
                hour++;
            }
            time.textContent = hour + " : " + min + " : " + sec;
        }, 1000)
    }
})

stop.addEventListener("click", () => {
    clearInterval(interval); 
    interval = null;
})

restart.addEventListener("click", () => {
    sec = 0;
    min = 0;
    hour = 0;
    time.textContent = hour + " " + min + " " + sec;
    clearInterval(interval); 
    interval = null; 
})

// -----------------------------------------------------------------------------------

const dob = document.getElementById("dob");
const age = document.getElementById("age");

dob.addEventListener("mouseover", () => {
    const dobDate = new Date(dob.value);
    const today = new Date();

    let ageInMilliseconds = today - dobDate;
    let ageInYears = new Date(ageInMilliseconds).getUTCFullYear() - 1970;
    age.textContent = ageInYears; 
});

// -------------------------------------------------

const char = document.getElementById("char")
const count1 = document.getElementById("count")

let count2 = 0;

char.addEventListener("input", () => {
  count2++;
  count1.textContent = count2;
});

