const User = require("./models/User");

async function createUser() {
  const user = await User.create({
    name: "Shaurya",
    email: "shaurya@gmail.com",
    password: "123456",
    role: "freelancer"
  });

  console.log(user);
}

module.exports = createUser;