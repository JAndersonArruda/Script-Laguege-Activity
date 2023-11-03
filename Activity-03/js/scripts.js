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
    
    const arrayClient = [];

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
            arrayClient.push(newCleint)

            clientTable.replaceChildren();
            arrayClient.forEach((client) => {
                const clientRow = document.createElement("tr");
                const nameClient = document.createElement("td");
                const bankClient = document.createElement("td");
                const agencyClient = document.createElement("td");
                const accountClient = document.createElement("td");
                const typeClient = document.createElement("td");
                const withdrawClient = document.createElement("td");
                const actionClient = document.createElement("td");
                const btDeposit = document.createElement("button")
                const btWithdraw = document.createElement("button")

                nameClient.textContent = client.name;
                bankClient.textContent = client.document.bank;
                agencyClient.textContent = client.document.agency;
                accountClient.textContent = client.document.account;
                typeClient.textContent = client.document.type;
                withdrawClient.textContent = client.balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                btDeposit.textContent = "Deposito";
                btWithdraw.textContent = "Sacar";

                actionClient.appendChild(btDeposit);
                actionClient.appendChild(btWithdraw);

                clientRow.appendChild(nameClient);
                clientRow.appendChild(bankClient);
                clientRow.appendChild(agencyClient);
                clientRow.appendChild(accountClient);
                clientRow.appendChild(typeClient);
                clientRow.appendChild(withdrawClient);
                clientRow.appendChild(actionClient);
                
                clientTable.appendChild(clientRow);
                
                btDeposit.addEventListener("click", () => {
                    client.deposit();
                    withdrawClient.textContent = client.balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                });

                btWithdraw.addEventListener("click", () => {
                    client.withdraw();
                    withdrawClient.textContent = client.balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                });

                clientName.value = "";
                clientBank.value = "";
                clientAgency.value = "";
                clientAccount.value = "";
                clientType.value = "---";
                clientWithdraw.value = "";
            });
        }
    });
});



// Question 03.

document.addEventListener("DOMContentLoaded", () => {
    const transactionTable = document.querySelector("#list-transactions");
    const discriptionTransaction = document.querySelector("#discription");
    const valueTransaction = document.querySelector("#value-transaction");
    const btAddTransactions = document.querySelector("#addTransaction");

    class Transaction {
        constructor(agency = "9836-0", account = "0006453-1", typeAccount = "corrente", discription = null, typeTransaction = null, value = null, balance = 500) {
            this.agency = agency;
            this.account = account;
            this.typeAccount = typeAccount;
            this.discription = discription;
            this.typeTransaction = typeTransaction;
            this.value = value;
            this.balance = balance;
        }

        updateBalance() {
            this.balance += this.value;
            return this.balance;
        }

        statusTransaction() {
            if (this.value > 0) {
                this.typeTransaction = "credit";
            } else {
                this.typeTransaction = "debit";
            }
            return this.typeTransaction;
        }
        
    }

    const arrayTransaction = [];

    const newTransaction = new Transaction();
    arrayTransaction.push(newTransaction);

    btAddTransactions.addEventListener("click", () => {
        if (discriptionTransaction.value && valueTransaction.value) {
            const discription = discriptionTransaction.value;
            const value = parseFloat(valueTransaction.value);

            arrayTransaction.forEach((transaction) => {
                transaction.discription = discription;
                transaction.value = value;

                transaction.updateBalance();
                transaction.statusTransaction();

                const transactionRow = document.createElement("tr");
                const transactionAgency = document.createElement("td");
                const transactionAccount = document.createElement("td");
                const transactionTypeAccount = document.createElement("td");
                const transactionDiscription = document.createElement("td");
                const transactionType = document.createElement("td");
                const transactionValue = document.createElement("td");
                const transactionBalance = document.createElement("td");

                transactionAgency.textContent = transaction.agency;
                transactionAccount.textContent = transaction.account;
                transactionTypeAccount.textContent = transaction.typeAccount;
                transactionDiscription.textContent = transaction.discription;
                transactionType.textContent = transaction.typeTransaction;

                if (transaction.typeTransaction === "credit") {
                    transactionValue.classList.add("credit");
                } else if (transaction.typeTransaction === "debit") {
                    transactionValue.classList.add("debit");
                }

                const formattedValue = (transaction.value < 0 ? -(transaction.value) : transaction.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                transactionValue.textContent = formattedValue;
                transactionBalance.textContent = transaction.balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                
                transactionRow.appendChild(transactionAgency);
                transactionRow.appendChild(transactionAccount);
                transactionRow.appendChild(transactionTypeAccount);
                transactionRow.appendChild(transactionDiscription);
                transactionRow.appendChild(transactionType);
                transactionRow.appendChild(transactionValue);
                transactionRow.appendChild(transactionBalance);

                transactionTable.appendChild(transactionRow);

                discriptionTransaction.value = "";
                valueTransaction.value = "";
            });
        }
    });
});
