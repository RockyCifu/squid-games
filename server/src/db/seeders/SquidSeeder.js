import { Factory } from "../../../test/factories/Factory.js";
import { Squid } from "../../models/index.js";
import "../../../test/factories/factories.js";

class SquidSeeder {
  static async seed() {
    try {
      const factory = new Factory(Squid);
      await factory.createMany(3);
      console.log("Seeding Successful");
    } catch (error) {
      console.log(`Seeding Error: ${error}`);
    }
  }
}

export { SquidSeeder };
