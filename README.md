# Homeland Market: Ratings & Reviews
An eCommerce ratings and reviews module of customer product feedback.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
    * [Placeholder 1](#placeholder-1)
    * [Placeholder 2](#placeholder-2)
    * [Placeholder 3](#placeholder-3)
3. [Built With](#built-with)
4. [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
5. [Contributing](#contributing)
6. [Contact](#contact)
7. [Acknowledgements](#acknowledgements)
8. [License](#license)


## Overview
<p align="center" height="200"><img src="img url"></p>
<p>Placehholder</p>

## Features

### Placeholder 1
<p><img src="gif url here"></p>

Placeholder 1

---

### Placeholder 2
<p><img src="gif url here"></p>

Placeholder 2

---

### Placeholder 3
<p><img src="gif url here"></p>

Placeholder 3

---

## Built With

Soccer Stats is built with the following technologies:
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)

## Getting Started

### Prerequisites

Node.js and npm are required in order to quickly get up and running with this project. Lukily, npm is distributed with Node.js - which means that when you download Node.js, you automatically get npm installed on your computer! You can install Node.js [HERE](https://nodejs.org/en/).

### Installation

1. 

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Matthew Wigglesworth - [LinkedIn](https://www.linkedin.com/in/matt-wigg/) - m.p.wigglesworth@gmail.com

Project Link: [https://github.com/Matt-Wigg/soccer-stats/](https://github.com/Matt-Wigg/soccer-stats/)

## Acknowledgements

* [React-Select](https://react-select.com/home)
* [Styled-Components](https://styled-components.com/)
* [Axios](https://github.com/axios/axios)
* [Google Fonts](https://fonts.google.com/)

## License

Distributed under the MIT License.







# Ratings and Reviews Module

This is an interactive ratings and reviews module that can usually be found on various Ecommerce product pages. The module alows user interaction in the following ways: A customer photos carousel; filter reivews by star rating; filter reviews by search queries (text field); sort reviews by specific criteria; a "Verify Buyer" tooltip that displays on mouse hover; Show More & Show Less conditional buttons; and a "Clear" button for currently active review filters.

## Related Projects

  - https://github.com/Unfair-dot-com/fec-main-carousel
  - https://github.com/Unfair-dot-com/product-detail-carousel

## Table of Contents

1. [Set-up](#Set-up)
1. [Requirements](#Requirements)
1. [Additonal-Notes](#Additonal-Notes)

## Set-up

In order to set-up the file, you will need to follow these steps: 

1) Rename the following files inside ```server/database/```

a) ```RENAME-ME-TO-CONFIG.js``` = ```config.js```

b) ```RENAME-ME-TO-CONNECTION.js``` = ```connection.js```

2) Inside of these files, add your MySQL username and password inside the quotations marks as requested.


3) Run the following commands from the command line inside the root folder:

a) Run ```npm install```.

b) Run ```npm run bundle```.

c) Run ```npm run build```.

## Requirements

- Node.js
- MySQL

## Additonal-Notes

The current seeding script found inside ```server/database/databaseSeeder.js``` will create a brand new database everytime the ```npm run build``` script is ran, or changes are made and saved while nodemon is running. To change this, you need to modifiy the ```db.connectAsync()``` function inside ```server/database/index.js```.
