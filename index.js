// Create a table from a funtion = array + table + numbers($) + AveragePrice
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "Gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
  { name: "Prof. Prism", price: 81, occupation: "Teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
  { name: "Prof. Spark", price: 76, occupation: "Programmer" },
  { name: "Dr. Wire", price: 47, occupation: "Teacher" },
  { name: "Prof. Goose", price: 72, occupation: "Driver" },
];
function updateAveragePrice() {
  const randomIndex = Math.floor(Math.random() * freelancers.length);

  addRow(
    freelancers[randomIndex].name,
    freelancers[randomIndex].occupation,
    freelancers[randomIndex].price
  );

  // document.querySelector("#freelancers").innerHTML += newFreelancers;

  // Prices Selector for Average from random Price from "prices of the array freelancers"
  const prices = document.querySelectorAll("#freelancers td:nth-child(3)");
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += parseInt(prices[i].textContent.replace("$", ""));
  }
  let average = total / prices.length;
  document.querySelector("#averagePrice").textContent =
    "$" + average.toFixed(2);
}

// Add new freelancers every 6 sec
setInterval(updateAveragePrice, 6000);

// // Add a new Freelancer for the row
function addFreelancer() {
  // Create a new freelancer object
  let name = prompt("Enter the name of the freelancer:");
  let occupation = prompt("Enter the occupation of the freelancer:");
  let price = prompt("Enter the starting price of the freelancer:");
  // Push it to the freelancers array
  if (name && occupation && price) {
    addRow(name, occupation, price);
  } else {
    alert("Please enter valid inputs.");
  }
}

function addRow(name, occupation, price) {
  let newRow =
    "<tr><td>" +
    name +
    "</td><td>" +
    occupation +
    "</td><td>$" +
    price +
    "</td></tr>";
  // Append it to the freelancers table
  document.querySelector("#freelancers").innerHTML += newRow;
}

// Sort from lower to higher
function sortFreelancers() {
  let rows = Array.from(document.querySelectorAll("#freelancers tr"));
  rows.sort(function (a, b) {
    let priceA = parseInt(
      a.querySelector("td:nth-child(3)").textContent.replace("$", "")
    );
    let priceB = parseInt(
      b.querySelector("td:nth-child(3)").textContent.replace("$", "")
    );
    return priceA - priceB;
  });
  document.querySelector("#freelancers").innerHTML = "";
  rows.forEach(function (row) {
    document.querySelector("#freelancers").appendChild(row);
  });
}
