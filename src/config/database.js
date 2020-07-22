const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'usuario', 'senha', {
    host: 'host',
    dialect: 'mysql'
});

var Comentarios = sequelize.define('comentarios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    comentario: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

sequelize.sync()

module.exports = { sequelize, Comentarios };