const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// simple route
app.get("/", (req,res) => {
    res.json({message: "User Authentication test for signIn and signUp"});
});

const db = require("./app/models");
const Role = db.role;

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

db.sequelize.sync({force:true}).then(()=> {
    console.log('Drop and Resync Db');
    initial();
});

function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }


//set port , listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

