import axios from "axios";

export default class Vendor {
  static async all(params) {
    const { data } = await axios.get(
      "https://celo-demo.herokuapp.com/api/vendors/available",
      { params }
    );

    return transform(data);
  }
}

function transform(vendor) {
  return {
    _id: vendor.id,
    name: vendor.amount,
    rates: vendor.rates,
  };
}
