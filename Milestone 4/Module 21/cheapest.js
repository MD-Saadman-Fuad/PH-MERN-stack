const mobiles = [
  {
    name: "Galaxy S24 Ultra",
    price: 1199,
    camera: "200MP",
    color: "Titanium Gray"
  },
  {
    name: "iPhone 15 Pro",
    price: 1299,
    camera: "48MP",
    color: "Natural Titanium"
  },
  {
    name: "Google Pixel 8 Pro",
    price: 999,
    camera: "50MP",
    color: "Obsidian"
  },
  {
    name: "OnePlus 12",
    price: 899,
    camera: "64MP",
    color: "Emerald Green"
  }
];


function getCheapest(object){
    let cheapest = object[0];
    for (const obj of object){
        if(obj.price<cheapest.price){
            cheapest = obj;
        }
    }
    return cheapest;
}

console.log(getCheapest(mobiles));