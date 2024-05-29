function filterByGroup(ethnicGroup) {
    // Assuming you have an array of objects with people and their ethnic groups
    // Replace this array with your actual data structure containing people and their ethnic groups
    const peopleData = [
        { name: "John", ethnicGroup: "Kalenjin" },
        { name: "Alice", ethnicGroup: "Luo" },
        { name: "Mary", ethnicGroup: "Kalenjin" },
        { name: "Bob", ethnicGroup: "Kikuyu" },
        { name: "David", ethnicGroup: "Kalenjin" }
    ];

    // Filter people by the specified ethnic group
    //const filteredPeople = peopleData.filter(person => person.ethnicGroup === ethnicGroup);
    const filteredPeople = peopleData.filter(function(person, ethnicGroup){
        console.log(person.ethnicGroup === ethnicGroup);
    })
    
    if (filteredPeople.length > 0) {
        return filteredPeople;
    } else {
        console.log(`There are no people from the ${ethnicGroup} ethnic group.`);
        return [];
    }
}

// Example usage:
const kalenjinPeople = filterByGroup("Kalenjin");
console.log(kalenjinPeople);

