import utilities from "../helpers/utilities.js"

const veggies = [
    {id: 'veggie1', name: 'Lettuce', price: .90 },
    {id: 'veggie2', name: 'Tomato', price: .70 },
    {id: 'veggie3', name: 'Pickle', price: .60},
    {id: 'veggie4', name: 'Onion', price: .80},
    {id: 'veggie5', name: 'Peppers', price: .70}
];

const printVeggieOptions = () => {
    let domString = '';
    for (let i = 0; i < veggies.length; i++) {
     domString += `<div class="form-group form-check">
    <input type="checkbox" class="form-check-input cheese" id="${veggies[i].id}">
    <label class="form-check-label" for="${veggies[i].id}">${veggies[i].name}</label>
  </div>`
    };
    utilities.printToDom('veggie-counter', domString);
};

export default {printVeggieOptions}