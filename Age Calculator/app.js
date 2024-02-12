const inputDate = document.getElementById("date");
const result = document.getElementById("result");
inputDate.max = new Date().toISOString().split("T")[0];

calculateAge = () => {
  const inputBirth = new Date(inputDate.value);

  // Validate input date
  if (isNaN(inputBirth.getTime())) {
    result.innerHTML = `<b>Invalid Date !!<b>`;
    return;
  }

  let birthDate = inputBirth.getDate();
  let birthMonth = inputBirth.getMonth() + 1; // Added 1 because dafault value of months starts from 0 i.e; january => 0, Feburary => 1 and so on
  let birthYear = inputBirth.getFullYear();

  const today = new Date();
  let currDate = today.getDate();
  let currMonth = today.getMonth() + 1;
  let currYear = today.getFullYear();

  let d, m, y;

  y = currYear - birthYear;

  if (currMonth >= birthMonth) {
    m = currMonth - birthMonth;
  } else {
    y--;
    m = 12 + (currMonth - birthMonth);
  }

  if (currDate >= birthDate) {
    d = currDate - birthDate;
  } else {
    m--;
    d = getDaysInMonth(birthYear, birthMonth) + (currDate - birthDate);
  }

  if (m < 0) {
    m = 11;
    y--;
  }

  result.innerHTML = `You are <span>${y}</span> years, <span>${m}</span> months and <span>${d}</span> days old.`;
};

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
