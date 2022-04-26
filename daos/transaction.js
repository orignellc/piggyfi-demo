import money from "~/helpers/money";

export default class Transaction {
  static newOrder(input) {
    return transform();
  }

  static getById(id) {
    return transform();
  }

  fundSent(transactionId) {
    return transform();
  }
}

function transform() {
  const result = {
    _id: 2353223,
    amount: 1000,
    fee: 10,
    rate: 590,
    vendor: {
      bankDetails: {
        name: "Abosede Mayungbe",
        bankAccount: "0126864523",
        bankName: "Kuda Bank",
      },
    },
  };

  result.amountToSend = (result.amount + result.fee) * result.rate;
  result.amountToSendFormatted = money.format(result.amountToSend);
  return result;
}
