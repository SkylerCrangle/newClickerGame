let totalCount = 0

class UpgradeItem {
  constructor(name, quantityMax, price, priceInc, addsClickPower, addsCount) {
    this.name = name;
    this.quantity = 0;
    this.quantityMax = quantityMax;
    this.price = price;
    this.priceInc = priceInc;
    this.addsClickPower = addsClickPower;
    this.addsCount = addsCount;
  }
  gain() {
    this.quantity++;
    totalCount -= this.price;
    this.price += this.priceInc * this.quantity;
  }
}

class UpgradeAuto {
  constructor(name, quantityMax, price, priceInc, addsCount, frequency) {
    this.name = name;
    this.quantity = 0;
    this.quantityMax = quantityMax;
    this.price = price;
    this.priceInc = priceInc;
    this.addsCount = addsCount;
    this.frequency = frequency;
  }
  gain() {
    this.quantity++;
    //totalCount -= this.price;
    this.price += this.priceInc;
  }

  run() {
    console.log(this.addsCount, this.quantity, totalCount)
    totalCount += this.addsCount * this.quantity;
    console.log(totalCount);
    return totalCount;
    //updatescreen()...?

  }
}

//(name, quantityMax, price, priceInc, addsCount, frequency)
let gnome = new UpgradeAuto("gnome", 10, 250, 50, 1, 3);
let reindeer = new UpgradeAuto("reindeer", 12, 1000, 555, 50, 45);
let shovel = new UpgradeItem("shovel", undefined, 15, 100, 5, 0);
let basket = new UpgradeItem("basket", undefined, 300, 30, 15, 0);

console.log(gnome)
gnome.gain();
console.log(gnome.quantity, gnome.price)
gnome.gain();
console.log(gnome.quantity, gnome.price)


gnome.run();

setTimeout(gnome.run.bind(gnome), 3000);
//setInterval(gnome.run, 3000);