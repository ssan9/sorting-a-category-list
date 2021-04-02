## Sorting-a Category-List-Coding-Exercise

## Introduction

A JavaScript code exercise to sort a category list from a flat database for insert into a hierarchy-constrained one.

Suppose you are tasked with syncing data from two different sources, a product database, and a storefront. The product database also contains the product taxonomy, i.e., product categories. Each category has a name, can have at most one parent category, and can have zero or more children. The product database provides three pieces of information about a category: the category’s id, it’s parent category’s id (if any), and the category’s name. The storefront, though, has one limitation: a child category cannot be inserted before its parent category has been created. Our job is to write a function that can take a JSON string of categories provided by the product database and sort them in the optimal insertion order for the storefront so that no category insertion will result in an integrity error. The taxonomy for categories can be arbitrarily deep. The return value should also be a JSON string.

Your function should take a JSON object representing the categories from the product database and provide as output a list of dictionaries sorted in the proper insertion order. There may be more than one optimal ordering of the categories, but you only have to provide an optimal ordering.

You can assume:
- The input will always be solvable (there will be no missing parents)
- The input will always be valid JSON in the format of the example below, with no additional data
- There may be more than one root category (a category with no parents)

This is a formatted JSON sample input, with one sample child (with both a parent and a child), one child with no children, and sample parent (with no parent).

[
  {
    "name": "Accessories",
    "id": 1,
    "parent_id": 20,
  },
  {
    "name": "Watches",
    "id": 57,
    "parent_id": 1
  },
  {
    "name": "Men",
    "id": 20,
    "parent_id": null
  }
]
This is a formatted JSON sample solution for the input above:

[
  {
    "name": "Men",
    "id": 20,
    "parent_id": null
  },
  {
    "name": "Accessories",
    "id": 1,
    "parent_id": 20
  },
  {
    "name": "Watches",
    "id": 57,
    "parent_id": 1
  }
]

This App has been developed with the help of Javascript and Node.

## Requirements
Node and NPM - https://nodejs.org/en/

## Getting Started 
To get the Node server running locally:

* Clone this repo
* npm install to install node
* npm to start the local server
