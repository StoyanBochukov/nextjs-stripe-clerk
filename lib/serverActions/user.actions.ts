"use server";

import { CreateUserParams, UpdateUserParams } from "@/types";
import { handleError } from "../utils";
import { connectDB } from "../mongodb/database/connectDB";
import User from "../mongodb/database/models/userModel";
import Event from "../mongodb/database/models/eventModel";
import Order from "../mongodb/database/models/orderModel";
import { revalidatePath } from "next/cache";

export const createUser = async(user: CreateUserParams) => {
    try {
        await connectDB();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        handleError(error);
    }
}

export const getUserById =async (userId:string) => {
    try {
        connectDB();
        const user = await User.findById(userId)
        if(!user) {
            throw new Error('User not found!')
        } 
        return JSON.parse(JSON.stringify(user))
    } catch (error) {
        handleError(error);
    }
}

export const updateUser = async(clerkId:string, user:UpdateUserParams) => {
    try {
        await connectDB();
        const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {new: true});
        if(!updatedUser) throw new Error('User update failed!');

        return JSON.parse(JSON.stringify(updateUser));
    } catch (error) {
        handleError(error);
    }
}

export const deleteUser = async(clerkId: string) => {
    try {
        await connectDB();
        //Find User to Delete
        const userToDelete = await User.findOne({ clerkId });

        if(!userToDelete){
            throw new Error('User not found!');
        }

        //Unlink Relationships
        await Promise.all([
            //Update the 'events' collection to remove reference to the user
            Event.updateMany(
                {_id: { $in: userToDelete.events }},
                {$pull: { organizer: userToDelete._id }}
            ),
            Order.updateMany(
                {_id: { $in: userToDelete.orders }},
                {$unset: { buyer: 1 }}
            )
        ])

        //Delete user
        const deletedUser = await User.findByIdAndDelete(userToDelete._id);
        revalidatePath('/');

        return deletedUser ? JSON.parse(JSON.stringify(deletedUser)): null;
    } catch (error) {
        handleError(error);
    }
}