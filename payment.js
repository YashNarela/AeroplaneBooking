let selectedSeat = null;

document.querySelectorAll(".seat").forEach((seat) => {
  seat.addEventListener("click", function () {
    if (selectedSeat) {
      selectedSeat.classList.remove("selected");
    }
    this.classList.add("selected");
    selectedSeat = this;
    localStorage.setItem("selectedSeat", this.getAttribute("data-seat"));
  });

  document
    .getElementById("proceed-payment")
    .addEventListener("click", function () {


  document.getElementById("para").innerHTML=""

      if (!selectedSeat) {
        alert("Please select a seat before proceeding.");
        return;
      }
      document.getElementById("booking-page").style.display = "none";
      document.getElementById("payment-page").style.display = "block";
    });

  document
    .getElementById("make-payment")
    .addEventListener("click", function () {
      const seat = localStorage.getItem("selectedSeat");
      // alert(`Payment successful for seat ${seat}!`);

       window.location.href = "/dashboard.htm";


    });

  let flightNames = localStorage.getItem("flightName");

  document.getElementById(
    "para"
  ).innerHTML = ` book seat for flightName  ${flightNames}`;
});