import utilities from "../helpers/utilities.js"

const meats = [
    {id: 'meat1', name: 'Turkey', price: .90 },
    {id: 'meat2', name: 'Ham', price: .70 },
    {id: 'meat3', name: 'Chicken Salad', price: .60},
    {id: 'meat4', name: 'Salami', price: .80},
    {id: 'meat5', name: 'Roast Beef', price: .70}
];

const printMeatOptions = () => {
    let domString = '';
    for (let i = 0; i < meats.length; i++) {
     domString += `<div class="form-group form-check">
    <input type="checkbox" class="form-check-input cheese" id="${meats[i].id}">
    <label class="form-check-label" for="${meats[i].id}">${meats[i].name}</label>
  </div>`
    };
    utilities.printToDom('meat-counter', domString);
};

export default {printMeatOptions};