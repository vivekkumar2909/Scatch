import User from "../models/user.model.js";
import hashedPassword from "../utils/hashedPassword.js";
import jwtTokenGenerator from "../utils/jwtGeratorToken.js";

const userController = async (req, res) => {
    try {
        const { email, password, fullname } = req.body;

        // Check existing user
        const existUser = await User.findOne({ email });

        if (existUser) {
            return res.status(400).send("User already exists. Please login.");
        }

        // Hash password
        const hashedPassword = await hashedPassword(password);

        // Create user
        const user = await User.create({
            email,
            fullname,
            password: hashedPassword
        });

        // Generate token
        const token = jwtTokenGenerator(user);

        // Send token in cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // true in production (https)
        });

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                email: user.email,
                fullname: user.fullname
            }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export default userController;
