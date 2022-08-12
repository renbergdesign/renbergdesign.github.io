fetch("http://127.0.0.1:5500/src/json/lecture-notes.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].body);
    appendData(data);
  })
  .catch((err) => {
    console.log(err);
  });

function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div12 = document.createElement("div");
    div12.innerHTML =
      "<details><summary>" +
      data[i].date +
      " | " +
      data[i].subject +
      "</summary><div><h4>" +
      data[i].subject +
      "</h4><p>" +
      data[i].body +
      "</details><br>";
    mainContainer.appendChild(div12);
  }
}
