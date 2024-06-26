"use server"
const uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@" + process.env.DB_URL
import bcrypt from 'bcryptjs'
import Mongoboi from "./mongo"
export default async function handleSubmit(username, password) {
  "use server"
  const mongoboi = new Mongoboi(uri, "Users")
  var findUser = { // look for user with specified username
    username: username,
  }
  await mongoboi.connect();
  const user = await mongoboi.findOne("patients", findUser) // ensure that the username occurs in the database
  await mongoboi.disconnect();
  if (user == null){ // will return null if username is not found in the database
    return null;
  }

  const matching = await bcrypt.compare(password, user.password); //compares user input with stored hash password

  if(matching){
    return user; //returns the user if creds are good
  }
  return null;
}