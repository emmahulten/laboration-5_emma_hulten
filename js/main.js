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

/* To do: 
// När sidan laddas: - läs in och visa eventuell tidigare historik
window.addEventListener("load", function() {    
}) */

// --- 4. Funktioner ---

// När formuläret skickas:
function onSubmit() {

}
// - validera inmatningen
// - skapa studentkort om valideringen lyckas

/**
 * Validerar formulärets inmatning.
 * @returns {boolean}
 */
function validateForm() {
    // Kontrollera formulärets obligatoriska fält

    // Visa eventuella felmeddelanden

    // Returnera resultatet (true eller false) av valideringen
}


/**
 * Visar felmeddelanden på sidan.
 */
function displayErrors() {
    // Rensa tidigare felmeddelanden

    // Skriv ut aktuella felmeddelanden till DOM
}


/**
 * Skapar ett studentkort och visar det på sidan.
 */
function createStudentCard() {
    // Hämta information från formuläret

    // Uppdatera studentkortet

    // Lägg till studentkortet i historiken

    // Spara och uppdatera historiken
}


/**
 * Sparar historiken i localStorage.
 */
function saveHistory() {
    // Spara history i localStorage
}


/**
 * Läser in tidigare historik från localStorage.
 */
function loadHistory() {
    // Hämta eventuell sparad historik

    // Uppdatera history
}


/**
 * Visar historiken på sidan.
 */
function renderHistory() {
    // Rensa tidigare visad historik

    // Skriv ut innehållet i history till DOM
}


/**
 * Rensar formulär, aktuellt studentkort och felmeddelanden.
 */
function clearForm() {
    // Återställ formulär och studentkort

    // Rensa eventuella felmeddelanden
}


/**
 * Raderar hela historiken.
 */
function deleteHistory() {
    // Radera sparad historik

    // Uppdatera history och visningen på sidan
}

