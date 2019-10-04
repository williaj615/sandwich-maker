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
    <input type="checkbox" class="form-check-input meat" id="${meats[i].id}">
    <label class="form-check-label" for="${meats[i].id}">${meats[i].name}</label>
  </div>`
    };
    utilities.printToDom('meat-counter', domString);
};

const getSelectedMeats = () => {
    const selectedMeats = [];
    //get all meat boxes
    const meatCheckboxes = document.getElementsByClassName('meat');
    //put checked ones in an array
    for(let j = 0; j < meatCheckboxes.length; j++){
        for(let k = 0; k < meats.length; k++){
          if(meatCheckboxes[j].checked && meatCheckboxes[j].id === meats[k].id){
            selectedMeats.push(meats[k]);
          }
        }
      }
    //return new array
    return selectedMeats;
}


export default {printMeatOptions, getSelectedMeats};