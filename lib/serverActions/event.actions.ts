"use server"

import { CreateEventParams } from "@/types"
import { connectDB } from "../mongodb/database/connectDB"
import { handleError } from "../utils"
import User from "../mongodb/database/models/userModel"
import Event from "../mongodb/database/models/eventModel"
import Category from "../mongodb/database/models/categoryModel"


const populateEvent = async(query:any) => {
    return query.populate({
        path: 'organizer',
        model: User,
        select: '_id firstName lastName'
    })
    .populate({
        path: 'category',
        model: Category,
        select: '_id name'
    })
}

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
};

export const getEventById = async(eventId:string) => {
    try {
        await connectDB();
        const event = await populateEvent(Event.findById(eventId));
        if(!event){
            throw new Error('Event not found!');
        };

        return JSON.parse(JSON.stringify(event));
    } catch (error) {
        handleError(error)
    }
}