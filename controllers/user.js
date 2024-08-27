import bcrypt from "bcrypt";
import { UserModel } from "../models/user.js";


export const register = async (req, res, next) => {
    try {
        // Hash user password
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);

        // Create a new user 
        const registeredUser = await UserModel.create({
            ...req.body,
            password: hashedPassword
        });

        // Return response
        res.status(201).json('User registered successful')

    } catch (error) {
        next(error)
    }
};

export const login = async (req, res, next) => {
    try {
        const { email, password, username, phone } = req.body;
        // find a user using their unique identifier
        const user = await UserModel.findOne({
            $or: [
                {email: email},
                {username: username},
                {phone: phone}
            ]
        });
        if (!user) {
            res.status(401).json('No user found');
        } else {
            // verify their password
            const correctPassword = bcrypt.compareSync(password, user.password);
            if (!correctPassword) {
                res.status(401).json('Invalid credentials')
            } else {
                // Generate a session for user
                req.session.user = { id: user.id }
                // return response
                res.status(200).json('Loign successful');
            }
        }

    }
    catch (error) {
        next(error)
    }
}


export const logout = async (req, res, next) => {
    try {
        //  destroy user session
    await req.session.destroy()
    // return response
    res.status(200).json('Logout successful')
    } catch (error) {
        next(error)
    }
 }

export const profile = async (req, res, next) => {
    // find user by id
    try {
        const user = await UserModel.findById(req.session.user.id).
    select('-password');
    res.status(201).json(user);
    } catch (error) {
        next(error)
    }

};
