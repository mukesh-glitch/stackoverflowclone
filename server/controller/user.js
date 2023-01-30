import mongoose from "mongoose";
import userdb from "../model/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUser = await userdb.find();
    const allUserDetails = []
    allUser.forEach(users => {
      allUserDetails.push({ _id: users._id, name: users.name, about: users.about, tags: users.tags, joinedon: users.joinedon })
    })
    res.status(200).json(allUser)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const UpdateProfile = async (req, res) => {
  const { id: _id } = req.params;
  const { name, about, tags } = req.body;
  try {
    const updateProfile = await userdb.findByIdAndUpdate(_id, { $set: { 'name': name, 'about': about, 'tags': tags } }, { new: true })
    res.status(200).json(updateProfile)
  } catch (error) {
    res.status(405).json({ message: error.message })
  }

}