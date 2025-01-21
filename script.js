const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-menu__nav");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

async function edit(id) {
  let ed = document.querySelector(". bx-minus");

  ed.addEventListener("click", alert("hello"));
}

document.getElementById("btnfly").addEventListener("click", flight);
async function flight(e) {
  let from = document.getElementById("from").value.toLowerCase();
  let to = document.getElementById("to").value.toLowerCase();

  console.log(from, to);

  let table = `<table> <tr>     <tr>
            <th>Flight Name</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Price</th>
            <th>Add</th>
            <th>Delete</th>
            <th>Quantity</th>


        </tr> </tr>`;

  e.preventDefault();
  let api = "http://localhost:3000/flights";

  let response = await fetch(api);

  let data = await response.json();

  console.log(data);

  data.map((flight) => {
    if (flight.from.toLowerCase() === from && flight.to.toLowerCase() === to)
      table += `<tr> <td>${flight.airline}</td> <td>${flight.departureTime}</td> <td>${flight.arrivalTime}</td> <td>${flight.price}</td>  
     <td><a href="#"  onclick="increase(${flight.id})"><i class='bx bx-plus'></i></a></td>
 <td><a href="#"  onclick="decrease(${flight.id})"><i class='bx bx-minus'></i> </a></td>
    <td id="${flight.id}">${flight.quantity} </td>
 </tr>`;
  });
  table += `</table>`;
  document.getElementById("display").innerHTML = table;
}

function increase(Id) {
  alert("hello");
  let api = `http://localhost:3000/flights/${Id}`;
  let quantity = Number(document.getElementById(`${flight.Id}`).value);
  quantity++;

  console.log(quantity);
  
  fetch(api, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      quantity: quantity,
    }),
  }).then((res) => {
    alert("data updated!!!");
      document.getElementById(`${flight.id}`).innerHTML = `${flight.quantity}`;
      console.log(quantity);
      
  });

 

}

function decrease(Id) {
  quantity--;
  document.getElementById(`${flight.id}`).innerHTML = quantity;
}
