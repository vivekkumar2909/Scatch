import User from "../models/user.model.js";
import hashedPassword, { comparePassword } from "../utils/hashedPassword.js";
import jwtTokenGenerator from "../utils/jwtGeneratorToken.js";

const registerUser = async (req, res) => {
    try {
        const { email, password, fullname } = req.body;

        console.log(req.body);

        console.log(req.body.email);

        if (!email || !password || !fullname) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existUser = await User.findOne({ email });

        if (existUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashpassword = await hashedPassword(password);

        const user = await User.create({
            email,
            fullname,
            password: hashpassword
        });

        // const token = jwtTokenGenerator(user);

        // res.cookie("token", token, { httpOnly: true });

        return res.status(201).json({
            message: "User registered successfully"
        });

    } catch (error) {
        console.log("ERROR:", error);   // VERY IMPORTANT
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const existUser = await User.findOne({ email });

        if (!existUser) {
            return res.status(404).json({
                success: false,
                message: "User doesn't exist"
            });
        }

        const isMatch = await comparePassword(password, existUser.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        const token = jwtTokenGenerator(existUser);

        res.cookie("token", token, { httpOnly: true });

        return res.status(200).json({
            success: true,
            message: "Login successful"
        });

    } catch (error) {
        console.log("LOGIN ERROR:", error);
        return res.status(500).json({ message: error.message });
    }
};

export { loginUser };
export default registerUser;
