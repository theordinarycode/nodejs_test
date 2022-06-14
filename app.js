document.getElementById("button1").addEventListener("click", loadTxt);

function loadTxt() {
  fetch("data.txt")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById("result").innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}

document.getElementById("button2").addEventListener("click", loadJSON);

function loadJSON() {
  fetch("employees.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let html = "";
      data.Employees.forEach((employee) => {
        html =
          html +
          `
        <p>${employee.preferredFullName}, ${employee.emailAddress}</p>
        `;
      });
      document.getElementById("result").innerHTML = html;
    })
    .catch(function (err) {
      console.log(err);
    });
}
