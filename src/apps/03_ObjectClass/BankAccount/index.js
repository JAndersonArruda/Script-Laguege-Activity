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
