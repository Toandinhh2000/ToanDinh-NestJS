import { faker } from '@faker-js/faker';
import { User } from 'src/entities/user.entity';
import { setSeederFactory } from 'typeorm-extension';

export const PropertyFactory = setSeederFactory(Property, (faker) => {
  const user = new User();
 const property = new Property();
 property.name = faker.location.street();

  return user;
});