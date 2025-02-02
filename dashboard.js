document.addEventListener("DOMContentLoaded", getInfo);

async function getInfo() {
  let flightInfo = JSON.parse(localStorage.getItem("flightData"));

  let selectedFlightId = localStorage.getItem("selectedFlightId");
  let api = `http://localhost:3000/flights/?id=${selectedFlightId}`;

  let response = await fetch(api);
  let data = await response.json();
  console.log(data);

  document.getElementById("from").innerHTML = data[0].from;

  document.getElementById("to").innerHTML = data[0].to;
  document.getElementById("flight").innerHTML = data[0].airline;

  document.getElementById("price").innerHTML = data[0].price;

  let information = JSON.parse(localStorage.getItem("UserInfo"));
  console.log(information);

  let seatInfo = localStorage.getItem("selectedSeat");

  let nm = document.getElementById("name");
  let em = document.getElementById("email");

  let pn = document.getElementById("phone");

  let st = document.getElementById("seat");

  let dt = document.getElementById("date");

  let cf = document.getElementById("status");

  let ad = document.getElementById("address");



  document.getElementById("deleteit").addEventListener('click',()=>{

      document.getElementById("from").innerHTML = "no data";

      document.getElementById("to").innerHTML = "no data";
      document.getElementById("flight").innerHTML = "no data";

      document.getElementById("price").innerHTML = "no data";

      cf.innerHTML="no data"
      dt.innerHTML="no data"
      st.innerHTML="no data"

    

  })



  if (nm && em && pn && st) {
    nm.innerHTML = information[0].name;
    em.innerHTML = information[0].email;
    pn.innerHTML = information[0].phone;

    st.innerHTML = seatInfo;
    dt.innerHTML = new Date();

    cf.innerHTML = "confirmed";
    ad.innerHTML = information[0].address;
  } else {

    document.getElementById("name").innerHTML = "no data";
    document.getElementById("email").innerHTML = "no data";
    document.getElementById("phone").innerHTML = "no data";

  }


}
