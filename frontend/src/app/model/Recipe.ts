import { Time } from '@angular/common';
import { Ingredient } from './Ingredient';
import { User } from './User';

export class Recipe {
    id: number;
    title: string;
    summary: string;
    preparation_time: Time;
    description: string;
    author: User;
    img_src: string;
    created_on: Date;
    ingredients: Ingredient[];
    tags: string[];
}