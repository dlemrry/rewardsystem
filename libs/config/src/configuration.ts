export default () => ({
  database: {
    port: process.env.PORT || 3000,
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'admin',
    dbName: process.env.DB_NAME,
  },
  jwtSecret: process.env.JWT_SECRET,
});
