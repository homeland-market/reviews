# Homeland Market: Ratings & Reviews
An ecommerce ratings and reviews module that features filtering, sorting, searching, voting, and a handy customer photo carousel!

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
    * [Preload Animation](#preload-animation)
    * [Star Score Filtering](#star-score-filtering)
    * [Customer Photo Carousel](#customer-photo-carousel)
    * [Review Sorting](#review-sorting)
    * [Review Upvoting](#review-upvoting)
    * [Text Filtering & Highlighting](#text-filtering--highlighting)
    * [Buyer Verification](#buyer-verification)
3. [Built With](#built-with)
4. [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
5. [Contributing](#contributing)
6. [Contact](#contact)
7. [Acknowledgements](#acknowledgements)
8. [Related Projects](#related-projects)
9. [License](#license)

## Overview
<p align="center" height="200"><img src="https://i.imgur.com/RKP8Bpo.png"></p>

This interactive ratings and reviews module is the ideal solution for displaying customer's feedback. The application has a strong focus on user interaction, allowing reviews to be filtered, sorted, and searched in a variety of different ways (see [Features](#features) for more info). The component is fully responsive right out of the box, allowing for seamless integration across all media platforms. For further information on how to get started, please see the conveniently named [Getting Started](#getting-started) section below.

## Features

### Preload Animation
<p><img src="https://media.giphy.com/media/6rso7ryZINLPWRd2nj/giphy.gif"></p>

The component features a preloading state animation that runs until all review data has been successfully fetched from the database. This feature is to reduce snapping/popping of information when there are longer than expected query times on the page's initial load.

---

### Star Score Filtering
<p><img src="https://media.giphy.com/media/sMfkPLBoCVxxBnZsVf/giphy.gif"></p>

You can filter reviews by different star ratings - 1 star, 2 star, 3 star, 4! (and 5). When a specific star is clicked, the screen automatically scrolls to the review body section where the corresponding reviews are displayed. You can clear the filter one of four ways: clicking the 'clear' button just above the body of reviews,  selecting another star to filter from the list, clicking on the original star rating to toggle off the selection, or [filtering reviews by text search](#text-filtering--highlighting). Filtered reviews can also be sorted while still maintaining the filtering condition - see [Review Sorting](#review-sorting) for more information.

---

### Customer Photo Carousel
<p><img src="https://media.giphy.com/media/6FavGp8XNpDWgsUvES/giphy.gif"></p>

The Customer Photo Carousel syncs its images with reviews that included a photo. The carousel makes use of React.createRef() to calculate the current container size to snap images into place. If the screen size is altered mid-transition, the component will recalculate the width and snap the next image back into place: images will always display no matter the user's screen size. If there are no customer photos associated with any reviews, the carousel is automatically hidden; if there aren't enough images to require a scrolling effect, the scroll buttons are hidden.

---

### Review Sorting
<p><img src="https://media.giphy.com/media/T8YfkYLxp9rKD9oitr/giphy.gif"></p>

You can sort reviews by the following criteria: <em>Most Relevant, Includes Customer Photos, Most Recent,</em> and <em>Most Helpful</em>. Sort criteria remain persistent even through review filtering. For example, if you sorted all reviews by <em>Most Helpful</em> then filtered the reviews by a [Text Filtering](#text-filtering--highlighting), the newly filtered reviews list would still be sorted by Most Helpful. By default, reviews are sorted using the Most Relevant method. 

---

### Review Upvoting
<p><img src="https://media.giphy.com/media/WQj4zfisO19Y0HqKxQ/giphy.gif"></p>

Each review has it's own Helpful Button. Users can upvote the reviews they find helpful by clicking on the corresponding button. When a Helpful Button is clicked (toggled on), a PUT request gets sent to the server, and the review data inside the database gets updated. If the button is toggled off, another PUT request is sent to update the database. At present, users can only toggle each review on or off: there is no downvoting option. If the page is refreshed, the new helpful total will display.

---

### Text Filtering & Highlighting
<p><img src="https://media.giphy.com/media/mOHlEqcXMTCT4FQPMv/giphy.gif"></p>

By typing a word or phrase into the search bar and pressing enter - or clicking on the search button - reviews can be filtered by that word or phrase. Only the review's comment text is searched - you can not filter by reviewer name or location. Words and phrases are not case sensitive; white space is removed from search words/phrases automatically.

---

### Buyer Verification
<p><img src="https://media.giphy.com/media/Z2VnAhVo9sjYkUNOcM/giphy.gif"></p>

Each review displays a handy tooltip that verifies the review was left by an authentic buyer. Hover over the text to display the tooltip message. There is no way to add reviews via the display module: the module's designed so that reviews are left by email requests or via a separate link. 

---

## Built With

This Reviews & Ratings module is built with the following technologies:
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [MySQL](https://www.mysql.com/)

## Getting Started

### Prerequisites

Node.js and npm are required in order to quickly get up and running with this project. Lukily, npm is distributed with Node.js - which means that when you download Node.js, you automatically get npm installed on your computer! You can install Node.js [HERE](https://nodejs.org/en/).

MySQL is the database of choice for this project. To install and set up MySQL, please follow the instructions found [HERE](https://dev.mysql.com/doc/refman/8.0/en/installing.html)

### Installation


1. Rename the following files inside ```server/database/```

```sh
RENAME-ME-TO-CONFIG.js = config.js
RENAME-ME-TO-CONNECTION.js = connection.js
```

2. Inside of these files, add your `MySQL` username and password.

```js
user: 'USERNAME-HERE',
password: 'PASSWORD-HERE',
```


3. Run the following commands from the command line inside the root folder:

```
npm install
npm run bundle
npm run build
```

<b>Please note:</b> The current seeding script found inside ```server/database/databaseSeeder.js``` will create a brand new database everytime the ```npm run build``` script is run, or changes are made and saved while nodemon is running. To change this, you need to modifiy the `db.connectAsync()` function inside `server/database/index.js`.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Website - [www.mattwigg.com](https://www.mattwigg.com/)

Professional - [LinkedIn](https://www.linkedin.com/in/matt-wigg/)

Project Link: [https://github.com/homeland-market/reviews/](https://github.com/homeland-market/reviews/)

## Acknowledgements

* [React-Select](https://react-select.com/home)
* [React-Star-Ratings](https://github.com/ekeric13/react-star-ratings)
* [React-Tooltip](https://github.com/wwayne/react-tooltip)
* [Styled-Components](https://styled-components.com/)
* [Bluebird](http://bluebirdjs.com/docs/getting-started.html)
* [Nodemon](https://github.com/remy/nodemon)
* [Axios](https://github.com/axios/axios)
* [Google Fonts](https://fonts.google.com/)

## Related Projects

  - https://github.com/homeland-market/fec-main-carousel
  - https://github.com/homeland-market/product-detail-carousel
  - https://github.com/homeland-market/addToCartService

## License

Distributed under the MIT License.
