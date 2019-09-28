import utilities from "../helpers/utilities.js"

const breads = [
    {id: 'bread1', name: 'Wheat', price: .90 },
    {id: 'bread2', name: 'Honey Oat', price: .70 },
    {id: 'bread3', name: 'White', price: .60},
    {id: 'bread4', name: 'Sour-Dough', price: .80},
    {id: 'bread5', name: 'Wrap', price: .70}
];

const printBreadOptions = () => {
    let domString = '';
    for (let i = 0; i < breads.length; i++) {
     domString += `<div class="form-group form-check">
    <input type="checkbox" class="form-check-input cheese" id="${breads[i].id}">
    <label class="form-check-label" for="${breads[i].id}">${breads[i].name}</label>
  </div>`
    };
    utilities.printToDom('bread-counter', domString);
};

export default {printBreadOptions};