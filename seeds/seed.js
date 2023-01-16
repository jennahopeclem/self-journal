const sequelize = require('../config/connection');
const { User, Goals, Entry, Comments } = require('../models');

const userData = require('./userdata.json');
const goalsData = require('./goalsdata.json');
const entryData = require('./entrydata.json');
const commentData = require('./commentsData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const entries = await Entry.bulkCreate(entryData, {
        user_id: users[Math.floor(Math.random() * users.length)].id,
        returning: true
    })

    for (const goal of goalsData) {
        await Goals.create({
            ...goal,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    for (const comment of commentData) {
        console.log(comment);
        await Comments.bulkCreate({
            ...comment,
            user_id: users[Math.floor(Math.random() * users.length)].id,
            entry_id: entries[Math.floor(Math.random() * users.length)].id,
        });
    }
    
    process.exit(0);
};

seedDatabase();