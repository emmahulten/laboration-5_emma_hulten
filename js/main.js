"use strict";
/*
 * Laboration 5 - Studentkortsgenerator
 * Namn: Emma Hultén
 */

// --- 1. DOM-referenser ---
// Hämta element från DOM
const formEl = document.querySelector("#studentform");
const clearBtnEl = document.querySelector("#clear");

const nameInputEl = document.querySelector("#fullname");
const emailInputEl = document.querySelector("#email");
const phoneInputEl = document.querySelector("#phone");
const fontSelectEl = document.querySelector("#font");

const cardNameEl = document.querySelector("#previewfullname");
const cardEmailEl = document.querySelector("#previewemail");
const cardPhoneEl = document.querySelector("#previewphone");

const errorListEl = document.querySelector("#errorlist");
const historySectionEl = document.querySelector("#history");
const deleteHistoryBtnEl = document.querySelector("#delete");


// --- 2. Variabler ---
// Array som används för felmeddelanden
let errors = [];

// Array som innehåller sparade studentkort
let history = [];


// --- 3. Eventlyssnare ---
formEl.addEventListener("submit", onSubmit); // När användaren klickar på "Spara användare"
clearBtnEl.addEventListener("click", clearForm); // När användaren klickar på "Rensa"
deleteHistoryBtnEl.addEventListener("click", deleteHistory); // När användaren klickar på "Radera historik"

// När sidan laddas: läs in och visa eventuell tidigare historik
window.addEventListener("load", function() {
    loadHistory();
    renderHistory();
});


// --- 4. Funktioner ---

// Hantera formulärets submit-event 
function onSubmit(event) {
    event.preventDefault(); 
    
    // Hämta värden från formuläret
    const name = nameInputEl.value.trim(); 
    const email = emailInputEl.value.trim();
    const phone = phoneInputEl.value.trim();

    // Validera inmatningen
    if (validateForm(name, email, phone)) {
        // Skapa studentkort om valideringen lyckas
        createStudentCard(name, email, phone);
        // Återställ formuläret inför nästa inmatning 
        formEl.reset();
    }
}


/**
 * Validerar formulärets inmatning.
 * @returns {boolean}
 */
function validateForm(name, email, phone) {
    // Rensa tidigare fel från arrayen 
    errors = [];

    // Validera namn-input
    if (name === "") {
        errors.push("Ange ditt namn.");
    }

    // Validera email-input
    if (email === "") {
        errors.push("Ange din e-postadress.");
    }

    // Validera phone-input 
    if (phone === "") {
        errors.push("Ange ditt telefonnummer.")
    }

    // Visa eventuella felmeddelanden
    displayErrors();

    // Returnera resultatet (true eller false) av valideringen
    return errors.length === 0;
}


/**
 * Visar felmeddelanden på sidan.
 */
function displayErrors() {
    // Rensa tidigare felmeddelanden
    errorListEl.innerHTML = "";
    // Skriv ut aktuella felmeddelanden till DOM
    for(let i = 0; i < errors.length; i++) {
        const liEl = document.createElement("li");
        liEl.textContent = errors[i];
        errorListEl.appendChild(liEl);
    }   
}


/**
 * Skapar ett studentkort och visar det på sidan.
 */
function createStudentCard(name, email, phone) {
    // Hämta och applicera valt typsnitt
    const font = fontSelectEl.value;

    const cardInfoEls = document.querySelectorAll(".card-info");

    cardInfoEls.forEach(element => {
        element.style.fontFamily = font; 
    });

    // Uppdatera studentkortet
    cardNameEl.textContent = name;
    cardEmailEl.textContent = email;
    cardPhoneEl.textContent = phone;

    // Skapa studentobjekt
    const student = {
        name: name,
        email: email,
        phone: phone,
        font: font
    };

    // Lägg till studentkortet i historiken
    history.push(student);

    // Spara och uppdatera historiken
    saveHistory();
    renderHistory();
}


/**
 * Sparar historiken i localStorage.
 */
function saveHistory() {
    // Spara history i localStorage
    const historyJson = JSON.stringify(history);

    localStorage.setItem("history", historyJson);
}


/**
 * Läser in tidigare historik från localStorage.
 */
function loadHistory() {
    // Hämta eventuell sparad historik
    const storedHistory = localStorage.getItem("history");

    // Uppdatera history
    if (storedHistory !== null) {
        history = JSON.parse(storedHistory);
    }

}


/**
 * Visar historiken på sidan.
 */
function renderHistory() {
    // Rensa tidigare visad historik för att undvika dubbletter
    historySectionEl.innerHTML = "";

    // Loopa baklänges så att senaste studentkortet visas överst
    for (let i = history.length - 1; i >= 0; i--) {
        
        // Skapa en sektion för varje studentkort i historiken 
        const sectionEl = document.createElement("section");

        // Skapa ett textelement för studentens uppgifter
        const pEl = document.createElement("p");
        pEl.textContent = 
            `Namn: ${history[i].name} 
            E-post: ${history[i].email} 
            Telefon: ${history[i].phone} 
            Typsnitt: ${history[i].font}`;
        
        pEl.style.whiteSpace = "pre-line";

        // Lägg till nya element i DOM
        sectionEl.appendChild(pEl);
        historySectionEl.appendChild(sectionEl);
    }
}


/**
 * Rensar formulär, aktuellt studentkort och felmeddelanden.
 */
function clearForm() {
    // Återställ formulärfält och studentkortets innehåll
    nameInputEl.value = "";
    emailInputEl.value = "";
    phoneInputEl.value = "";
    fontSelectEl.value = "Georgia";

    cardNameEl.textContent = "Namn";
    cardEmailEl.textContent = "E-post";
    cardPhoneEl.textContent = "Telefon";

    // Återställ typsnitt i studentkort
    const cardInfoEls = document.querySelectorAll(".card-info");

    cardInfoEls.forEach(element => {
        element.style.fontFamily = ""; 
    });
   
    // Rensa eventuella felmeddelanden
    errorListEl.innerHTML = "";
}


/**
 * Raderar hela historiken.
 */
function deleteHistory() {
    // Radera sparad historik
    localStorage.removeItem("history");

    // Uppdatera history och visningen på sidan
    history = [];
    historySectionEl.innerHTML = "";
}