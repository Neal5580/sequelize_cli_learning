"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "jobs",
            [
                {
                    CompanyId: 1,
                    title: "Frontend Developer",
                    description:
                        "We are looking for a Frontend Developer familiar with React."
                },
                {
                    CompanyId: 1,
                    title: "Backend Developer",
                    description:
                        "We are looking for a Backend Developer familiar with Node.js and Express."
                },
                {
                    CompanyId: 2,
                    title: "Full-Stack Developer",
                    description:
                        "We are looking for a Full-Stack Developer familiar with Node.js, Express, and React."
                }
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("jobs", null, {});
    }
};
