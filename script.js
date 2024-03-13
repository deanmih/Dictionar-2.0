let words = [];

function addWord() {
    let addedWord = document.getElementById('addInput').value;
    words.push(addedWord);
    console.log(words);
}

function lookForWord() {
    let searchedWord = document.getElementById('searchInput').value;
    if (words.includes(searchedWord) == true) {
        alert("The word you are looking for exists");
    } else {
        alert("The word you are looking for does not exist");
    }
}