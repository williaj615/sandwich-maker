import utilities from '../helpers/utilities.js'
import bread from './bread.js'
import meat from './meat.js'

const sandwichSelections = [bread.getSelectedBreads + meat.getSelectedMeats];

const createSandwichOrder = (items) => {
    let domString2 = '';
    for(let i = 0; i < items.length; i++) {
        domString2 += `<h2>${items[i].name}</h2>`
    }
    utilities.printToDom('sandwich-order', domString2);
}

const createSandwichEvent = () => {
    const selectedBreads = bread.getSelectedBreads();
    const selectedMeats = meat.getSelectedMeats();
    console.log('you clicked a button', selectedBreads);
    console.log('you clicked a button', selectedMeats)
    createSandwichOrder(sandwichSelections);
    

}

const printOrderButton = () => {
    const domString = '<button id="order-button" class="btn btn-secondary">Make Sandwich</button>';
    utilities.printToDom('sandwich-order', domString);
    document.getElementById('order-button').addEventListener('click', createSandwichEvent)
    document.getElementById('order-button').addEventListener('click', sandwichTotalCalculator)
}

export default {printOrderButton};

