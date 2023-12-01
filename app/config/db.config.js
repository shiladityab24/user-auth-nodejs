module.exports = {
    HOST: "ec2-35-169-9-79.compute-1.amazonaws.com",
    USER: "mmfztawfpcgkcd",
    PASSWORD: "827e5f1ffb675e50d77965f4db181371b0587dc3635942c1e2f8e85bf51fcf6d",
    DB: "da1gfk0eseblme",
    dialect: "postgres",
    pool: {
        max:5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};