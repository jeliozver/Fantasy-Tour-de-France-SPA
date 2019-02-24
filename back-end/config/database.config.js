const MONGOOSE = require('mongoose');

MONGOOSE.Promise = global.Promise;

module.exports = (config) => {
  MONGOOSE.connect(config.connectionString);

  const DB = MONGOOSE.connection;

  DB.once('open', (err) => {
    if (err) {
      throw err;
    }

    console.log('MongoDB is ready!');
  });

  // Seed Imports
  require('../models/User');
  require('../models/Role').init();
  require('../models/Stage').init();
  require('../models/Team');
  require('../models/Rider').init();
  require('../models/FantasyTeam');
  require('../models/Status').init();

  // Normal Imports
  // require('../models/User');
  // require('../models/Role');
  // require('../models/Stage');
  // require('../models/Team');
  // require('../models/Rider');
  // require('../models/FantasyTeam');
  // require('../models/Status');
};