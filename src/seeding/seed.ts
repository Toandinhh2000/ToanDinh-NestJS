import dbConfig from "../config/db.Config";
import  { DataSource, DataSourceOptions } from "typeorm";
import { runSeeder, SeederOptions } from "typeorm-extension";
import { PropertyFeatureFactory } from "./propertyFeature.factory";
import {UserFactory} from "./user.factory";
import { PropertyFeatureFactory } from "./propertyFeature.factory";
import { MainSeeder} from "./main.seeder";

const options: DataSourceOptions & SeederOptions = {
  ...dbConfig,
  entities: ["src/entities/*.entity{.ts,.js}"],
  migrations: ["src/migrations/*.ts"],
  subscribers: ["src/subscribers/*.ts"],
  factories: [PropertyFeatureFactory, UserFactory],
  seeds: [MainSeeder],
};