const tickets = document.getElementsByClassName("ticket");
for (let ticket of tickets) {
  ticket.addEventListener("click", myFunction);
}

let count = 0;
function myFunction(e) {
  count++;
  if (count < 5) {
    const ticketNumber = e.target.innerText;
    const ticketId = document.getElementById(ticketNumber);
    ticketId.setAttribute(
      "style",
      "background-color: rgb(57, 227, 57); color: White"
    );
  } else{
    alert("Maximum Tickets have booked");
  }
}
