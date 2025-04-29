let ageCalc = document.getElementById("ageCalc");
let ageDiff = document.getElementById("ageDiff");
let DateTime = luxon.DateTime;

let picker = datepicker("input", {
  formatter: (input, date, instance) => {
    let value = date.toLocaleDateString()
    input.value = value
  },
  position: 'bl',
  maxDate: DateTime.now().toJSDate(),
  onSelect: (instance, date) => {
    if (date) {
      let now = DateTime.now();
      let pickedDate = DateTime.fromJSDate(date);

      ageCalc.addEventListener("click", () => {
        if (pickedDate) {
          let diff = pickedDate.diff(now, ['years', 'months']).toObject();
          let years = Math.abs(Math.ceil(diff.years));
          let months = Math.abs(Math.ceil(diff.months));

          ageDiff.innerHTML = `You are <b>${years} years ${months} months</b> old`;
        }
      })
    }
  }
})

window.addEventListener("load", () => {
  document.querySelector("#datepicker").value = "";
})

ageCalc.addEventListener("click", () => {
  if (!datepicker.value) {
    ageDiff.innerHTML = `Please input the date first.`;
  }
})