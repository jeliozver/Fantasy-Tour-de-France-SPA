const MONGOOSE = require('mongoose');

const STRING = MONGOOSE.Schema.Types.String;
const NUMBER = MONGOOSE.Schema.Types.Number;
const OBJECT_ID = MONGOOSE.Schema.Types.ObjectId;

const FANTASY_TEAM_SCHEMA = MONGOOSE.Schema({
    name: { type: STRING, required: true },
    creator: { type: OBJECT_ID, ref: 'User' },
    balance: { type: NUMBER, default: 180 },
    riders: [{ type: OBJECT_ID, ref: 'Rider' }],
    points: { type: NUMBER, default: 0 }
});

const FANTASY_TEAM = MONGOOSE.model('FantasyTeam', FANTASY_TEAM_SCHEMA);

module.exports = FANTASY_TEAM;