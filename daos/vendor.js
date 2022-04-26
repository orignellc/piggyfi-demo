export default class Vendor {
  static all() {
    return new Promise((resolve) => {
      resolve([
        {
          _id: 2314234,
          name: "Emmanuel",
          completedTrades: 100,
          rating: "4/20",
          rate: 590,
        },
      ]);
    });
  }
}
