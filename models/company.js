"use strict";
module.exports = (sequelize, DataTypes) => {
    const company = sequelize.define(
        "company",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            }
        },
        {}
    );
    company.associate = function(models) {
        // associations can be defined here
    };
    return company;
};
