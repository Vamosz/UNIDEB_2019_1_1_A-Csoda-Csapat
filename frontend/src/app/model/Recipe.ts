import { Time } from '@angular/common';
import { Author } from './Author';
import { Ingredient } from './Ingredient';

export class Recipe {
    id: number;
    title: string;
    summary: string;
    preparation_time: Time;
    description: string;
    author: Author;
    img_src: string;
    created_on: Date;
    ingredients: Ingredient[];
    tags: string[];
}