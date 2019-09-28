import utilities from "../helpers/utilities.js"

const cheeses = [
    {id: 'cheese1', name: 'Cheddar', price: .90 },
    {id: 'cheese2', name: 'American', price: .70 },
    {id: 'cheese3', name: 'Provolone', price: .60},
    {id: 'cheese4', name: 'Pepper Jack', price: .80},
    {id: 'cheese5', name: 'Swiss', price: .70}
];

const printCheeseOptions = () => {
    let domString = '';
    for (let i = 0; i < cheeses.length; i++) {
     domString += `<div class="form-group form-check">
    <input type="checkbox" class="form-check-input cheese" id="${cheeses[i].id}">
    <label class="form-check-label" for="${cheeses[i].id}">${cheeses[i].name}</label>
  </div>`
    };
    utilities.printToDom('cheese-counter', domString);
};

export default {printCheeseOptions};