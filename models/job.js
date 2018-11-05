"use strict";
module.exports = (sequelize, DataTypes) => {
    const Job = sequelize.define("Job", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    job.associate = function(models) {
        models.Job.belongsTo(models.Company);
    };
    return job;
};
