
const Entry = require('./Entry');
const Goals = require('./Goals');
const User = require('./User');

User.hasMany(Entry, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Goals, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Entry.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
}
);

Goals.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { Entry, Goals, User };