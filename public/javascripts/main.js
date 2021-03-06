import bread from "./components/bread.js"
import meat from "./components/meat.js"
import cheese from "./components/cheese.js"
import condiment from "./components/condiment.js"
import veggie from "./components/veggie.js"
import sandwich from "./components/sandwich.js"

const init = () => {
    bread.printBreadOptions();
    meat.printMeatOptions();
    cheese.printCheeseOptions();
    condiment.printCondimentOptions();
    veggie.printVeggieOptions();
    sandwich.printOrderButton();

}

init();