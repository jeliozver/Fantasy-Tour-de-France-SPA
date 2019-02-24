const MONGOOSE = require('mongoose');

const STRING = MONGOOSE.Schema.Types.String;
const BOOLEAN = MONGOOSE.Schema.Types.Boolean;

const STATUS_SCHEMA = MONGOOSE.Schema({
  name: { type: STRING },
  status: { type: BOOLEAN, default: false }
});


const STATUS = MONGOOSE.model('Status', STATUS_SCHEMA);

module.exports = STATUS;

module.exports.init = () => {
  STATUS.findOne({ name: 'Transfers' }).then((status) => {
    if (!status) {
      STATUS.create({ name: 'Transfers' });
    }
  });
};