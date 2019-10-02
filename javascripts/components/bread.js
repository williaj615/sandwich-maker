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
    <input type="checkbox" class="form-check-input bread" id="${breads[i].id}">
    <label class="form-check-label" for="${breads[i].id}">${breads[i].name}</label>
  </div>`
    };
    utilities.printToDom('bread-counter', domString);
};

const getSelectedBreads = () => {
    const selectedBreads = [];
    //get all cheese boxes
    const breadCheckboxes = document.getElementsByClassName('bread');
    //put checked ones in an array
    for(let j = 0; j < breadCheckboxes.length; j++){
        for(let k = 0; k < breads.length; k++){
          if(breadCheckboxes[j].checked && breadCheckboxes[j].id === breads[k].id){
            selectedBreads.push(breads[k]);
          }
        }
      }
    //return new array
    return selectedBreads;
}


export default {printBreadOptions, getSelectedBreads};