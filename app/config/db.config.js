module.exports = {
    HOST: "ec2-174-129-100-198.compute-1.amazonaws.com",
    USER: "ftceuybqbsmmeb",
    PASSWORD: "cf3eaf0026a177526444822075b295f2838ac276b8d49a2ae7a4debf41f248d9",
    DB: "d25h81dc4en9i2",
    dialect: "postgres",
    pool: {
        max:5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};