# Ratings and Reviews Module

This is an interactive ratings and reviews module that can usually be found on various Ecommerce product pages. The module alows user interaction in the following ways: A customer photos carousel; filter reivews by star rating; filter reviews by search queries (text field); sort reviews by specific criteria; "Verify Buyer" tooltip hover effects; Show More & Show Less conditionals; Clear review filters.

## Related Projects

  - https://github.com/Unfair-dot-com/fec-main-carousel
  - https://github.com/Unfair-dot-com/product-detail-carousel

## Table of Contents

1. [Setup](#Setup)
1. [Requirements](#Requirements)
1. [Additonal Notes](#Additonal Notes)

## Setup

In order to set up the file you will need to follow these steps: 

Rename the following files inside server/database/
 1) RENAME-ME-TO-CONFIG.js = config.js
 2) RENAME-ME-TO-CONNECTION.js = connection.js

Inside of these files, add your MySQL username and password inside the quotations marks as requested.

Run ```npm install```
Run ```npm run bundle```
Run ```npm run build```

## Requirements

- Node.js
- MySQL

## Additonal Notes

The current seeding script found inside ```server/database/databaseSeeder.js``` will create a brand new database everytime the ```npm run build``` script is ran, or changes are made and saved while nodemon is running. To change this, you need to modifiy the ```db.connectAsync()``` function inside ```server/database/index.js```.
