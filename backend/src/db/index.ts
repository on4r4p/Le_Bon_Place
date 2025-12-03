import { DataSource } from "typeorm";

export default new DataSource({
  type: "sqlite",
  database: "src/db/lebonplace.sqlite",
  entities: ["src/entities/*.ts"],
  synchronize: true,
  logging: true,
});
