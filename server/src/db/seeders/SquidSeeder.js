import { Factory } from "../../../test/factories/Factory.js";
import { Squid } from "../../models/index.js";
import "../../../test/factories/factories.js";

class SquidSeeder {
  static async seed() {
    try {
      const factory = new Factory(Squid);
      await factory.createMany(12);
      // eslint-disable-next-line no-console
      console.log("Seeding Successful");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`Seeding Error: ${error}`);
    }
  }
}

export { SquidSeeder };
