// question 1
const table = document.getElementById("table");
const result = document.getElementById("result");

let temp = [
  55, 62, 68, 74, 59, 45, 41, 58, 60, 67, 65, 78, 82, 88, 91, 92, 90, 93, 87,
  80, 78, 79, 72, 68, 61, 59, 55, 65,
];

let hotCount = 0;
let coldCount = 0;
let pleasantCount = 0;

for (let i = 0; i < temp.length; i++) {
  let category = "";
  if (temp[i] > 85) {
    category = "Hot";
    hotCount++;
  } else if (temp[i] < 60) {
    category = "Cold";
    coldCount++;
  } else {
    category = "Pleasant";
    pleasantCount++;
  }

  table.innerHTML += `
        <tr>
            <td>${temp[i]}</td>
            <td>${category}</td>
        </tr>
    `;
}

result.innerText = `Hot: ${hotCount}, Pleasant: ${pleasantCount}, Cold: ${coldCount}`;