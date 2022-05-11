import Dao from "~/daos/dao";

export default class Vendor extends Dao {
  static async all(params) {
    const { data } = await this.get("vendors/available", { params });

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
