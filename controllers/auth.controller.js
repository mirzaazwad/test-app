const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

//Register
//Register View
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
        res.render("register", {});
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

//Login post method
const loginUser = (req, res) => {
  const { email, password } = req.body;
  // Example: Check if the email and password are valid
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        // User not found
        return res.send("Invalid email or password");
      }

      // Compare the password with the hashed password stored in the database
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          // Authentication successful
          res.redirect("/register");
        } else {
          // Authentication failed
          res.send("Invalid email or password");
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.send("An error occurred");
    });
};
module.exports = {
  registerView,
  loginView,
  registerUser,
  loginUser,
};
