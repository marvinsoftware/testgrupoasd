const Sequelize = require ('sequelize');
const UrlModel = require('./models/urls');

const sequelize = new  Sequelize('grupoasd', 'root', '' , {
    host: 'localhost',
    dialect: 'mysql'
});


const Url = UrlModel(sequelize, Sequelize);


sequelize.sync({ force: false })
.then(() => {
    console.log('Tablas Sincronizadas')
})

module.exports = {
   
    Url
}