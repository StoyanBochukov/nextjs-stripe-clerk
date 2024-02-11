"use server"

import { CreateEventParams } from "@/types"
import { connectDB } from "../mongodb/database/connectDB"
import { handleError } from "../utils"
import User from "../mongodb/database/models/userModel"
import Event from "../mongodb/database/models/eventModel"

export const createEvent = async ({event, userId, path}: CreateEventParams) => {
    try {
        await connectDB();
        const organizer = await User.findById(userId);
        console.log(userId);
        
        if(!organizer){
            throw new Error('Organizer not found.. why!?')
        };
        const newEvent = await Event.create({
            ...event,
            category:event.categoryId,
            organizer:userId
        });

        return JSON.parse(JSON.stringify(newEvent));
    } catch (error) {
        handleError(error)
    }
}