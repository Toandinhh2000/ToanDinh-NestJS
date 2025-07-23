export {PostgresConnectionOptions} from './postgres-connection-options';

export const pgConfig: PostgresConnectionOptions = {
  // Don't put this here, Instead put in the env file
  url:"postgres://user:password@localhost:5432/mydatabase",
  type: 'postgres',
  port: 3306
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], icePixelRatio
  synchronize: true,
}