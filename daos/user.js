import money from "~/helpers/money";
import Dao from "~/daos/dao";

export default class User extends Dao {
  getTestCustomers() {
    return [
      {
        name: "John Doe",
        password: "Password",
        email: "john@mailinator.com",
        countryCode: "NG",
      },
      {
        name: "Jane Doe",
        password: "Password",
        email: "jane@mailinator.com",
        countryCode: "KE",
      },
    ];
  }

  async login({ identifier, password }) {
    const { data } = await this.post("users/login", {
      identifier,
      password,
    });

    return data.data;
  }

  async getByID(id) {
    return getByIDorEmail(id);
  }

  async getByEmail(email) {
    return getByIDorEmail(email);
  }
}

async function getByIDorEmail(value) {
  const { data } = await this.get(`users/${value}`);

  return transform(data.data);
}

function transform(user) {
  return {
    _id: user._id,
    name: user.name,
    countryCode: user.countryCode,
    balance: money.format(0),
  };
}
