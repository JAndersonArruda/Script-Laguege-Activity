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
    const listClientTbody = document.querySelector("#list-client");
    const nameInput = document.querySelector("#name");
    const bankInput = document.querySelector("#bank");
    const agencyInput = document.querySelector("#agency");
    const accountInput = document.querySelector("#account");
    const typeAccountInput = document.querySelector("#type-account");
    const addClientButton = document.querySelector("#addClient");
    
    const arrayAccount = [];

    addClientButton.addEventListener("click", () => {
        const name = nameInput.value;
        const bank = bankInput.value;
        const agency = agencyInput.value;
        const account = accountInput.value;
        const typeAccount = typeAccountInput.value;
        
        const newAccount = {
            name: name,
            bank: bank,
            agency: agency,
            account: account,
            type: typeAccount
        };

        arrayAccount.push(newAccount);

        listClientTbody.replaceChildren();

        arrayAccount.forEach((event) => {
            const newCleint = document.createElement("tr");
            const clientName = document.createElement("td");
            const clientBank = document.createElement("td");
            const clientAgency = document.createElement("td");
            const clientAccount = document.createElement("td");
            const clientType = document.createElement("td");
            const clientTransation = document.createElement("td");

            clientName.textContent = event.name;
            clientBank.textContent = event.bank;
            clientAgency.textContent = event.agency;
            clientAccount.textContent = event.account;
            clientType.textContent = event.type;
            clientTransation.textContent = "---";

            newCleint.appendChild(clientName);
            newCleint.appendChild(clientBank);
            newCleint.appendChild(clientAgency);
            newCleint.appendChild(clientAccount);
            newCleint.appendChild(clientType);
            newCleint.appendChild(clientTransation);

            listClientTbody.appendChild(newCleint);

            nameInput.value = "";
            bankInput.value = "";
            agencyInput.value = "";
            accountInput.value = "";
            typeAccountInput.value = "---";
        });
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