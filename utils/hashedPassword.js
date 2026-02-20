import bcrypt from "bcryptjs";

const hashedPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
}




const comparePassword = async (password, exitPassword) => {
    const isMatch = await bcrypt.compare(password, exitPassword);
    return isMatch;
}




export { comparePassword };
export default hashedPassword;
