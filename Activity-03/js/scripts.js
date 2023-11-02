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
    const clientTable = document.querySelector("#list-client");
    const clientName = document.querySelector("#name");
    const clientBank = document.querySelector("#bank");
    const clientAgency = document.querySelector("#agency");
    const clientAccount = document.querySelector("#account");
    const clientType = document.querySelector("#type-account");
    const clientWithdraw = document.querySelector("#balance-account");
    const btAddClient = document.querySelector("#addClient");

    class ClientBank {
        constructor(name, document, balance) {
            this.name = name;
            this.document = document;
            this.balance = balance;
        }

        deposit() {
            this.balance += 100;
        }

        withdraw() {
            this.balance -= 100;
        }
    }

    
    btAddClient.addEventListener("click", () =>  {
        if (clientName.value && clientBank.value && clientAgency.value && clientAccount.value && clientType.value && clientWithdraw.value) {
            const name  = clientName.value;
            const bank = clientBank.value;
            const agency = clientAgency.value;
            const account = clientAccount.value;
            const typeAccount = clientType.value;
            const balance = parseFloat(clientWithdraw.value);

            const objectDocument = {
                bank: bank,
                agency: agency,
                account: account,
                type: typeAccount
            };

            const newCleint = new ClientBank(name, objectDocument, balance);

            const client = document.createElement("tr");
            const nameClient = document.createElement("td");
            const bankClient = document.createElement("td");
            const agencyClient = document.createElement("td");
            const accountClient = document.createElement("td");
            const typeClient = document.createElement("td");
            const withdrawClient = document.createElement("td");
            const actionClient = document.createElement("td");
            const btDeposit = document.createElement("button")
            const btWithdraw = document.createElement("button")

            nameClient.textContent = newCleint.name;
            bankClient.textContent = newCleint.document.bank;
            agencyClient.textContent = newCleint.document.agency;
            accountClient.textContent = newCleint.document.account;
            typeClient.textContent = newCleint.document.type;
            withdrawClient.textContent = newCleint.balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            btDeposit.textContent = "Deposito";
            btWithdraw.textContent = "Sacar";

            actionClient.appendChild(btDeposit);
            actionClient.appendChild(btWithdraw);
            
            client.appendChild(nameClient);
            client.appendChild(bankClient);
            client.appendChild(agencyClient);
            client.appendChild(accountClient);
            client.appendChild(typeClient);
            client.appendChild(withdrawClient);
            client.appendChild(actionClient);

            clientTable.appendChild(client);

            clientName.value = "";
            clientBank.value = "";
            clientAgency.value = "";
            clientAccount.value = "";
            clientType.value = "---";
            clientWithdraw.value = "";
        }
    });
});



// Question 03.

document.addEventListener("DOMContentLoaded", () => {});
