
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(4000, () => {
    console.log('%s listening at 4000'); // eslint-disable-line no-console
  });
});