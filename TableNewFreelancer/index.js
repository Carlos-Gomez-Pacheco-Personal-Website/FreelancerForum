// Create a table from a funtion = array + table + numbers($) + AveragePrice
function updateAveragePrice() {
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

  let newFreelancers = "";
  // for (let i = 0; i < 10; i++) {  // Adding 10 random freelancers
  for (let i = 0; i < 1; i++) {
    // let price = Math.floor(Math.random() * 81) + 20;
    const randomIndex = Math.floor(Math.random() * freelancers.length);
    newFreelancers +=
      "<tr><td>" +
      // name[Math.floor(Math.random() * name.length)] +
      freelancers[randomIndex].name +
      "</td><td>" +
      // occupation[Math.floor(Math.random() * occupation.length)] +
      freelancers[randomIndex].occupation +
      "</td><td>$" +
      // price +
      freelancers[randomIndex].price +
      "</td></tr>";
  }
  // Prices Selector for Average from random Price from "prices of the array freelancers"
  const prices = document.querySelectorAll("#freelancers td:nth-child(3)");
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += parseInt(prices[i].textContent.replace("$", ""));
  }
  let average = total / prices.length;
  document.querySelector("#averagePrice").textContent =
    "$" + average.toFixed(2);

  // Add new freelancers every 6 sec
  document.querySelector("#freelancers").innerHTML += newFreelancers;
  setTimeout(updateAveragePrice, 6000);

  // Add a 10 by 10 random freelancer from the array
  //   document.querySelector("#freelancers").innerHTML = newFreelancers;
  //   setTimeout(updateAveragePrice, 6000);
}

// // Add a new Freelancer for the row
// function addFreelancer() {
//   // Create a new freelancer object
//   let name = prompt("Enter the name of the freelancer:");
//   let occupation = prompt("Enter the occupation of the freelancer:");
//   let price = prompt("Enter the starting price of the freelancer:");
//   // Push it to the freelancers array
//   if (name && occupation && price) {
//     freelancers.push({
//       name: name,
//       occupation: occupation,
//       price: parseInt(price),
//     });
//     sum += parseInt(price);
//     // Create a new table row with the freelancer data
//     let newRow =
//       "<tr><td>" +
//       freelancers.name +
//       "</td><td>" +
//       freelancers.occupation +
//       "</td><td>$" +
//       freelancers.price +
//       "</td></tr>";
//     // Append it to the freelancers table
//     document.querySelector("#freelancers").innerHTML += newRow;
//   } else {
//     alert("Please enter valid inputs.");
//   }
// }

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
