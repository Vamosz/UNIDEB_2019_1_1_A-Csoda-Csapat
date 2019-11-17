import { Injectable } from '@angular/core';
import { Time } from '@angular/common';

export interface Recipe {
  title: string;
  author: string;
  summary: string;
  description: string;
  preparationTime: Time;
  ingredients: string[]
  createdOn: Date;
  tags: string[];
}

export class RecipeService {

  

  getAllRecipes() {
    const recipes : Recipe[]= [
      {
      title: "Sir Patrick Stewart's mole enchiladas",
      author: "Sir Patrick Stewart",
      createdOn: new Date('05-09-2019 16:55:40'),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare erat sed erat interdum, nec condimentum ante lacinia. Vestibulum sem enim, tincidunt eget dignissim ut, ultricies sed felis. Nulla sagittis ac massa non rhoncus. Praesent vitae orci et nisi dapibus vulputate sit amet ut neque. Sed luctus, ligula eu interdum vehicula, sapien sapien lobortis dui, eu tempus lectus sapien mollis mi. Mauris nunc augue, aliquet eget purus in, dignissim efficitur libero. Mauris condimentum mollis nunc, et malesuada augue rutrum et.",
      ingredients: ["enchiladas", "lorem", "ipsum"],
      preparationTime: {hours: 0, minutes: 40},
      summary: "Lorem ipsum enchiladas dolor",
      tags: ["Chicken"]
      },
      {
      title: "Tom Walker's chicken & hot sauce gravy",
      author: "Tom Walker",
      createdOn: new Date('05-10-2019 18:55:30'),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare erat sed erat interdum, nec condimentum ante lacinia. Vestibulum sem enim, tincidunt eget dignissim ut, ultricies sed felis. Nulla sagittis ac massa non rhoncus. Praesent vitae orci et nisi dapibus vulputate sit amet ut neque. Sed luctus, ligula eu interdum vehicula, sapien sapien lobortis dui, eu tempus lectus sapien mollis mi. Mauris nunc augue, aliquet eget purus in, dignissim efficitur libero. Mauris condimentum mollis nunc, et malesuada augue rutrum et.",
      ingredients: ["chicken", "red hot chilli pepper"],
      preparationTime: {hours: 0, minutes: 40},
      summary: "Chicken with hot sauce",
      tags: ["Chicken"]
      },
      {
      title: "Grilled chicken with charred pineapple salad",
      author: "Zolt",
      createdOn: new Date('03-10-2019 10:40:20'),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare erat sed erat interdum, nec condimentum ante lacinia. Vestibulum sem enim, tincidunt eget dignissim ut, ultricies sed felis. Nulla sagittis ac massa non rhoncus. Praesent vitae orci et nisi dapibus vulputate sit amet ut neque. Sed luctus, ligula eu interdum vehicula, sapien sapien lobortis dui, eu tempus lectus sapien mollis mi. Mauris nunc augue, aliquet eget purus in, dignissim efficitur libero. Mauris condimentum mollis nunc, et malesuada augue rutrum et.",
      ingredients: ["chicken", "grill seasoning", "pineapple"],
      preparationTime: {hours: 0, minutes: 40},
      summary: "Grilled chicken with pineapple for some reason",
      tags: ["Chicken", "Sweet"]
      }
    ];
    return recipes;
  }

}
