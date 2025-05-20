export default () => ({
  database: {
    port: process.env.DB_PORT || 27017,
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'admin',
    dbName: process.env.DB_NAME,
  },
  jwtSecret: process.env.JWT_SECRET,
  accessTokenExp: process.env.ACCESS_EXP || 100000,
  refreshTokenExp: process.env.REFRESH_EXP || 1000000,
});
