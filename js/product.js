let $ = document;
let backBtn = $.querySelector("#back");
let shoeTitle = $.querySelector("h1");
let shoeDesc = $.querySelector("p");
let shoeImg = $.querySelector("img");

let productsArray = [
  {
    id: 1,
    title: "Sport Shoe",
    price: 53,
    img: "images/1.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ex neque facilis perspiciatis necessitatibus.",
  },
  {
    id: 2,
    title: "Women Shoe",
    price: 81,
    img: "images/2.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ex neque facilis perspiciatis necessitatibus. Animi ipsum ut nobis corrupti praesentium.",
  },
  {
    id: 3,
    title: "Boots",
    price: 34,
    img: "images/3.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

let locationParams = new URLSearchParams(location.search);
let mainProductId = locationParams.get("id");

let mainProductObject = productsArray.find(function (product) {
  return product.id === Number(mainProductId);
});

if (mainProductObject) {
  shoeTitle.innerHTML = mainProductObject.title;
  shoeDesc.innerHTML = mainProductObject.desc;
  shoeImg.setAttribute("src", mainProductObject.img);
} else {
  location.href =
    "file:///Users/pinocchio/my/code/shoe-shop-Example/index.html";
}

backBtn.addEventListener("click", function () {
  history.back();
});
