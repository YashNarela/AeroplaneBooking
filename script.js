

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
    e.preventDefault();

    const from = document.getElementById("from")?.value.toLowerCase();
    const to = document.getElementById("to")?.value.toLowerCase();

    if (!from || !to) {
      alert("Please enter both departure and destination locations.");
      return;
    }

  
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


  window.redirectToBooking = function (flightId) {
   
    localStorage.setItem("selectedFlightId", flightId);


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
