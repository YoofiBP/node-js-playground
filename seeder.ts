import faker from "faker";
import { Seeder } from "mysql-db-seed";

const seed = new Seeder(10, "localhost", "default", "secret", "default");

//TODO: Create seeders

(async () => {
  await seed.seed(30, "users", {
    institution_id: 1,
    first_name: "Joseph",
    last_name: "Brown-Pobee",
    phone_number: "+233248506282",
    country: "GH",
    locale: "en",
    api_token: "38rujf",
  });
  seed.exit();
  process.exit();
})();
