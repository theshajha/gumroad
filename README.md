# Gumroad Discover Page Redesign

This project is a reimagined version of the Gumroad Discover page, focusing on enhancing user experience and discoverability of content. The redesign addresses existing issues and introduces new features to improve content visibility and user engagement.

## Accessing the project
- Codebase is available at - [Github Repo](https://github.com/theshajha/gumroad)
- App is deployed on - [Deployed App](https://gumroad.replit.app)
- Figma prototype link - [Figma Prototype](https://www.figma.com/proto/QzWPLXCR22BIl1QbUwuBO6/Gumroad-Discover?page-id=0%3A1&type=design&node-id=0-3&viewport=1235%2C604%2C0.39&t=odHZJLvMCeU6NJQH-1&scaling=scale-down-width&starting-point-node-id=0%3A3&mode=design)

## Table of Contents
- [Technical Architecture](#technical-architecture)
- [Installation and Setup](#installation-and-setup)

## Technical Architecture

### Technologies Used
- **Rails**: Backend API and server-side rendering.
- **React**: Frontend development for a dynamic and responsive user interface.
- **Other Libraries/Frameworks**: Tailwind

### Directory Structure
Provide an overview of your project's directory structure, explaining the organization of key components.
```
gumroad_redesign/
├── app/
│   ├── controllers/
│   │   ├── api/
│   │   │   ├── products_controller.rb
│   │   │   └── categories_controller.rb
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
|   └── seeds.rb
├── config/
├── lib/
├── public/
├── test/
└── README.md
```

### Key Architectural Decisions

- Decided to build a dummy product and category model using sqlite
- Seed data to the tables, and host the endpoints via `/api`
- Seed data to the tables, and host the endpoints via `/api`
- Single shell script to check and run necessary actions
- Pagination, caching and dynamic querying of data
- Build and serve react via the `public` folder instead of running on two ports
- Atomic design approach for UI components

### Product Changes
- Moved the Category menu to left panel for better visibility
- Made search result modal more prominent for data visualisation
- Added Start Selling button in top Nav for quick access - this can change to Go to Dashboard if the user is logged in

### What more could be done
- Mobile responsiveness
- Data abtraction and how it gets accessed by the react app can be optimised further
- Search implementation is pretty basic to showcase UI possibility

## Installation, Setup and Running this project

Instructions to install and set up the project locally. Assumes you have Ruby ~> 3.3.0 installed on your system

```bash
# Clone the repository
git clone https://github.com/theshajha/gumroad

# Navigate to the project directory
cd gumroad

# Build the project
chmod +x build.sh && ./build.sh

# Running via shell script
chmod +x start.sh && ./start.sh

# Using Foreman
Foreman start
```

## Contact

Please contact me at `theshajha@gmail.com` if you have any questions.
