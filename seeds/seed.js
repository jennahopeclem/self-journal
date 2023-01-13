const sequelize = require('../config/connection');
const { User, Goals, Entry, Category } = require('../models');

const userData = require('./userdata.json');
const goalsData = require('./goalsdata.json');
const entryData = require('./entrydata.json');
const categoryData = require('./categorydata.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const entry = await Entry.bulkCreate(entryData, {
        individualHooks: true,
        returning: true,
    });

    for (const entry of entryData) {
        await Entry.create({
            ...entry,
            user_id: users.id,
        });
    }

    for (const goal of goalsData) {
        await Goals.create({
            ...goal,
            user_id: users.id,
        });
    }

    for (const category of categoryData) {
        await Category.create({
            ...category,
            entry_id: entry.id,
        });
    }

    process.exit(0);
};

seedDatabase();