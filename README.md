# Gumroad Discover Page Redesign

This project is a reimagined version of the Gumroad Discover page, focusing on enhancing user experience and discoverability of content. The redesign addresses existing issues and introduces new features to improve content visibility and user engagement.

## Table of Contents
- [Project Overview](#project-overview)
- [Technical Architecture](#technical-architecture)
- [Features](#features)
- [Installation and Setup](#installation-and-setup)

## Project Overview

### Background
Briefly describe the original Gumroad Discover page and the motivation behind this project.

### Objectives
List the key objectives of this redesign, such as enhancing user experience, improving SEO, and promoting creator content.

## Technical Architecture

### Technologies Used
- **Rails**: Backend API and server-side rendering.
- **React**: Frontend development for a dynamic and responsive user interface.
- **Other Libraries/Frameworks**: List any significant libraries or frameworks used in the project.

### Directory Structure
Provide an overview of your project's directory structure, explaining the organization of key components.
```
gumroad_redesign/
├── app/
│   ├── controllers/
│   │   ├── products_controller.rb
│   │   └── categories_controller.rb
│   ├── models/
│   │   ├── product.rb
│   │   └── category.rb
│   ├── views/
│   │   ├── products/
│   │   └── categories/
│   ├── services/
│   │   └── gumroad_api_service.rb
│   └── jobs/
│       └── gumroad_api_sync_job.rb
├── client/ # Using React within Rails, managed by webpacker
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── db/
│   ├── migrate/
│   └── schema.rb
├── config/
├── lib/
├── public/
├── test/
└── README.md
```

### Key Architectural Decisions
Discuss any major architectural decisions made during development, such as:
- Data modeling and API design.
- React component structure.
- State management approach.
- Any specific patterns or practices adopted.

## Features

### Existing Flaws Addressed
Detail how you addressed each identified flaw of the original Discover page.

### New Feature Additions
Explain the new features added, their purpose, and how they contribute to the project's objectives.

## Installation and Setup

Provide step-by-step instructions on how to install and set up the project locally. Include any prerequisites, such as Node.js or Ruby versions.

```bash
# Clone the repository
git clone [repository-url]

# Navigate to the project directory
cd [project-name]

# Install dependencies
...

# Setup the database
...

# Start the server
...
```

## Running this project

First, fork/download this project so you get your own copy of it. Once you have done that, you can clone your new repo to your machine, and get started.

You need **TWO** terminals for this.

In one terminal, run `bundle` to install the dependencies. Run `bin/rake db:setup` to create the databases (called rails_project_development by default). Run `bin/rails s` to run the server.

In the other terminal, `cd` into `client`. Run `npm install`. Rename the `.env.example` file to be called `.env`. Then run `npm start` and go to `localhost:3000` in your browser.

In the browser, you can click on the button and see the data get loaded.


### Additional Notes:

- **Personalize the Content**: Replace placeholders (like `[repository-url]`, `[project-name]`) with actual details of your project.
- **Elaborate on Each Section**: Provide in-depth explanations where needed, especially in areas like "Key Architectural Decisions" and "Features".
- **Reflect Your Work**: Ensure that the README accurately reflects your work and thought process.
- **Continuous Update**: Keep updating the README as your project evolves.


## Contact

Please contact me at `theshajha@gmail.com` if you have any questions.
