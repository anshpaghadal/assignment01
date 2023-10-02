// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Btn = document.getElementById("noun1");
const verbBtn = document.getElementById("verb");
const adjBtn = document.getElementById("adjective");
const noun2Btn = document.getElementById("noun2");
const settingBtn = document.getElementById("setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackBtn = document.getElementById("playback");
const randomBtn = document.getElementById("random");
const storyParagraph = document.getElementById("story");
const studentIdParagraph = document.getElementById("studentId");

// Variables for pre-defined arrays
const nouns1 = ["The turkey", "Mom","Dad","The dog","The teacher","The elephant","The cat"]; 
const verbs = ["sat on","ate","danced with","saw","doesn't like","kissed"];
const adjectives = ["a funny","a scary","a goofy","a slimy","a barking","a fat"];
const nouns2 = ["goat","monkey","fish","cow","frog","bug","worm"];
const settings = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];

// Variables to keep track of the chosen words
let chosenNoun1 = "";
let chosenVerb = "";
let chosenAdjective = "";
let chosenNoun2 = "";
let chosenSetting = "";

/* Functions
-------------------------------------------------- */

// Function to pick a random word from an array
function getRandomWord(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Event listeners for each button to pick a random word and display it
noun1Btn.addEventListener("click", () => {
    chosenNoun1 = getRandomWord(nouns1);
    choosenNoun1.textContent = chosenNoun1;
});

verbBtn.addEventListener("click", () => {
    chosenVerb = getRandomWord(verbs);
    choosenVerb.textContent = chosenVerb;
});

adjBtn.addEventListener("click", () => {
    chosenAdjective = getRandomWord(adjectives);
    choosenAdjective.textContent = chosenAdjective;
});

noun2Btn.addEventListener("click", () => {
    chosenNoun2 = getRandomWord(nouns2);
    choosenNoun2.textContent = chosenNoun2;
});

settingBtn.addEventListener("click", () => {
    chosenSetting = getRandomWord(settings);
    choosenSetting.textContent = chosenSetting;
});

// Function to concatenate the user story and display it
function playback_on_click() {
    const story = `${chosenNoun1} ${chosenVerb} ${chosenAdjective} ${chosenNoun2} ${chosenSetting}.`;
    storyParagraph.textContent = story;
}

playbackBtn.addEventListener("click", playback_on_click);

// Function to create a random story
function random_on_click() {
    chosenNoun1 = getRandomWord(nouns1);
    choosenNoun1.textContent = chosenNoun1;

    chosenVerb = getRandomWord(verbs);
    choosenVerb.textContent = chosenVerb;

    chosenAdjective = getRandomWord(adjectives);
    choosenAdjective.textContent = chosenAdjective;

    chosenNoun2 = getRandomWord(nouns2);
    choosenNoun2.textContent = chosenNoun2;

    chosenSetting = getRandomWord(settings);
    choosenSetting.textContent = chosenSetting;

    playback_on_click();
}

randomBtn.addEventListener("click", random_on_click);

// Function to reset chosen words
function resetChosenWords() {
    chosenNoun1 = "";
    chosenVerb = "";
    chosenAdjective = "";
    chosenNoun2 = "";
    chosenSetting = "";
    choosenNoun1.textContent = "";
    choosenVerb.textContent = "";
    choosenAdjective.textContent = "";
    choosenNoun2.textContent = "";
    choosenSetting.textContent = "";
    storyParagraph.textContent = "";
}

// Event listener for the "Reset" button
document.getElementById("reset").addEventListener("click", () => {
    resetChosenWords();
});


// Function to toggle the student info pop-up
function toggleStudentInfo() {
    const studentId = "200544015"; 
    const studentName = "Ansh Mukeshbhai Paghadal"; 
    const studentInfoText = `Student ID: ${studentId}, Name: ${studentName}`;
    const studentInfoPopup = document.getElementById("studentInfoPopup");

    // If the pop-up is currently visible, hide it; otherwise, show it
    if (studentInfoPopup.style.display === "block") {
        studentInfoPopup.style.display = "none";
    } else {
        studentInfoPopup.style.display = "block";
        document.getElementById("studentInfoText").textContent = studentInfoText;
    }
}

// Event listener for the "Student Info" button
document.getElementById("studentInfoButton").addEventListener("click", toggleStudentInfo);
