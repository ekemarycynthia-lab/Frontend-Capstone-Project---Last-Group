# Frontend Capstone Project - Last Group

A React web app that explores our solar system through data. It fetches real planet data from an external API and displays it in a responsive layout, alongside a planetary facts table and a validated contact form. Built as the capstone project for the TS Academy Frontend Development course (Phoenix Cohort).

## Live Demo

https://frontend-capstone-project-last-grou.vercel.app/

## Project Summary

The app recreates a provided Figma mockup as a working React application. It fetches planet names, distances from the sun and images from an external API and shows them in a responsive grid. It also includes an autoplaying, muted, looping video with a pause and play control, a comparative planetary facts table, and a contact form with client-side validation that submits to a live endpoint and confirms the submission. The layout adapts to a mobile view using flexible layouts and media queries. The project demonstrates HTML, CSS and JavaScript fundamentals, the Fetch API, React component architecture, responsive design, Git collaboration with pull requests, and deployment.

## Team Members

- [Ogechukwu (Team Lead)](https://github.com/ekemarycynthia-lab)
- [Feranmi (Assistant Lead)](https://github.com/Feranmi003)
- [Opeyemi](https://github.com/Faithfulfaith1211)
- [Oloruntoba](https://github.com/Mhide2023)

## Who Worked on What

| Member | Contribution |
| --- | --- |
| Ogechukwu | React components (Header, PlanetInfo, PlanetGallery, PlanetTable, ContactForm, Footer), CSS styling, Fetch API integration, form submission, favicon, deployment, repository cleanup |
| Feranmi | Assistant lead, README and documentation, project board |
| Opeyemi | Testing the live site, code review |
| Oloruntoba | QA against the Figma design, code review |

## Components

- Header: hero section with the logo, headline and two call-to-action links that scroll to the planets and the contact form
- PlanetInfo: autoplaying, muted, looping video (not an iframe) with a pause and play control, and intro text
- PlanetGallery: planets fetched from the API and displayed as figures with name and distance from the sun
- PlanetTable: planetary facts table, hidden in the mobile view as in the design
- ContactForm: validated form that posts to the endpoint and shows a success message
- Footer: team information and links

## Running the Project Locally

1. Clone the repository:

    git clone https://github.com/ekemarycynthia-lab/Frontend-Capstone-Project---Last-Group.git

2. Go into the app folder:

    cd Frontend-Capstone-Project---Last-Group/Capstone-Last-Group

3. Install dependencies:

    npm install

4. Start the development server:

    npm run dev

5. Open the local address shown in the terminal (usually http://localhost:5173).

## Tech Stack

React (Vite), CSS, JavaScript (Fetch API)

## Git Workflow

The initial version of the app and a repository cleanup were committed directly to main by the team lead. All later changes were made on separate branches and merged through pull requests, each reviewed by a teammate other than its author.

## Credits

Design by Amaka and Ifeoma A. Built for TS Academy.