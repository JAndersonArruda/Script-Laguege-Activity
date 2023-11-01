// Question 01.
document.addEventListener("DOMContentLoaded", () => {
    const listUl = document.querySelector("#list");
    const titleInput = document.querySelector("#title-event");
    const dateTimeInput = document.querySelector("#date-time");
    const addEventButton = document.querySelector("#addButton");

    const arrayEvents = [];

    addEventButton.addEventListener("click", () => {
        const title = titleInput.value;
        const dateTime = new Date(dateTimeInput.value);

        const dataEvents = {
            name: title,
            dateTime: dateTime
        };

        arrayEvents.push(dataEvents);
        arrayEvents.sort((a, b) => a.dateTime - b.dateTime);

        listUl.replaceChildren();
        arrayEvents.forEach((event) => {
            const newEvent = document.createElement("li");
            newEvent.textContent = `${event.name} - ${event.dateTime}`;
            listUl.appendChild(newEvent);
            titleInput.value = "";
        });
    });
});



// Question 02.
document.addEventListener("DOMContentLoaded", () => {
    const listClientUl = document.querySelector("#list-client");
    const nameInput = document.querySelector("#name");
    const bankInput = document.querySelector("#bank");
    const agencyInput = document.querySelector("#agency");
    const accountInput = document.querySelector("#account");
    const typeAccountInput = document.querySelector("#type-account");
    const addClientButton = document.querySelector("#addClient");
    
    addClientButton.addEventListener("click", () => {
        const name = nameInput.value;
        const bank = bankInput.value;
        const agency = agencyInput.value;
        const account = accountInput.value;
        const typeAccount = typeAccountInput.value;
    });
});



// Question 03.

// const user = [
//     { email: "teste@gmail.com", password: "", cookies: {}}
// ];

// if (user.cookies.agreed) {
//     CollectData(user);
// } else {
//     CollectData(user);
// }