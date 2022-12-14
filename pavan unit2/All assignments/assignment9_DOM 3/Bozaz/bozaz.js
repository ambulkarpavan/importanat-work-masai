document.querySelector("form").addEventListener("submit", todoList);

function todoList() {
  event.preventDefault();
  var category = document.querySelector("#category").value;
  var name= document.querySelector("#name").value;
  var price= document.querySelector("#price").value;

  console.log(category,name,price);

  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  td1.innerText =category;
  var td2 = document.createElement("td");
  td2.innerText = name;
  var td3 = document.createElement("td");
  td3.innerText = price;

  tr.append(td1, td2, td3);
  document.querySelector("tbody").append(tr);
}
