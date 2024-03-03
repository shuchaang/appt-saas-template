export default {
  database: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'appt',
  },
  server: {
    port: 3000,
  },
  jwtSecret: 'your_jwt_secret_key',
};
