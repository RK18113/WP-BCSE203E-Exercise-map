// question 1
const sortTable = document.getElementById("sortTable");
const searchTable = document.getElementById("searchTable");
const filterTable = document.getElementById("filterTable");
const sortBtn = document.getElementById("sort");
const searchBtn = document.getElementById("search");
const filterBtn = document.getElementById("filter");

function putDataIntoTable(people) {
  sortTable.innerHTML = `<tr>
      <th>P-Id</th>
      <th>Name</th>
      <th>Age</th>
    </tr>`;

  people.forEach((element) => {
    sortTable.innerHTML += `<tr>
      <td>${element.pid}</td>
      <td>${element.name}</td>
      <td>${element.age}</td>
    </tr>`;
  });
}

let people = [
  { pid: 1, name: "Alen", age: 39 },
  { pid: 2, name: "Deena", age: 47 },
  { pid: 3, name: "Diana", age: 21 },
  { pid: 4, name: "Jack", age: 54 },
  { pid: 5, name: "Jain", age: 23 },
  { pid: 6, name: "Kelvin", age: 61 },
  { pid: 7, name: "Louis", age: 69 },
  { pid: 8, name: "Rex", age: 49 },
];

putDataIntoTable(people);

sortBtn.addEventListener("click", () => {
  sortedPeople = people.sort((a, b) => a.age - b.age);
  putDataIntoTable(people);
});

searchBtn.addEventListener("click", () => {
  const pid = Number(prompt("enter the patient id"));
  const result = people.find((p) => p.pid === pid);

  if (result) {
    searchTable.innerHTML = `<tr>
      <th>P-Id</th>
      <th>Name</th>
      <th>Age</th>
    </tr>`;

    searchTable.innerHTML += `<tr>
      <td>${result.pid}</td>
      <td>${result.name}</td>
      <td>${result.age}</td>
    </tr>`
  }
});

filterBtn.addEventListener("click", () => {
  const lowAge = Number(prompt("lower age limit"));
  const upAge = Number(prompt("upper age limit"));
  const results = people.filter((p) => p.age >= lowAge && p.age <= upAge);

  if (results) {
    filterTable.innerHTML = `<tr>
      <th>P-Id</th>
      <th>Name</th>
      <th>Age</th>
    </tr>`;

    results.forEach(
      (element) =>
        (filterTable.innerHTML += `<tr>
      <td>${element.pid}</td>
      <td>${element.name}</td>
      <td>${element.age}</td>
    </tr>`)
    );
  }
});


