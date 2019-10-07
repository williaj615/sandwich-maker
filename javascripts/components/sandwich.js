import utilities from '../helpers/utilities.js'
import bread from './bread.js'
import meat from './meat.js'
import cheese from './cheese.js'
import condiment from './condiment.js'
import veggie from './veggie.js'


//const sandwichSelections = [bread.getSelectedBreads + meat.getSelectedMeats];

const createSandwichOrder = (items) => {
    const orderTotal = items.reduce((prev, curr) => prev + curr.price, 0);
    let domString2 = '<p>Your Sandwich Order!</p>';
    for(let i = 0; i < items.length; i++) {
        domString2 += `<h4>${items[i].name} ${items[i].price.toFixed(2)}</h4>`;
    }
    domString2 += `<hr><h4>Order Total =$${orderTotal.toFixed(2)}</h4>`;
    utilities.printToDom('sandwich-order', domString2);
}



const createSandwichEvent = (s) => {
    const selectedBreads = bread.getSelectedBreads();
    const selectedMeats = meat.getSelectedMeats();
    const selectedCheeses =  cheese.getSelectedCheeses();
    const selectedCondiments =  condiment.getSelectedCondiments();
    const selectedVeggies = veggie.getSelectedVeggies();
    const sandwichSelections = selectedBreads.concat(selectedMeats, selectedCheeses, selectedCondiments, selectedVeggies)
    createSandwichOrder(sandwichSelections);
}

const printOrderButton = () => {
    const domString = '<button id="order-button" class="btn btn-secondary">Make Sandwich</button>';
    utilities.printToDom('sandwich-order-button', domString);
    document.getElementById('order-button').addEventListener('click', createSandwichEvent)
    document.getElementById('order-button').addEventListener('click', createSandwichOrder)
}

export default {printOrderButton};

