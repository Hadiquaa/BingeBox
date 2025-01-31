# Movie App

A movie discovery app that allows users to browse movies and series, view details, and add them to their favorites list.

## Features

- **Search for Movies & Series**: Fetch data from the OMDB API to search and display movies and TV series.
- **Favorites**: Add movies to the favorites list with a heart icon. Uses Redux Toolkit for state management.
- **Modal**: View detailed movie information in a modal when a movie poster is clicked.
- **Responsive Design**: Built using Tailwind CSS for a responsive and user-friendly interface.

## Tech Stack

- **React**: Used to build the UI and manage the app's structure.
- **Redux Toolkit**: Used for global state management, specifically to manage the favorites list.
- **Tailwind CSS**: Used for styling, providing a flexible, utility-first CSS framework.
- **OMDB API**: Used to fetch movie and series data based on user search.
- **React Hooks (useState, useEffect, useRef)**:
  - **useState**: Used to manage state for the modal, movie data, and scroll positions.
  - **useEffect**: Used to handle side-effects, such as fetching data from the OMDB API and checking for scroll end.
  - **useRef**: Used for direct DOM manipulation, such as controlling the scroll behavior of movie sliders.

