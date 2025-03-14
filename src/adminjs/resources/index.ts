import { ResourceWithOptions } from "adminjs";
import { categoryResourceOptions } from "./category";
import { Category } from "../../models";
const category = new Category();

export const adminJsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourceOptions,
    },
];
