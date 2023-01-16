const sequelize = require('../config/connection');
const { User, Goals, Entry } = require('../models');

const userData = require('./userdata.json');
const goalsData = require('./goalsdata.json');
const entryData = require('./entrydata.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const entry of entryData) {
        await Entry.create({
            ...entry,
            user_id: users [Math.floor(Math.random() * users.length)].id,
        });
    }

    for (const goal of goalsData) {
        await Goals.create({
            ...goal,
            user_id: users [Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
};

seedDatabase();