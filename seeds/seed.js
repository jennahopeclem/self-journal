const sequelize = require('../config/connection');
<<<<<<< HEAD
const { User, Goals, Entry } = require('../models');
=======
const { User, Goals, Entry, Comments } = require('../models');
>>>>>>> 403b35da0f45bc636e4e09eb6ca4c1083f57bee4

const userData = require('./userdata.json');
const goalsData = require('./goalsdata.json');
const entryData = require('./entrydata.json');
<<<<<<< HEAD
=======
const commentData = require('./commentsData.json');
>>>>>>> 403b35da0f45bc636e4e09eb6ca4c1083f57bee4

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

<<<<<<< HEAD
    for (const entry of entryData) {
        await Entry.create({
            ...entry,
            user_id: users [Math.floor(Math.random() * users.length)].id,
        });
    }
=======
    const entries = await Entry.bulkCreate(entryData, {
        user_id: users[Math.floor(Math.random() * users.length)].id,
        returning: true
    })
>>>>>>> 403b35da0f45bc636e4e09eb6ca4c1083f57bee4

    for (const goal of goalsData) {
        await Goals.create({
            ...goal,
<<<<<<< HEAD
            user_id: users [Math.floor(Math.random() * users.length)].id,
=======
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    for (const comment of commentData) {
        console.log(comment);
        await Comments.bulkCreate({
            ...comment,
            user_id: users[Math.floor(Math.random() * users.length)].id,
            entry_id: entries[Math.floor(Math.random() * users.length)].id,
>>>>>>> 403b35da0f45bc636e4e09eb6ca4c1083f57bee4
        });
    }
    
    process.exit(0);
};

seedDatabase();