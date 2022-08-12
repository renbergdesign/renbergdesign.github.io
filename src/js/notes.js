function getNotes(pageId) {
  var div = document.createElement("div");
  var summary =
    "https://v1.nocodeapi.com/markusjrenberg/notion/remwVvUmCgGPEXFQ/pageInfo?id=" +
    pageId;
  var content =
    "https://v1.nocodeapi.com/markusjrenberg/notion/remwVvUmCgGPEXFQ/page?id=" +
    pageId;

  Promise.all([
    fetch(summary).then((resp) => resp.json()),
    fetch(content).then((resp) => resp.json()),
  ])
    .then((data) => {
      console.log(data);
      var mainContainer = document.getElementById("myData");
      div.innerHTML =
        "<details><summary>" +
        data[0].properties.title.title[0].plain_text +
        "</summary><div>" +
        data[1].html +
        "</div></details>";
      mainContainer.appendChild(div);
    })
    .catch((err) => {
      console.log(err);
    });
}

// 2022-08-19
getNotes("3a7f2468d530417787ca563140217edf");

// 2022-08-25
getNotes("746fba351ab44ed6a74c333cab1e5efe");
