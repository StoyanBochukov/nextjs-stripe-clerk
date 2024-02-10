"use server"

import { CreateCategoryParams } from "@/types";
import { handleError } from "../utils";
import { connectDB } from "../mongodb/database/connectDB";
import Category from "../mongodb/database/models/categoryModel";

export const createCategory = async({ categoryName }: CreateCategoryParams) => {
    try {
        await connectDB();
        const newCategory = await Category.create({name: categoryName});

        return JSON.parse(JSON.stringify(newCategory));
    } catch (error) {
        handleError(error)
    }
}

export const getAllCategories = async() => {
    try {
        await connectDB();
        const categories = await Category.find();

        return JSON.parse(JSON.stringify(categories));
    } catch (error) {
        handleError(error)
    }
}