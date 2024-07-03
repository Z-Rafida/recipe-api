import { CategoryModel } from "../models/category.js";

export const getCategories = async (req, res, next) => {
    try {
        // get query params
        const { limit, filter, skip, fields} = req.query;
        // get all categories from the database
        const allCategories = await CategoryModel
            .find(JSON.parse(filter))
            .select(JSON.parse(fields))
            .limit(limit)
            .skip(skip);
        //  return response
        res.status(200).json(allCategories);
    } catch (error) {
        next(error)
    }
}

export const postCategory = async (req, res, next) => {
    try {
        // post a category into the database
        const newCategory = await CategoryModel.create({
            ...req.body,
            image: req.file.filename,
        });

        // return a response
        res.status(201).json(newCategory);
    } catch (error) {
        next(error)
    }
}