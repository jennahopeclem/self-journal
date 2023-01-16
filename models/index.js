<<<<<<< HEAD

=======
>>>>>>> 403b35da0f45bc636e4e09eb6ca4c1083f57bee4
const Entry = require('./Entry');
const Goals = require('./Goals');
const User = require('./User');
const Comments = require('./Comments');

User.hasMany(Entry, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Goals, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Entry.belongsTo(User, {
    foreignKey: 'user_id'
}
);

Entry.hasMany(Comments, {
    foreignKey: 'entry_id',
    onDelete: 'CASCADE'
}
);

Goals.belongsTo(User, {
    foreignKey: 'user_id'
});

<<<<<<< HEAD

=======
>>>>>>> 403b35da0f45bc636e4e09eb6ca4c1083f57bee4
module.exports = { Entry, Goals, User };