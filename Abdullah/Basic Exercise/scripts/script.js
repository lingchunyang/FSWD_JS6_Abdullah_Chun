var sandwiches = { 
    "sandwich": "Hamburger",
    "calories": "260"
};
var fries = { 
    "fries_size": "Large French Fries",
    "calories": "570" 
};

document.getElementById("text").innerHTML = `
My favorite sandwich is a ${sandwiches.sandwich} which has approximately ${sandwiches.calories} calories, along with it I enjoy eating ${fries.fries_size} which have about ${fries.calories} calories.
`;
