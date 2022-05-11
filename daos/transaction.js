import money from "~/helpers/money";
import Dao from "~/daos/dao";

export default class Transaction extends Dao {
  static newOrder(input) {
    return new Promise(() => transform());
  }

  static getById(id) {
    return new Promise(() => transform());
  }

  fundSent(transactionId) {
    return new Promise(() => transform());
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
