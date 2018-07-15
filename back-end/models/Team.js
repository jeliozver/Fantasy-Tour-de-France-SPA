const MONGOOSE = require('mongoose');
const AUTO_INCREMENT = require('mongoose-sequence')(MONGOOSE);

const STRING = MONGOOSE.Schema.Types.String;
const NUMBER = MONGOOSE.Schema.Types.Number;
const OBJECT_ID = MONGOOSE.Schema.Types.ObjectId;

const TEAM_SCHEMA = MONGOOSE.Schema({
    teamNumber: { type: NUMBER },
    name: { type: STRING, required: true },
    country: { type: STRING, required: true },
    jersey: { type: STRING, required: true },
    riders: [{ type: OBJECT_ID, ref: 'Rider' }]
});

TEAM_SCHEMA.plugin(AUTO_INCREMENT, { inc_field: 'teamNumber' });

const TEAM = MONGOOSE.model('Team', TEAM_SCHEMA);

module.exports = TEAM;