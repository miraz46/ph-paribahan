const tickets = document.getElementsByClassName("ticket");
for (let ticket of tickets) {
  ticket.addEventListener("click", myFunction);
}

let count = 0;
let totalPriceTaka = 0;
function myFunction(e) {
  count++;
  if (count < 5) {
    const ticketNumber = e.target.innerText;
    const ticketId = document.getElementById(ticketNumber);
    ticketId.setAttribute(
      "style",
      "background-color: rgb(57, 227, 57); color: White"
    );

    const totalTicketString =
      document.getElementById("total-seat-left").innerText;
    let totalTicketInteger = parseInt(totalTicketString);
    document.getElementById("total-seat-left").innerText =
      totalTicketInteger - 1;

    const supTicketString =
      document.getElementById("sup-ticket-string").innerText;
    let supTicketInteger = parseInt(supTicketString);
    document.getElementById("sup-ticket-string").innerText =
      supTicketInteger + 1;

    const ticketLists = document.getElementById("ticket-lists");
    ticketLists.innerHTML +=
      "<div class='mx-10 pb-3 flex justify-between'><h1 id='ticketName'></h1><h1>Economic</h1><h1>550</h1></div>";
    document.getElementById("ticketName").innerText = ticketNumber;

    let totalPriceId = document.getElementById("total-price").innerText;
    let totalPriceInteger = parseInt(totalPriceId);
    document.getElementById("total-price").innerText = totalPriceInteger + 550;
  } else {
    alert("Maximum Tickets have booked");
  }
}

// class="btn w-full mt-10 bg-green-600 text-white"
