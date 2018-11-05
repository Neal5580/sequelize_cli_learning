"use strict";
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
        "user",
        {
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            role: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            }
        },
        {}
    );
    user.associate = function(models) {
        models.User.belongsTo(models.Company);
    };
    return user;
};
