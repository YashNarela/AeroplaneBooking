const flightData = JSON.parse(localStorage.getItem("flightData"));

if (flightData) {
  let table = `<table> 
                      <tr>
                        <th>Flight Name</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Departure</th>
                        <th>Arrival</th>
                        <th>Price</th>
                      </tr>`;

  flightData.forEach((flight) => {
    table += `<tr>
                      <td>${flight.airline}</td>
                      <td>${flight.from}</td>
                      <td>${flight.to}</td>
                      <td>${flight.departureTime}</td>
                      <td>${flight.arrivalTime}</td>
                      <td>${flight.price}</td>
                    </tr>`;
  });

  table += `</table>`;

  document.getElementById("fi").innerHTML = table;
} else {
  document.getElementById("fi").innerHTML =
    "<p style='text-align: center;'>No flight data available.</p>";
}
