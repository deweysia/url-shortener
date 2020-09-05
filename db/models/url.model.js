module.exports = (sequelize, Sequelize) => {
    const Url = sequelize.define("url", {
        url_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        long_url: {
            type: Sequelize.TEXT
        },
        short_url: {
            type: Sequelize.TEXT
        }
    });

    return Url;
};