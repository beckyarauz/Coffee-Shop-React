
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

const json = [
    images['coffeeAutumn.jpg'],
    images['coffeewild2.jpg'],
    images['coffeewild3.jpg'],
    images['foodwild1.jpg'],
    images['foodwild2.jpg'],
    images['foodwild3.jpg'],
    images['foodwild4.jpg'],
    images['foodwild6.jpg'],
]

export default json;