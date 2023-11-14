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
