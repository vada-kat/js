//Write a function `groupAnagrams(words)` that takes an array of strings `words` and groups anagrams together. Anagrams are words that have the same characters but in a different order.

function groupAnagrams(words){
    const anagramGroups = {};
    words.forEach(word => {
        const sortedWord = word.split('').sort().join('');
        if (anagramGroups[sortedWord]) {
            anagramGroups[sortedWord].push(word);
        } else {
            anagramGroups[sortedWord] = [word];
        }
    });
    return Object.values(anagramGroups);
}
const userWords = ["listen", "silent", "enlist", "tinsel", "apple", "pepla"];
const groupedAnagrams = groupAnagrams(userWords);
console.log(groupedAnagrams);