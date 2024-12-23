import Router from "express"
const router = Router()
import User from "../models/user.mjs"

router.post("/", async (req, res) => {
  const data = req.body

  try {
    if (!data) {
      return res.status(400).json({ message: "Please send required user data" })
    }

    let email = data.email
    const existingUser = await User.findOne({ "UserInfo.email" : email})

    if (existingUser) {
      console.log("Email already exists in the database.")
      return res.status(409).json({ message: "Email already exists" })
    } else {
      const newUser = new User({UserInfo : data})
      await newUser.save()
      console.log("User created successfully!")
      res.status(201).json({ message: "User created successfully!", data: newUser })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error: could not create user" })
  }
})

export default router
