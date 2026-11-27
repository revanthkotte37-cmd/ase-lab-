const bookingForm = document.getElementById("bookingForm");
const checkInInput = document.getElementById("checkIn");
const checkOutInput = document.getElementById("checkOut");
const confirmation = document.getElementById("confirmation");

function getToday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const today = getToday();
checkInInput.min = today;
checkOutInput.min = today;

checkInInput.addEventListener("change", () => {
  checkOutInput.min = checkInInput.value || today;

  if (checkOutInput.value && checkOutInput.value <= checkInInput.value) {
    checkOutInput.value = "";
  }
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  confirmation.classList.remove("error");

  if (checkOutInput.value <= checkInInput.value) {
    confirmation.textContent = "Check-out must be after check-in.";
    confirmation.classList.add("error");
    return;
  }

  const guestName = document.getElementById("guestName").value.trim();
  const roomType = document.getElementById("roomType").value;

  confirmation.textContent =
    `Thank you, ${guestName}! Your ${roomType} is booked from ` +
    `${checkInInput.value} to ${checkOutInput.value}.`;
});
