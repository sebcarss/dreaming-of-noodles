# Dreaming of Noodles

This is my personal recipe blog and food diary that allows me to capture my thoughts on my journey into the wonderful world of food discovery. 

## Prerequisites
---
```bash
# Install the node_modules before you start your development server
npm run install
```
Please ensure you are using the following versions of these libraries:

- Node version: 17.5.0
- NPM version: 8.4.1
- TypeScript version: 4.8.3

## Local development 
---
```bash
# Run the development server and go to http://localhost:3000/
npm run dev

# Run lint test
npm run lint

# Run unit tests
npm run test
```

## Testing
---
### Unit testing
> Unit testing is done with [Jest](https://facebook.github.io/jest/).
>
>Add your unit tests to the same location as the code which lives in the `/lib/`dir but name the test file with the same name as the file but with the `.test.js` extension.

### Component testing

>Component testing is done with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).
>
>Add your unit tests to the same location as the component which lives in the `/component/` dir but name the test file with the same name as the file but with the `.test.js` extension.
>

### Snapshot testing
>Snapshot testing is done with [Jest](https://facebook.github.io/jest/).
>
>The snapshots should be taken for the pages that are created in the `/pages/` dir but the tests should live in the `/pages-tests/` dir with a `.test.tsx` extension. The snapshots will be saved to `/pages-tests/__snapshots__`. When you run `npm run test` Jest will test the current snapshot against the previous one and fail if there are any changes. If the snapshot doesn't exist it will create one. If the snapshot fails and it is an expected change then you can hit `'u'` and Jest will update the snapshot. 
### End-To-End Testing

>End-to-end testing is done with [Cypress](https://docs.cypress.io/guides/getting-started/introduction.html).
>
>Cypress tests live in the `/cypress/integration/` dir. Name the test file with the same name as the page but with the `.spec.js` extension.


## Preparing a production build
---
Open a terminal

```bash
# Run the build command to build the static site to the out directory
npm run build

# Run the start command to start the static site in a browser
npm run start
# This will also make the site available on your network so go to http://<ip>:3000/
```

Open a new terminal to run the end-to-end tests

```bash
# Run the e2e tests
npm run cypress
```

When the Cypress window opens up run the e2e tests. 
If all the tests succeed then create a PR in Github and Netlify will create a preview build automatically.

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

## Adding a Region

To add a new region to a country create a new markdown file in the `/regions/` directory with the following structure (example):
    
```markdown
---
country: Japan
region: Hokkaido
gridLinkUrl: "/japan/hokkaido"
gridLinkImage: "/japan-hokkaido.jpg"
---
```

## Adding Styles to the Markdown

The `global.css` file should be used to update the styles from the Markdown files used for recipes. This is imported in the `_app.js` file so will be utilised across the site. For non-markdown files inline styling of the components can be used.  