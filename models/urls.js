module.exports = (sequelize, type) => {

    return sequelize.define('url', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        url_name: type.STRING(2000),
        short_name: type.STRING(50),
        ip: type.STRING(11)

    })

}