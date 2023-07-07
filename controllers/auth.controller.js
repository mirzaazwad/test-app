const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

//For Register Page
const registerView = (req, res) => {
  res.render("register", {});
};

//Post Request that handles Register
const registerUser = (req, res) => {
    console.log(req.body);
    
    const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password || !confirmPassword) {
      console.log("Fill empty fields");
    }
    //Confirm Passwords
    if (password !== confirmPassword) {
      console.log("Password must match");
    } else {
      //Validation
      User.findOne({ email: email }).then((user) => {
        if (user) {
          console.log("email exists");
          res.render("register", {
          });
        } else {
          //Validation
          const newUser = new User({
            name,
            email,
            password,
          });
          //Password Hashing
          bcrypt.genSalt(10, (err, salt) =>
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(res.redirect("/login"))
                .catch((err) => console.log(err));
            })
          );
        }
      });
    }
  };

// For View
const loginView = (req, res) => {
  res.render("login", {});
};
module.exports = {
  registerView,
  loginView,
  registerUser,
};
