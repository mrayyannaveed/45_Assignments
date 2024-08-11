"use strict";
function makeSandwiches(...items) {
    console.log(`Making a Sandwich with ${items.join(", ")}.`);
}
makeSandwiches("Zinger", "Coleslaw");
makeSandwiches("Chicken Patty", "Lettuce", "Chilli Sauce");
makeSandwiches("Beef Patty", "Tomato", "Mayo Garlic", "Capsicum");
