import { Faker } from "@faker-js/faker";
import {User} from "src/entities/user.entity";
import { setSeederFactory } from "typeorm-extension";


export const userFactory = setSeederFactory(User, (faker: Faker) => {
  const user = new User();
  user.firstName = faker.person.firstName();
  user.lastName = faker.person.lastName();
  user.email = faker.internet.email();
  user.avatarUrl = faker.image.avatar();

return user;
});