# Storyblok React Starter with Yext Search React Components

Demonstration of how to add Search Headless React components to generate a search results page that can be added on a Storyblok project. 

Use this repo to view the source code for the completed Storyblok x Yext React Project. This repo contains code that generates a search results landing page for a mock travel blog website that contains a Yext powered search experience. This project was created using the Storyblok React Starter (https://github.com/storyblok/storyblok-react-starter) and Yext React Components (https://github.com/yext/search-headless-react).

This Storyblok React x Yext project contains code to support three entity types (author, guides, and blog posts). Please use the Storyblok x Yext Demo guide from Yext Hitchhikers site to customize this search results landing page. This project includes Yext platform configuration files to quickly pull content from Storyblok content to Yext, configure custom entity types used in this project, and generate a Yext search experience.

This repo contains custom configurations to setup three Storyblok connectors, two custom entity types, two labels and five new data fields.

### Entity Types included
- Author
- Guides
- Help Article

## Steps to initalize the project for Storyblok x Yext Travel Blog can be found on the Storyblok Hitchhiker Guide. 

A high-level summary of the steps are included below.
1. Apply the platform-config files to your Yext account to configure the Yext search experience
  - Note the Yext API and Experience Key for your reference
2. Copy the Storyblok space to your Storyblok account 
  - Note the Storyblok Preview API Key for your reference
3. Open the repo locally and inject the Storyblok Preview API key, Yext API key, and Experience key where appropriate in the main.tsx file.

In the project directory, you can run:

`npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173/search](http://localhost:5173/search) to view it in the browser.

The page will reload if you make edits.\
