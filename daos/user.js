import axios from "axios";
import money from "~/helpers/money";

export default class User {
  static async all() {
    const { data } = await axios.get(
      "https://celo-demo.herokuapp.com/api/users"
    );

    return data.data;
  }

  static async getByID(id) {
    return getByIDorEmail(id);
  }

  static async getByEmail(email) {
    return getByIDorEmail(email);
  }
}

async function getByIDorEmail(value) {
  const { data } = await axios.get(
    `https://celo-demo.herokuapp.com/api/users/${value}`
  );

  return transform(data.data);
}
function transform(user) {
  return {
    _id: user._id,
    name: user.name,
    balance: money.format(0),
  };
}
