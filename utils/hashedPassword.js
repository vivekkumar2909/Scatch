import bcrypt from "bcryptjs";

const hashedPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
}

export default hashedPassword;
