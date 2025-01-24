// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".main-menu__nav");

// hamburger.addEventListener("click", () => {
//   navMenu.classList.toggle("active");
// });

// async function edit(id) {
//   let ed = document.querySelector(". bx-minus");

//   ed.addEventListener("click", alert("hello"));
// }
// document.getElementById("btnfly").addEventListener("click", flight);

// async function flight(e) {
//   e.preventDefault(); // Prevent form submission if the button is in a form

//   let from = document.getElementById("from").value.toLowerCase();
//   let to = document.getElementById("to").value.toLowerCase();

//   console.log(from, to);

//   let table = `<table border="1" style="width: 100%; text-align: center;"> 
//                   <tr>
//                     <th>Flight Name</th>
//                     <th>Departure</th>
//                     <th>Arrival</th>
//                     <th>Price</th>
//                     <th>Book</th>
//                   </tr>`;

//   let api = "http://localhost:3000/flights";

//   try {
//     let response = await fetch(api);
//     let data = await response.json();

//     // Filter and display flights
//     data.forEach((flight) => {
//       if (
//         flight.from.toLowerCase() === from &&
//         flight.to.toLowerCase() === to
//       ) {
//         table += `<tr>
//                     <td>${flight.airline}</td>
//                     <td>${flight.departureTime}</td>
//                     <td>${flight.arrivalTime}</td>
//                     <td>${flight.price}</td>
//                     <td>
//                       <button onclick="redirectToBooking(${flight.id})">Book</button>
//                     </td>
//                   </tr>`;
//       }
//     });

//     table += `</table>`;
//     document.getElementById("display").innerHTML = table;
//   } catch (error) {
//     console.error("Error fetching flight data:", error);
//     alert("Failed to load flights. Please try again.");
//   }
// }

// // Redirect to the booking page with flight details
// function redirectToBooking(flightId) {
//   // Save the selected flight ID to localStorage
//   localStorage.setItem("selectedFlightId", flightId);

//   // Redirect to the booking page
//   window.location.href = "book.htm";
// }

// document.getElementById("flightDisplay").addEventListener("click", flightdata);

// async function flightdata(e) {
//   e.preventDefault();

//   let api = "http://localhost:3000/flights";

//   try {
//     let response = await fetch(api);
//     if (!response.ok) throw new Error("Failed to fetch flight data");

//     let data = await response.json();
//     console.log(data);

//     // Save data in localStorage
//     localStorage.setItem("flightData", JSON.stringify(data));

//     // Navigate to flights.htm
//     location.href = "flights.htm";
//   } catch (error) {
//     console.error("Error:", error);
//     alert("An error occurred while fetching flight data.");
//   }
// }

document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu Logic
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".main-menu__nav");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Flight Search Functionality
  document.getElementById("btnfly")?.addEventListener("click", flight);

  async function flight(e) {
    e.preventDefault(); // Prevent form submission if the button is in a form

    const from = document.getElementById("from")?.value.toLowerCase();
    const to = document.getElementById("to")?.value.toLowerCase();

    if (!from || !to) {
      alert("Please enter both departure and destination locations.");
      return;
    }

    console.log(from, to);

    const api = "http://localhost:3000/flights";
    try {
      const response = await fetch(api);
      const data = await response.json();

      let table = `
        <table border="1" style="width: 100%; text-align: center;">
          <tr>
            <th>Flight Name</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Price</th>
            <th>Book</th>
          </tr>
      `;

      // Filter and display flights
      data.forEach((flight) => {
        if (
          flight.from.toLowerCase() === from &&
          flight.to.toLowerCase() === to
        ) {
          table += `
            <tr>
              <td>${flight.airline}</td>
              <td>${flight.departureTime}</td>
              <td>${flight.arrivalTime}</td>
              <td>${flight.price}</td>
              <td><button onclick="redirectToBooking(${flight.id})">Book</button></td>
            </tr>
          `;
        }
      });

      table += `</table>`;
      document.getElementById("display").innerHTML = table;
    } catch (error) {
      console.error("Error fetching flight data:", error);
      alert("Failed to load flights. Please try again.");
    }
  }

  // Redirect to the booking page with flight details
  window.redirectToBooking = function (flightId) {
    // Save the selected flight ID to localStorage
    localStorage.setItem("selectedFlightId", flightId);

    // Redirect to the booking page
    window.location.href = "book.htm";
  };

  // Fetch and display all flights
  document
    .getElementById("flightDisplay")
    ?.addEventListener("click", flightdata);

  async function flightdata(e) {
    e.preventDefault();

    const api = "http://localhost:3000/flights";
    try {
      const response = await fetch(api);
      if (!response.ok) throw new Error("Failed to fetch flight data");

      const data = await response.json();
      console.log(data);

      // Save data in localStorage
      localStorage.setItem("flightData", JSON.stringify(data));

      // Navigate to flights.htm
      location.href = "flights.htm";
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while fetching flight data.");
    }
  }
});
