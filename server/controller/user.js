import mongoose from "mongoose";
import userdb from "../model/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUser = await userdb.find();
    const allUserDetails = []
    allUser.forEach(users => {
      allUserDetails.push({ _id: users._id, name: users.name, about: users.about, tags: users.tags, joinedon: users.joinedon })
    })
    res.status(200).json(allUserDetails)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}