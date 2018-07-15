const MONGOOSE = require('mongoose');

const STRING = MONGOOSE.Schema.Types.String;
const NUMBER = MONGOOSE.Schema.Types.Number;
const DATE = MONGOOSE.Schema.Types.Date;

const STAGE_SCHEMA = MONGOOSE.Schema({
    stageNumber: { type: NUMBER, required: true },
    stageType: { type: STRING, required: true },
    startDay: { type: DATE, required: true },
    startCity: { type: STRING, required: true },
    endCity: { type: STRING, required: true },
    distance: { type: NUMBER, required: true },
    stageProfile: { type: STRING, required: true },
    stageMap: { type: STRING, required: true }
});

const STAGE = MONGOOSE.model('Stage', STAGE_SCHEMA);

module.exports = STAGE;

module.exports.init = () => {
    STAGE.findOne({ stageNumber: 1 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 1,
                stageType: 'Flat',
                startDay: '2018-07-07',
                startCity: 'Noirmoutier-en-l\'Ile',
                endCity: 'Fontenay-le-Comte',
                distance: 201,
                stageProfile: 'https://i.imgur.com/ml0z7v1.jpg',
                stageMap: 'https://i.imgur.com/vVu5WpQ.jpg'
            });
        }
    });

    STAGE.findOne({ stageNumber: 2 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 2,
                stageType: 'Flat',
                startDay: '2018-07-08',
                startCity: 'Mouilleron-Saint-Germain',
                endCity: 'La Roche-sur-Yon',
                distance: 182.5,
                stageProfile: 'https://i.imgur.com/YUSuUSr.jpg',
                stageMap: 'https://i.imgur.com/RWvYqRK.jpg'
            });
        }
    });

    STAGE.findOne({ stageNumber: 3 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 3,
                stageType: 'Team Time-Trial',
                startDay: '2018-07-09',
                startCity: 'Cholet',
                endCity: 'Cholet',
                distance: 35.5,
                stageProfile: 'https://i.imgur.com/Jg2d08a.jpg',
                stageMap: 'https://i.imgur.com/Usvtszm.jpg'
            });
        }
    });

    STAGE.findOne({ stageNumber: 4 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 4,
                stageType: 'Flat',
                startDay: '2018-07-10',
                startCity: 'La Baule',
                endCity: 'Sarzeau',
                distance: 195,
                stageProfile: 'https://i.imgur.com/Xv4zaHB.jpg',
                stageMap: 'https://i.imgur.com/rpctwHF.jpg'
            });
        }
    });

    STAGE.findOne({ stageNumber: 5 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 5,
                stageType: 'Hilly',
                startDay: '2018-07-11',
                startCity: 'Lorient',
                endCity: 'Quimper',
                distance: 204.5,
                stageProfile: 'https://i.imgur.com/GA0jyZn.jpg',
                stageMap: 'https://i.imgur.com/eHTQOMT.jpg'
            });
        }
    });

    STAGE.findOne({ stageNumber: 6 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 6,
                stageType: 'Hilly',
                startDay: '2018-07-12',
                startCity: 'Brest',
                endCity: 'Mûr de Bretagne Guerlédan',
                distance: 181,
                stageProfile: 'https://i.imgur.com/pXHQKWp.jpg',
                stageMap: 'https://i.imgur.com/X18yqQn.jpg'
            });
        }
    });

    STAGE.findOne({ stageNumber: 7 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 7,
                stageType: 'Flat',
                startDay: '2018-07-13',
                startCity: 'Fougères',
                endCity: 'Chartres',
                distance: 231,
                stageProfile: 'https://i.imgur.com/DjyHO2i.jpg',
                stageMap: 'https://i.imgur.com/Tt49Woy.jpg'
            });
        }
    });

    STAGE.findOne({ stageNumber: 8 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 8,
                stageType: 'Flat',
                startDay: '2018-07-14',
                startCity: 'Dreux',
                endCity: 'Amiens Métropole',
                distance: 181,
                stageProfile: 'https://i.imgur.com/wGsxiyd.jpg',
                stageMap: 'https://i.imgur.com/kJRRR6Y.jpg'
            });
        }
    });

    STAGE.findOne({ stageNumber: 9 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 9,
                stageType: 'Hilly',
                startDay: '2018-07-15',
                startCity: 'Arras Citadelle',
                endCity: 'Roubaix',
                distance: 156.5,
                stageProfile: 'https://i.imgur.com/XGFqGHE.jpg',
                stageMap: 'https://i.imgur.com/MJphKB4.jpg'
            });
        }
    });

    STAGE.findOne({ stageNumber: 10 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 10,
                stageType: 'Mountain',
                startDay: '2018-07-17',
                startCity: 'Annecy',
                endCity: 'Le Grand-Bornand',
                distance: 158.5,
                stageProfile: 'https://i.imgur.com/WttvooA.jpg',
                stageMap: 'https://i.imgur.com/ojJd7BN.jpg'
            });
        }
    });

    STAGE.findOne({ stageNumber: 11 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 11,
                stageType: 'Mountain',
                startDay: '2018-07-18',
                startCity: 'Albertville',
                endCity: 'La Rosière Espace San Bernardo',
                distance: 108.5,
                stageProfile: 'https://i.imgur.com/zXXRIML.jpg',
                stageMap: 'https://i.imgur.com/8HjzhAh.jpg'
            });
        }
    });

    STAGE.findOne({ stageNumber: 12 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 12,
                stageType: 'Mountain',
                startDay: '2018-07-19',
                startCity: 'Bourg-Saint-Maurice Les Arcs',
                endCity: 'Alpe d\'Huez',
                distance: 175.5,
                stageProfile: 'https://i.imgur.com/x3VFxt3.jpg',
                stageMap: 'https://i.imgur.com/mSmo6q7.jpg'
            });
        }
    });

    STAGE.findOne({ stageNumber: 13 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 13,
                stageType: 'Flat',
                startDay: '2018-07-20',
                startCity: 'Bourg d\'Oisans',
                endCity: 'Valence',
                distance: 169.5,
                stageProfile: 'https://i.imgur.com/qsw6POM.jpg',
                stageMap: 'https://i.imgur.com/3cBguS0.jpg'
            });
        }
    });

    STAGE.findOne({ stageNumber: 14 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 14,
                stageType: 'Hilly',
                startDay: '2018-07-21',
                startCity: 'Saint-Paul-Trois-Châteaux',
                endCity: 'Mende',
                distance: 188,
                stageProfile: 'https://i.imgur.com/iZoRAuU.jpg',
                stageMap: 'https://i.imgur.com/J3r9kVJ.jpg'
            });
        }
    });

    STAGE.findOne({ stageNumber: 15 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 15,
                stageType: 'Hilly',
                startDay: '2018-07-22',
                startCity: 'Millau',
                endCity: 'Carcassonne',
                distance: 181.5,
                stageProfile: 'https://i.imgur.com/7Bav2Fc.jpg',
                stageMap: 'https://i.imgur.com/EoF7k6X.jpg'
            });
        }
    });

    STAGE.findOne({ stageNumber: 16 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 16,
                stageType: 'Mountain',
                startDay: '2018-07-24',
                startCity: 'Carcassonne',
                endCity: 'Bagnères-de-Luchon',
                distance: 218,
                stageProfile: 'https://i.imgur.com/sECk7ki.jpg',
                stageMap: 'https://i.imgur.com/saFzukF.jpg'
            });
        }
    });

    STAGE.findOne({ stageNumber: 17 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 17,
                stageType: 'Mountain',
                startDay: '2018-07-25',
                startCity: 'Bagnères-de-Luchon',
                endCity: 'Saint-Lary-Soulan',
                distance: 65,
                stageProfile: 'https://i.imgur.com/rwAzNuF.jpg',
                stageMap: 'https://i.imgur.com/tCW3zyD.jpg'
            });
        }
    });

    STAGE.findOne({ stageNumber: 18 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 18,
                stageType: 'Flat',
                startDay: '2018-07-26',
                startCity: 'Trie-sur-Baïse',
                endCity: 'Pau',
                distance: 171,
                stageProfile: 'https://i.imgur.com/KuE0ejL.jpg',
                stageMap: 'https://i.imgur.com/p6GR1JG.jpg'
            });
        }
    });

    STAGE.findOne({ stageNumber: 19 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 19,
                stageType: 'Mountain',
                startDay: '2018-07-27',
                startCity: 'Lourdes',
                endCity: 'Laruns',
                distance: 200.5,
                stageProfile: 'https://i.imgur.com/1IMEnw1.jpg',
                stageMap: 'https://i.imgur.com/ZSjvmBK.jpg'
            });
        }
    });

    STAGE.findOne({ stageNumber: 20 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 20,
                stageType: 'Individual Time-Trial',
                startDay: '2018-07-28',
                startCity: 'Saint-Pée-sur-Nivelle',
                endCity: 'Espelette',
                distance: 31,
                stageProfile: 'https://i.imgur.com/RbhsJ9Z.jpg',
                stageMap: 'https://i.imgur.com/O44idxf.jpg'
            });
        }
    });

    STAGE.findOne({ stageNumber: 21 }).then((stage) => {
        if (!stage) {
            STAGE.create({
                stageNumber: 21,
                stageType: 'Flat',
                startDay: '2018-07-29',
                startCity: 'Houilles',
                endCity: 'Paris Champs-Élysées',
                distance: 116,
                stageProfile: 'https://i.imgur.com/zF3ncwc.jpg',
                stageMap: 'https://i.imgur.com/qfhr7lB.jpg'
            });
        }
    });
};