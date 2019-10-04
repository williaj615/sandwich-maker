import utilities from "../helpers/utilities.js"

const condiments = [
    {id: 'condiment1', name: 'Mustard', price: .90 },
    {id: 'condiment2', name: 'Mayo', price: .70 },
    {id: 'condiment3', name: 'Honey Mustard', price: .60},
    {id: 'condiment4', name: 'Oil', price: .80},
    {id: 'condiment5', name: 'Salt and Pepper', price: .70}
];

const printCondimentOptions = () => {
    let domString = '';
    for (let i = 0; i < condiments.length; i++) {
     domString += `<div class="form-group form-check">
    <input type="checkbox" class="form-check-input condiment" id="${condiments[i].id}">
    <label class="form-check-label" for="${condiments[i].id}">${condiments[i].name}</label>
  </div>`
    };
    utilities.printToDom('condiment-counter', domString);
}

const getSelectedCondiments = () => {
    const selectedCondiments = [];
    //get all condiment boxes
    const condimentCheckboxes = document.getElementsByClassName('condiment');
    //put checked ones in an array
    for(let j = 0; j < condimentCheckboxes.length; j++){
        for(let k = 0; k < condiments.length; k++){
          if(condimentCheckboxes[j].checked && condimentCheckboxes[j].id === condiments[k].id){
            selectedCondiments.push(condiments[k]);
          }
        }
      }
    //return new array
    return selectedCondiments;
}

export default {printCondimentOptions, getSelectedCondiments}