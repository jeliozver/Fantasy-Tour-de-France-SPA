const MONGOOSE = require('mongoose');

const TEAM = MONGOOSE.model('Team');
const STRING = MONGOOSE.Schema.Types.String;
const NUMBER = MONGOOSE.Schema.Types.Number;
const OBJECT_ID = MONGOOSE.Schema.Types.ObjectId;

const RIDER_SCHEMA = MONGOOSE.Schema({
  name: { type: STRING, required: true },
  country: { type: STRING, required: true },
  age: { type: NUMBER, required: true },
  riderType: { type: STRING, required: true },
  image: { type: STRING, required: true },
  cost: { type: NUMBER, required: true },
  team: { type: OBJECT_ID, ref: 'Team' },
});

const RIDER = MONGOOSE.model('Rider', RIDER_SCHEMA);

module.exports = RIDER;

module.exports.init = () => {
  TEAM.findOne({ name: 'AG2R La Mondiale' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'AG2R La Mondiale',
        country: 'France',
        jersey: 'https://i.imgur.com/rnL7Tbb.jpg'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Mathias Frank',
            country: 'Switzerland',
            age: 31,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/VFnQmVs.jpg',
            cost: 14,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Oliver Naesen',
            country: 'Belgium',
            age: 27,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/e7V7HZt.jpg',
            cost: 15.2,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Alexis Vuillermoz',
            country: 'France',
            age: 30,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/hbaN7bM.jpg',
            cost: 16.2,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Tony Gallopin',
            country: 'France',
            age: 30,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/XAq9qE1.jpg',
            cost: 18.1,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Romain Bardet',
            country: 'France',
            age: 27,
            riderType: 'Climber',
            image: 'https://i.imgur.com/r3G3a18.jpg',
            cost: 26.2,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Pierre Latour',
            country: 'France',
            age: 24,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/O8UbOZt.jpg',
            cost: 26.2,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Axel Domont',
            country: 'France',
            age: 27,
            riderType: 'Climber',
            image: 'https://i.imgur.com/YMHDGiY.jpg',
            cost: 4.1,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Silvan Dillier',
            country: 'Switzerland',
            age: 27,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/ttGw0qf.jpg',
            cost: 21.3,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'Astana Pro Team' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'Astana Pro Team',
        country: 'Kazakhstan',
        jersey: 'https://i.imgur.com/bWXvzLa.jpg'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: ' Jakob Fuglsang',
            country: 'Denmark',
            age: 33,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/fOkdqNo.jpg',
            cost: 21.1,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Jesper Hansen',
            country: 'Denmark',
            age: 27,
            riderType: 'Climber',
            image: 'https://i.imgur.com/IcfatmH.jpg',
            cost: 15,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Magnus Cort Nielsen',
            country: 'Denmark',
            age: 25,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/E4SNl2y.jpg',
            cost: 20.4,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Michael Valgren',
            country: 'Denmark',
            age: 26,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/DxN6AgA.jpg',
            cost: 13.2,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Omar Fraile',
            country: 'Spain',
            age: 27,
            riderType: 'Climber',
            image: 'https://i.imgur.com/IMtaqWC.jpg',
            cost: 15.8,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Luis Leon Sanchez',
            country: 'Spain',
            age: 34,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/tTpXANS.jpg',
            cost: 17.1,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Tanel Kangert',
            country: 'Estonia',
            age: 31,
            riderType: 'Climber',
            image: 'https://i.imgur.com/FSHBulG.jpg',
            cost: 8,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Dmitriy Gruzdev',
            country: 'Kazakhstan',
            age: 32,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/eKLdDcz.jpg',
            cost: 3.8,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'Bahrain Merida' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'Bahrain Merida',
        country: 'Bahrain',
        jersey: 'https://i.imgur.com/SQVAmQd.jpg'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Kristijan Koren',
            country: 'Slovenia',
            age: 31,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/eFnI2cQ.jpg',
            cost: 5.8,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Vincenzo Nibali',
            country: 'Italy',
            age: 33,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/65xL0vP.jpg',
            cost: 30.1,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Domenico Pozzovivo',
            country: 'Italy',
            age: 35,
            riderType: 'Climber',
            image: 'https://i.imgur.com/pYVOiy7.jpg',
            cost: 25.9,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Ion Izagirre',
            country: 'Spain',
            age: 29,
            riderType: 'Climber',
            image: 'https://i.imgur.com/hgGCMHU.jpg',
            cost: 21.7,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Gorka Izagirre',
            country: 'Spain',
            age: 30,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/UYqWwFa.jpg',
            cost: 23.4,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Sonny Colbrelli',
            country: 'Italy',
            age: 28,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/2oDEIRz.jpg',
            cost: 22.9,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Franco Pellizotti',
            country: 'Italy',
            age: 40,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/TUVxm15.jpg',
            cost: 7.1,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Heinrich Haussler',
            country: 'Australia',
            age: 34,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/4xulPiP.jpg',
            cost: 10.1,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'BMC' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'BMC',
        country: 'United States',
        jersey: 'https://i.imgur.com/c71qaPD.jpg'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Richie Porte',
            country: 'Australia',
            age: 33,
            riderType: 'Climber',
            image: 'https://i.imgur.com/7JsmsoT.jpg',
            cost: 28.6,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Tejay van Garderen',
            country: 'United States',
            age: 29,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/1ilJ85k.jpg',
            cost: 19.4,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Damiano Caruso',
            country: 'Italy',
            age: 30,
            riderType: 'Climber',
            image: 'https://i.imgur.com/ZCmzK6f.jpg',
            cost: 17.1,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Greg Van Avermaet',
            country: 'Belgium',
            age: 33,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/TriU8s0.jpg',
            cost: 20.1,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Patrick Bevin',
            country: 'New Zealand',
            age: 27,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/41gXt0G.jpg',
            cost: 13.7,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Simon Gerrans',
            country: 'Australia',
            age: 38,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/YNS0BEh.jpg',
            cost: 8.4,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Stefan Kung',
            country: 'Switzerland',
            age: 24,
            riderType: 'Time-Trialist',
            image: 'https://i.imgur.com/3x1H0yB.jpg',
            cost: 16.4,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Michael Schar',
            country: 'Switzerland',
            age: 31,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/c9EU41u.jpg',
            cost: 7.5,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'Bora-Hansgrohe' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'Bora-Hansgrohe',
        country: 'Germany',
        jersey: 'https://i.imgur.com/v3EZPqI.jpg'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Maciej Bodnar',
            country: 'Poland',
            age: 33,
            riderType: 'Time-Trialist',
            image: 'https://i.imgur.com/6cqQXaL.jpg',
            cost: 13.4,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Marcus Burghardt',
            country: 'Germany',
            age: 34,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/AJ7XB9e.jpg',
            cost: 10.2,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Rafal Majka',
            country: 'Poland',
            age: 28,
            riderType: 'Climber',
            image: 'https://i.imgur.com/kxhmh7P.jpg',
            cost: 23.2,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Gregor Muhlberger',
            country: 'Austria',
            age: 24,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/JGGgTL7.jpg',
            cost: 17.2,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Daniel Oss',
            country: 'Italy',
            age: 31,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/FO4xAVe.jpg',
            cost: 15.1,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Pawel Poljanski',
            country: 'Poland',
            age: 28,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/SCTt6Ek.jpg',
            cost: 10.1,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Peter Sagan',
            country: 'Slovakia',
            age: 28,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/lHbmmyF.jpg',
            cost: 38,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Lukas Postlberger',
            country: 'Austria',
            age: 26,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/H7vGPsV.jpg',
            cost: 8.9,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'Cofidis' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'Cofidis',
        country: 'France',
        jersey: 'https://i.imgur.com/d6j1iHb.jpg'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Jesus Herrada',
            country: 'Spain',
            age: 27,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/poLsBVW.jpg',
            cost: 8.8,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Christophe Laporte',
            country: 'France',
            age: 25,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/kcXs8zq.jpg',
            cost: 20,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Dimitri Claeys',
            country: 'Belgium',
            age: 31,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/QpnCzXI.jpg',
            cost: 17.2,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Nicolas Edet',
            country: 'France',
            age: 30,
            riderType: 'Climber',
            image: 'https://i.imgur.com/XexgHZn.jpg',
            cost: 19.2,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Daniel Navarro',
            country: 'Spain',
            age: 34,
            riderType: 'Climber',
            image: 'https://i.imgur.com/nX6ZdpW.jpg',
            cost: 21.5,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Anthony Perez',
            country: 'France',
            age: 27,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/7xLsYCC.jpg',
            cost: 14.1,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Julien Simon',
            country: 'France',
            age: 32,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/dqfXdng.jpg',
            cost: 15.8,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Anthony Turgis',
            country: 'France',
            age: 24,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/8zyhlp1.jpg',
            cost: 9.5,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'Team Dimension Data' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'Team Dimension Data',
        country: 'South Africa',
        jersey: 'https://i.imgur.com/Nuu1Cqe.jpg'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Mark Cavendish',
            country: 'Great Britain',
            age: 33,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/m6DT1ao.jpg',
            cost: 13.6,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Edvald Boasson Hagen',
            country: 'Norway',
            age: 31,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/KRYa1zV.jpg',
            cost: 21.2,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Tom-Jelte Slagter',
            country: 'Netherlands',
            age: 28,
            riderType: 'Climber',
            image: 'https://i.imgur.com/0EaJuK5.jpg',
            cost: 16.4,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Mark Renshaw',
            country: 'Australia',
            age: 35,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/yH29ADk.jpg',
            cost: 12.4,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Reinardt Janse van Rensburg',
            country: 'South Africa',
            age: 29,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/fQIIbSc.jpg',
            cost: 9.8,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Serge Pauwels',
            country: 'Belgium',
            age: 34,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/wqytlrt.jpg',
            cost: 10.5,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Julien Vermote',
            country: 'Belgium',
            age: 28,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/GGYGfFO.jpg',
            cost: 11,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Jay Robert Thomson',
            country: 'South Africa',
            age: 32,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/oRjmoen.jpg',
            cost: 8.1,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'Direct Energie' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'Direct Energie',
        country: 'France',
        jersey: 'https://i.imgur.com/5m6rWfs.jpg'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Lilian Calmejane',
            country: 'France',
            age: 25,
            riderType: 'Climber',
            image: 'https://i.imgur.com/i4UnlKN.jpg',
            cost: 16.8,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Rein Taaramae',
            country: 'Estonia',
            age: 31,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/02s52Uu.jpg',
            cost: 7,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Sylvain Chavanel',
            country: 'France',
            age: 38,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/oJURF8R.jpg',
            cost: 13.8,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Jerome Cousin',
            country: 'France',
            age: 29,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/xYnOvSI.jpg',
            cost: 14.9,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Romain Sicard',
            country: 'France',
            age: 30,
            riderType: 'Climber',
            image: 'https://i.imgur.com/Kq1So4A.jpg',
            cost: 12.5,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Damien Gaudin',
            country: 'France',
            age: 31,
            riderType: 'Time-Trialist',
            image: 'https://i.imgur.com/i7Ue9hf.jpg',
            cost: 6.6,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Fabien Grellier',
            country: 'France',
            age: 23,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/4Q5QMAW.jpg',
            cost: 13.8,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Thomas Boudat',
            country: 'France',
            age: 24,
            riderType: 'Domestique',
            image: 'https://imgur.com/2rp8ErD.jpg',
            cost: 12.4,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'Education First-Drapac' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'Education First-Drapac',
        country: 'United States',
        jersey: 'https://i.imgur.com/XOJWJcy.jpg'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Rigoberto Uran',
            country: 'Colombia',
            age: 31,
            riderType: 'Climber',
            image: 'https://i.imgur.com/2sMgpYl.jpg',
            cost: 27.4,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Pierre Rolland',
            country: 'France',
            age: 31,
            riderType: 'Climber',
            image: 'https://i.imgur.com/fuMJAPk.jpg',
            cost: 10.7,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Taylor Phinney',
            country: 'United States',
            age: 28,
            riderType: 'Time-Trialist',
            image: 'https://i.imgur.com/B9bid9G.jpg',
            cost: 9.1,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Sep Vanmarcke',
            country: 'Belgium',
            age: 29,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/C9uziYj.jpg',
            cost: 15.3,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Daniel Felipe Martinez',
            country: 'Colombia',
            age: 22,
            riderType: 'Climber',
            image: 'https://i.imgur.com/7pa8qZi.jpg',
            cost: 23.7,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Simon Clarke',
            country: 'Australia',
            age: 31,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/0ZqTCUW.jpg',
            cost: 8.8,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Thomas Scully',
            country: 'Australia',
            age: 28,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/E0VfVsK.jpg',
            cost: 4.7,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Lawson Craddock',
            country: 'United States',
            age: 26,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/zlmWLi8.jpg',
            cost: 12.2,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'Groupama-FDJ' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'Groupama-FDJ',
        country: 'France',
        jersey: 'https://i.imgur.com/JLGrQAG.jpg'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Arnaud Demare',
            country: 'France',
            age: 26,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/oquYdZc.jpg',
            cost: 28.7,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'David Gaudu',
            country: 'France',
            age: 21,
            riderType: 'Climber',
            image: 'https://i.imgur.com/22lYsdn.jpg',
            cost: 10.9,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Jacopo Guarnieri',
            country: 'Italy',
            age: 30,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/CcaNxsA.jpg',
            cost: 8.6,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Olivier Le Gac',
            country: 'France',
            age: 24,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/3v1RJMk.jpg',
            cost: 9.3,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Tobias Ludvigsson',
            country: 'Sweden',
            age: 27,
            riderType: 'Time-Trialist',
            image: 'https://i.imgur.com/52H8evA.jpg',
            cost: 8.1,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Rudy Molard',
            country: 'France',
            age: 28,
            riderType: 'Climber',
            image: 'https://i.imgur.com/xripAH8.jpg',
            cost: 13.2,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Ramon Sinkeldam',
            country: 'Netherlands',
            age: 29,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/gZMoaaj.jpg',
            cost: 8.8,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Arthur Vichot',
            country: 'France',
            age: 29,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/9VcDY2i.jpg',
            cost: 11.2,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'Fortuneo-Samsic' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'Fortuneo-Samsic',
        country: 'France',
        jersey: 'https://i.imgur.com/AIMQgZl.jpg'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Warren Barguil',
            country: 'France',
            age: 26,
            riderType: 'Climber',
            image: 'https://i.imgur.com/NWnaVbN.jpg',
            cost: 24.9,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Maxime Bouet',
            country: 'France',
            age: 31,
            riderType: 'Climber',
            image: 'https://i.imgur.com/ghPFZdS.jpg',
            cost: 8.6,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Romain Hardy',
            country: 'France',
            age: 29,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/p8rxNAi.jpg',
            cost: 10.9,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Amael Moinard',
            country: 'France',
            age: 36,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/i65NGx9.jpg',
            cost: 6.7,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Elie Gesbert',
            country: 'France',
            age: 22,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/bgF4vMd.jpg',
            cost: 14.4,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Kevin Ledanois',
            country: 'France',
            age: 24,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/Dw6U7o5.jpg',
            cost: 3,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Laurent Pichon',
            country: 'France',
            age: 31,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/gAIwkF5.jpg',
            cost: 7.5,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Florian Vachon',
            country: 'France',
            age: 33,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/lkQEMiv.jpg',
            cost: 6.4,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'Team LottoNL-Jumbo' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'Team LottoNL-Jumbo',
        country: 'Netherlands',
        jersey: 'https://i.imgur.com/62CLFSU.png'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Primoz Roglic',
            country: 'Slovenia',
            age: 28,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/tLxhjyj.jpg',
            cost: 30.1,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Steven Kruijswijk',
            country: 'Netherlands',
            age: 31,
            riderType: 'Climber',
            image: 'https://i.imgur.com/k5MblH8.jpg',
            cost: 17.5,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Paul Martens',
            country: 'Germany',
            age: 34,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/MfXRodp.jpg',
            cost: 6.5,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Timo Roosen',
            country: 'Netherlands',
            age: 25,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/YJkczoE.jpg',
            cost: 9.9,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Dylan Groenewegen',
            country: 'Netherlands',
            age: 25,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/UlYSrWc.jpg',
            cost: 24.2,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Amund Grondahl Jansen',
            country: 'Norway',
            age: 24,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/NzeHExt.jpg',
            cost: 7.7,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Robert Gesink',
            country: 'Netherlands',
            age: 32,
            riderType: 'Climber',
            image: 'https://i.imgur.com/TZ11j0B.jpg',
            cost: 15.7,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Antwan Tolhoek',
            country: 'Netherlands',
            age: 24,
            riderType: 'Climber',
            image: 'https://i.imgur.com/bKEp01Q.jpg',
            cost: 15.1,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'Lotto Soudal' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'Lotto Soudal',
        country: 'Belgium',
        jersey: 'https://i.imgur.com/nPt0CJQ.jpg'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Tiesj Benoot',
            country: 'Belgium',
            age: 24,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/7IHk0Ke.jpg',
            cost: 22.8,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Jasper de Buyst',
            country: 'Belgium',
            age: 24,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/OSQtB6w.jpg',
            cost: 6.1,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Thomas De Gendt',
            country: 'Belgium',
            age: 31,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/ovHh6OY.jpg',
            cost: 24.3,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Andre Greipel',
            country: 'Germany',
            age: 35,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/bzbdb4E.jpg',
            cost: 25.4,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Jens Keukeleire',
            country: 'Belgium',
            age: 29,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/xq4mt7p.jpg',
            cost: 10.5,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Jelle Vanendert',
            country: 'Belgium',
            age: 33,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/PmkTgid.jpg',
            cost: 8.5,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Tomasz Marczynski',
            country: 'Poland',
            age: 34,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/8TV0wGq.jpg',
            cost: 14.9,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Marcel Sieberg',
            country: 'Germany',
            age: 36,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/nqVEdQS.jpg',
            cost: 4.6,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'Mitchelton-Scott' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'Mitchelton-Scott',
        country: 'Australia',
        jersey: 'https://i.imgur.com/5Ja4Kta.jpg'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Jack Bauer',
            country: 'Australia',
            age: 33,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/CvVpdFV.jpg',
            cost: 12.8,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Luke Durbridge',
            country: 'Australia',
            age: 27,
            riderType: 'Time-Trialist',
            image: 'https://i.imgur.com/V6W3uuM.jpg',
            cost: 5.7,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Mathew Hayman',
            country: 'Australia',
            age: 40,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/4xMHuj3.jpg',
            cost: 5.7,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Michael Hepburn',
            country: 'Australia',
            age: 26,
            riderType: 'Time-Trialist',
            image: 'https://i.imgur.com/zwhnBQD.jpg',
            cost: 9.2,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Damien Howson',
            country: 'Australia',
            age: 25,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/ledkKd2.jpg',
            cost: 8.7,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Daryl Impey',
            country: 'South Africa',
            age: 33,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/soE4ps7.jpg',
            cost: 22,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Mikel Nieve',
            country: 'Spain',
            age: 33,
            riderType: 'Climber',
            image: 'https://i.imgur.com/FL9wWyk.jpg',
            cost: 15,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Adam Yates',
            country: 'Great Britain',
            age: 25,
            riderType: 'Climber',
            image: 'https://i.imgur.com/avcqAzA.jpg',
            cost: 27.5,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'Movistar' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'Movistar',
        country: 'Spain',
        jersey: 'https://i.imgur.com/vnioS9p.jpg'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Andrey Amador',
            country: 'Costa Rica',
            age: 31,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/TZ6c9pW.jpg',
            cost: 8.9,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Daniele Bennati',
            country: 'Italy',
            age: 37,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/CLOdJrd.jpg',
            cost: 9.6,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Imanol Erviti',
            country: 'Spain',
            age: 34,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/J9bmy2j.jpg',
            cost: 7.5,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Mikel Landa',
            country: 'Spain',
            age: 28,
            riderType: 'Climber',
            image: 'https://i.imgur.com/Jc7sze1.jpg',
            cost: 28,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Nairo Quintana',
            country: 'Colombia',
            age: 28,
            riderType: 'Climber',
            image: 'https://i.imgur.com/OagxMij.jpg',
            cost: 25.4,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Jose Joaquín Rojas',
            country: 'Spain',
            age: 33,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/5UB4HN1.jpg',
            cost: 18,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Marc Soler',
            country: 'Spain',
            age: 24,
            riderType: 'Climber',
            image: 'https://i.imgur.com/YKbFJdR.jpg',
            cost: 22.1,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Alejandro Valverde',
            country: 'Spain',
            age: 38,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/XGrSog2.jpg',
            cost: 30.8,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'Quick-Step Floors' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'Quick-Step Floors',
        country: 'Belgium',
        jersey: 'https://i.imgur.com/Wp3ldsO.jpg'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Niki Terpstra',
            country: 'Netherlands',
            age: 34,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/YkNDq9l.jpg',
            cost: 16.7,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Yves Lampaert',
            country: 'Belgium',
            age: 27,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/bXCJGcY.jpg',
            cost: 17.8,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Philippe Gilbert',
            country: 'Belgium',
            age: 35,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/Kk0uBak.jpg',
            cost: 19.2,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Fernando Gaviria',
            country: 'Colombia',
            age: 36,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/WdnAvBE.jpg',
            cost: 33.2,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Bob Jungels',
            country: 'Luxembourg',
            age: 25,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/0pEJ6pI.jpg',
            cost: 18,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Julian Alaphilippe',
            country: 'France',
            age: 26,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/uUNDlbj.jpg',
            cost: 30.9,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Ariel Maximiliano Richeze',
            country: 'Argentina',
            age: 35,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/QoHckgi.jpg',
            cost: 14.3,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Tim Declercq',
            country: 'Belgium',
            age: 28,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/7UcjmUF.jpg',
            cost: 9.6,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'Katusha-Alpecin' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'Katusha-Alpecin',
        country: 'Switzerland',
        jersey: 'https://i.imgur.com/ABCL4rk.jpg'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Marcel Kittel',
            country: 'Germany',
            age: 30,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/udjjVlp.jpg',
            cost: 27.4,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Ilnur Zakarin',
            country: 'Russia',
            age: 28,
            riderType: 'Climber',
            image: 'https://i.imgur.com/zDEpjh5.jpg',
            cost: 19.2,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Tony Martin',
            country: 'Germany',
            age: 33,
            riderType: 'Time-Trialist',
            image: 'https://i.imgur.com/uwgGtPb.jpg',
            cost: 10.6,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Pavel Kochetkov',
            country: 'Russia',
            age: 32,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/L9M06dQ.jpg',
            cost: 6.7,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Ian Boswell',
            country: 'United States',
            age: 27,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/msn0NtV.jpg',
            cost: 5.7,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Robert Kiserlovski',
            country: 'Croatia',
            age: 31,
            riderType: 'Climber',
            image: 'https://i.imgur.com/BPil5wV.jpg',
            cost: 4,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Nils Politt',
            country: 'Germany',
            age: 24,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/l6UVycM.jpg',
            cost: 14.1,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Rick Zabel',
            country: 'Germany',
            age: 24,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/pkDvDQb.jpg',
            cost: 10.8,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'Sky' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'Sky',
        country: 'Great Britain',
        jersey: 'https://i.imgur.com/cc8icgg.png'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Christopher Froome',
            country: 'Great Britain',
            age: 33,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/BcioiGd.jpg',
            cost: 36,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Gianni Moscon',
            country: 'Italy',
            age: 24,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/11rucj8.jpg',
            cost: 19.8,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Geraint Thomas',
            country: 'Great Britain',
            age: 32,
            riderType: 'Climber',
            image: 'https://i.imgur.com/eTSTGJV.jpg',
            cost: 30.6,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Michal Kwiatkowski',
            country: 'Poland',
            age: 28,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/wbqAy4o.jpg',
            cost: 23.1,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Wout Poels',
            country: 'Netherlands',
            age: 30,
            riderType: 'Climber',
            image: 'https://i.imgur.com/3OxJhM1.jpg',
            cost: 21.7,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Egan Arley Bernal',
            country: 'Colombia',
            age: 21,
            riderType: 'Climber',
            image: 'https://i.imgur.com/hTeMLbF.jpg',
            cost: 37.8,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Jonathan Castroviejo',
            country: 'Spain',
            age: 31,
            riderType: 'Time-Trialist',
            image: 'https://i.imgur.com/n3ae0s8.jpg',
            cost: 10.6,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Luke Rowe',
            country: 'Great Britain',
            age: 28,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/wnRtFdV.jpg',
            cost: 15.2,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'Sunweb' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'Sunweb',
        country: 'Germany',
        jersey: 'https://i.imgur.com/rFsWgZt.jpg'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Soren Kragh Andersen',
            country: 'Denmark',
            age: 23,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/EEtQOlG.jpg',
            cost: 19.9,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Michael Matthews',
            country: 'Australia',
            age: 27,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/a1Ao0Ni.jpg',
            cost: 33.8,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Tom Dumolin',
            country: 'Netherlands',
            age: 27,
            riderType: 'Time-Trialist',
            image: 'https://i.imgur.com/x74VVOu.jpg',
            cost: 29.3,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Wilco Kelderman',
            country: 'Netherlands',
            age: 27,
            riderType: 'Climber',
            image: 'https://i.imgur.com/4nKEPEM.jpg',
            cost: 28.3,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Nikias Arndt',
            country: 'Germany',
            age: 26,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/cflaOws.jpg',
            cost: 11.6,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Laurens ten Dam',
            country: 'Netherlands',
            age: 37,
            riderType: 'Climber',
            image: 'https://i.imgur.com/wotLoO9.jpg',
            cost: 20.2,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Simon Geschke',
            country: 'Germany',
            age: 32,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/NpUux9K.jpg',
            cost: 11.3,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Edward Theuns',
            country: 'Belgium',
            age: 27,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/B5bFhKd.jpg',
            cost: 21.4,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'Trek-Segafredo' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'Trek-Segafredo',
        country: 'United States',
        jersey: 'https://i.imgur.com/iFQAqYL.jpg'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Bauke Mollema',
            country: 'Netherlands',
            age: 31,
            riderType: 'Climber',
            image: 'https://i.imgur.com/mStpjRq.jpg',
            cost: 20.7,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'John Degenkolb',
            country: 'Germany',
            age: 29,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/w397zVm.jpg',
            cost: 14.5,
            team: newTeam._id
          }),
          RIDER.create({
            name: ' Julien Bernard',
            country: 'France',
            age: 26,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/9zApiZv.jpg',
            cost: 4.3,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Koen de Kort',
            country: 'Netherlands',
            age: 35,
            riderType: 'All-Rounder',
            image: 'https://i.imgur.com/pjeCWuq.jpg',
            cost: 6.6,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Michael Gogl',
            country: 'Austria',
            age: 24,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/NOk5dQc.jpg',
            cost: 8.8,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Tsgabu Grmay',
            country: 'Etiopia',
            age: 26,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/3bdycaa.jpg',
            cost: 5.4,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Toms Skujiņs',
            country: 'Latvia',
            age: 27,
            riderType: 'Classics speicalist',
            image: 'https://i.imgur.com/Zk5fiQ7.jpg',
            cost: 15.2,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Jasper Stuyven',
            country: 'Belgium',
            age: 26,
            riderType: 'Classics speicalist',
            image: 'https://i.imgur.com/nNvgCyP.jpg',
            cost: 18.5,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'UAE-Team Emirates' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'UAE-Team Emirates',
        country: 'United Arab Emirates',
        jersey: 'https://i.imgur.com/S1sdVRr.jpg'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Daniel Martin',
            country: 'Ireland',
            age: 31,
            riderType: 'Climber',
            image: 'https://i.imgur.com/gaBsrvK.jpg',
            cost: 27.3,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'John Darwin Atapuma',
            country: 'Colombia',
            age: 30,
            riderType: 'Climber',
            image: 'https://i.imgur.com/xn4ML23.jpg',
            cost: 11.7,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Alexander Kristoff',
            country: 'Norway',
            age: 30,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/q31WJrP.jpg',
            cost: 27.3,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Rory Sutherland',
            country: 'Australia',
            age: 36,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/1Rzzk4B.jpg',
            cost: 7.3,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Kristijan Durasek',
            country: 'Croatia',
            age: 30,
            riderType: 'Climber',
            image: 'https://i.imgur.com/WyvcMv3.jpg',
            cost: 8.8,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Roberto Ferrari',
            country: 'Italy',
            age: 35,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/Pud4BnM.jpg',
            cost: 9.1,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Marco Marcato',
            country: 'Italy',
            age: 34,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/HsS53qN.jpg',
            cost: 11.6,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Oliviero Troia',
            country: 'Italy',
            age: 23,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/UjhqRRe.jpg',
            cost: 6.2,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });

  TEAM.findOne({ name: 'Wanty-Groupe Gobert' }).then((team) => {
    if (!team) {
      TEAM.create({
        name: 'Wanty-Groupe Gobert',
        country: 'Belgium',
        jersey: 'https://i.imgur.com/rhZIppX.jpg'
      }).then((newTeam) => {
        Promise.all([
          RIDER.create({
            name: 'Thomas Degand',
            country: 'Belgium',
            age: 32,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/dZIJs7w.jpg',
            cost: 3,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Timothy Dupont',
            country: 'Belgium',
            age: 30,
            riderType: 'Sprinter',
            image: 'https://i.imgur.com/saBmxwA.jpg',
            cost: 8,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Guillaume Martin',
            country: 'France',
            age: 25,
            riderType: 'Climber',
            image: 'https://i.imgur.com/6VNgLoj.jpg',
            cost: 15.9,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Marco Minnaard',
            country: 'Netherlands',
            age: 27,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/cpEgQ9i.jpg',
            cost: 10.7,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Yoann Offredo',
            country: 'France',
            age: 31,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/V5fVp3f.jpg',
            cost: 9.4,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Andrea Pasqualon',
            country: 'Italy',
            age: 30,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/t6oAtOz.jpg',
            cost: 9.9,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Dion Smith',
            country: 'New Zealand',
            age: 25,
            riderType: 'Domestique',
            image: 'https://i.imgur.com/5VwhRQ5.jpg',
            cost: 12.5,
            team: newTeam._id
          }),
          RIDER.create({
            name: 'Guillaume van Keirsbulck',
            country: 'Belgium',
            age: 27,
            riderType: 'Classics specialist',
            image: 'https://i.imgur.com/9FbUQGR.jpg',
            cost: 7.8,
            team: newTeam._id
          })
        ]).then((riders) => {
          newTeam.riders = riders.map(r => r._id);
          newTeam.save();
        });
      });
    }
  });
};