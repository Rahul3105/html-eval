let addProduct = document.getElementById("addProduct");
addProduct.addEventListener("click", addItems);
let arr = [];
function addItems() {
  let name = document.getElementById("name");
  let price = document.getElementById("price");
  let description = document.getElementById("description");
  let delivery = document.getElementById("delivery");
  let image = document.getElementById("image");

  if (name.value == "") alert("Please add a name");
  else if ((price.value = "")) alert("Please add price");
  else if (description.value == "") alert("Please add a description");
  else if (delivery.value == "") alert("please add delivery days");
  else {
    let obj = {};
    obj["name"] = name.value;
    obj["price"] = price.value;
    obj["description"] = description.value;
    obj["deliveryDate"] = delivery.value;
    obj["productImg"] = image.value;
    arr.push(obj);
    name.value = "";
    price.value = "";
    description.value = "";
    delivery.value = "";
    image.value = "";
    createItemBox(obj);
  }
}
let id = 0;
function createItemBox(obj) {
  let gridContainer = document.getElementsByClassName("gridContainer")[0];
  let item = document.createElement("div");
  item.classList.add("items");
  item.id = id;
  if (obj["productImg"] != "") {
    item.style.backgroundImage = `url(${obj["productImg"]})`;
  }
  item.innerHTML = `<div onclick = 'remove(${id})' class="remove">Remove</div>
                <div onclick = 'view(${id})'  class="view">View Details</div>
                <div onclick = 'update(${id})' class="update">Update</div>`;
  gridContainer.appendChild(item);
  id++;
}
function remove(id) {
  let item = document.getElementById(id);

  let gridContainer = document.getElementsByClassName("gridContainer")[0];
  gridContainer.removeChild(item);
}
function update(id) {
  let item = document.getElementById(id);
  let new_price = prompt("Enter new price");
  let obj = arr[id];
  obj["price"] = new_price;
}

function view(id) {
  let obj = arr[id];
  let item = document.getElementById(id);
  //   item.style.backgroundImage = "none";
  let div = document.createElement("div");
  div.classList.add("details");
  div.innerHTML = `<p>name : ${obj.name}</p>
                    <p>price : ${obj.price}</p>
                    <p>description :${obj.description}</p>
                    <p>delivery : ${obj.deliveryDate}</p>`;
  console.log(div);
  console.log(item);
  console.log(obj);
  item.insertAdjacentElement("afterbegin", div);
}
