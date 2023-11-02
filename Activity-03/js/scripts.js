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
            dateTimeInput.value = "";
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
    const balanceAccountInput = document.querySelector("#balance-account");
    const addClientButton = document.querySelector("#addClient");
    
    const arrayAccount = [];

    addClientButton.addEventListener("click", () => {
        const name = nameInput.value;
        const bank = bankInput.value;
        const agency = agencyInput.value;
        const account = accountInput.value;
        const typeAccount = typeAccountInput.value;
        const balance = parseFloat(balanceAccountInput.value);
        
        const newAccount = {
            name: name,
            bank: bank,
            agency: agency,
            account: account,
            type: typeAccount,
            balance: balance
        };

        arrayAccount.push(newAccount);

        listClientTbody.replaceChildren();

        arrayAccount.forEach((client) => {
            const newCleint = document.createElement("tr");
            const clientName = document.createElement("td");
            const clientBank = document.createElement("td");
            const clientAgency = document.createElement("td");
            const clientAccount = document.createElement("td");
            const clientType = document.createElement("td");
            const clientTransation = document.createElement("td");

            clientName.textContent = client.name;
            clientBank.textContent = client.bank;
            clientAgency.textContent = client.agency;
            clientAccount.textContent = client.account;
            clientType.textContent = client.type;
            clientTransation.textContent = client.balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

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
            balanceAccountInput.value = "";
        });
    });
});


// Worked Class
/*
document.addEventListener("DOMContentLoaded", () => {
    const listClientTbody = document.querySelector("#list-client");
    const nameInput = document.querySelector("#name");
    const bankInput = document.querySelector("#bank");
    const agencyInput = document.querySelector("#agency");
    const accountInput = document.querySelector("#account");
    const typeAccountInput = document.querySelector("#type-account");
    const balanceAccountInput = document.querySelector("#balance-account");
    const addClientButton = document.querySelector("#addClient");
   
    class ClientBank {
        constructor(name, document, balance) {
            this.name = name;
            this.document = document;
            this.balance = balance;
        }

        hithdraw() {
            if (this.balance >= 100) {
                this.balance -= 100;
                return this.balance;
            }
            return "Saldo insuficiente";
        }

        deposit() {
            this.balance += 100;
            return this.balance;
        }
    }

    addClientButton.addEventListener("click", () => {
        const name = nameInput.value;
        const bank = bankInput.value;
        const agency = agencyInput.value;
        const account = accountInput.value;
        const typeAccount = typeAccountInput.value;
        const balance = parseFloat(balanceAccountInput.value);

        const newDocumentCleint = {
            bank: bank,
            agency: agency,
            account: account,
            type: typeAccount
        };
        
        const client = new ClientBank(name, newDocumentCleint, balance);

        listClientTbody.replaceChildren();

        const newClient = document.createElement("tr");
        const clientName = document.createElement("td");
        const clientBank = document.createElement("td");
        const clientAgency = document.createElement("td");
        const clientAccount = document.createElement("td");
        const clientType = document.createElement("td");
        const clientTransation = document.createElement("td");

        clientName.textContent = client.name;
        clientBank.textContent = client.document.bank;
        clientAgency.textContent = client.document.agency;
        clientAccount.textContent = client.document.account;
        clientType.textContent = client.document.type;
        clientTransation.textContent = client.balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        newClient.appendChild(clientName);
        newClient.appendChild(clientBank);
        newClient.appendChild(clientAgency);
        newClient.appendChild(clientAccount);
        newClient.appendChild(clientType);
        newClient.appendChild(clientTransation);

        listClientTbody.appendChild(newClient);

        nameInput.value = "";
        bankInput.value = "";
        agencyInput.value = "";
        accountInput.value = "";
        typeAccountInput.value = "---";
        balanceAccountInput.value = "";
    });
});
*/


// Question 03.

document.addEventListener("DOMContentLoaded", () => {});
