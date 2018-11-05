"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface
            .addColumn(
                "users", // name of Source model
                "CompanyId", // name of the key we're adding
                {
                    type: Sequelize.INTEGER,
                    references: {
                        model: "companies", // name of Target model
                        key: "id" // key in Target model that we're referencing
                    },
                    onUpdate: "CASCADE",
                    onDelete: "SET NULL"
                }
            )
            .then(() => {
                return queryInterface.addColumn(
                    "jobs", // name of Source model
                    "CompanyId", // name of the key we're adding
                    {
                        type: Sequelize.INTEGER,
                        references: {
                            model: "companies", // name of Target model
                            key: "id" // key in Target model that we're referencing
                        },
                        onUpdate: "CASCADE",
                        onDelete: "SET NULL"
                    }
                );
            });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface
            .removeColumn(
                "users", // name of Source model
                "CompanyId" // key we want to remove
            )
            .then(() => {
                queryInterface.removeColumn(
                    "jobs", // name of Source model
                    "CompanyId" // key we want to remove
                );
            });
    }
};
