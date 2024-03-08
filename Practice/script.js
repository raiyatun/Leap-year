

function checkLeapYear() {
  var yearInput = document.getElementById("yearInput").value;
  var year = parseInt(yearInput);

  if (isNaN(year)) {
      document.getElementById("result").innerText = "Please enter a valid year.";
      return;
  }

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      document.getElementById("result").innerText = year + " is a leap year.";
  } else {
      document.getElementById("result").innerText = year + " is not a leap year.";
  }
}