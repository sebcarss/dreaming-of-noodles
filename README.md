# Dreaming of Noodles

This is my personal recipe blog and food diary that allows me to capture my thoughts on my journey into the wonderful world of food discovery. 

## Prerequisites

Node version: v17.5.0

## Getting Started

```bash
# Run the development server and go to http://localhost:3000/
npm run dev

# Run the build command to build the static site to the out directory
npm run build

# Run the start command to start the static site in a browser
npm run start
# This will also make the site available on your network so go to http://<ip>:3000/

# Run the lint command to lint the code
npm run lint

# Run the test command to run the tests in watch mode
npm run test
```

## Adding a Recipe

To add a recipe create a new markdown file in the `/posts/` directory with the following structure (example):
    
```markdown
---
title: Traditional Baguette with Poolish Starter
excerpt: "A lovely crispy baguette, which will take you back to France as soon as you hear the crunch of the crust under your knife."
date: '2020-08-15'
tags: ['bread', 'poolish', 'baguette']
image: 'https://dreamingofnoodles.s3.eu-west-1.amazonaws.com/images/baguette-with-poolish.jpeg'
published: true
---
```

You will need to add an image to the S3 bucket `dreamingofnoodles.s3.eu-west-1.amazonaws.com` with the `/images/` prefix. __Remember to make the image public.__

The recipe shoud be written up in the markdown format, which will convert to HTML and be displayed on the site.