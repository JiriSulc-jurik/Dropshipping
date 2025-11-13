// script.js – jednoduché interakce pro web DropFlow

// Kontakt: simulace odeslání formuláře
function handleContactFormSubmit(event) {
    event.preventDefault();

    const messageEl = document.getElementById("contact-message");
    if (messageEl) {
        messageEl.classList.remove("hidden");
    }

    const form = event.target;
    form.reset();

    return false;
}

// Checklist na stránce Výhody & rizika
function toggleChecklistItem() {
    const allCheckboxes = document.querySelectorAll(".checklist input[type='checkbox']");
    const allChecked = Array.from(allCheckboxes).every(cb => cb.checked);
    const messageEl = document.getElementById("checklist-message");

    if (!messageEl) return;

    if (allChecked) {
        messageEl.classList.remove("hidden");
    } else {
        messageEl.classList.add("hidden");
    }
}
