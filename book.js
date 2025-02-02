// File preview logic
const profilePictureInput = document.getElementById("profilePicture");
const filePreview = document.getElementById("filePreview");
const previewImage = document.getElementById("previewImage");

profilePictureInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.src = e.target.result;
      filePreview.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    filePreview.style.display = "none";
  }
});

// Form submission logic
document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");

  

  let name = document.getElementById("name").value;
 
  let email=document.getElementById("email").value

  let phone=document.getElementById("phone").value

  let address = document.getElementById("address").value

  let UserData=localStorage.setItem( "UserInfo",JSON.stringify([{name,email,address,phone}]))


  window.location.href=" /payment.htm"





});

let fightId = localStorage.getItem("selectedFlightId");



async function FlightData(fightId) {
  let fetchingData = await fetch(
    `http://localhost:3000/flights/?id=${fightId}`
  );

  let data = await fetchingData.json();

 


  console.log(data);


  
  let table=`        <table border="1px" >
            <tr>
              <th>FlightName</th>

              <th>From</th>

              <th>To</th>

              <th>DeperatureTime</th>
            </tr>
      `



     let dataTable=data.map((e)=>{

      table += `   <tr> <td> ${e.airline} </td>   
      ${localStorage.setItem("flightName",e.airline)}
      
      <td> ${e.from} </td>     
        
              <td> ${e.to} </td>    
                      <td> ${e.departureTime} </td>      </tr> 
      `;



     })   

     table+=  ` </table>  <br>`

     document.getElementById("flightTable").innerHTML=table;


}

FlightData(fightId);





