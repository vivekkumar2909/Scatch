import jwt from "jsonwebtoken";

const jwtTokenGenerator = (user) => {
    const token = jwt.sign(
        { email: user.email, id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }   // always set expiry
    );

    return token;
}

export default jwtTokenGenerator;
