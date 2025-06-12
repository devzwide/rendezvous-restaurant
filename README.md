# Rendezvous Restaurant Web App – Codebase Documentation

## Overview

This project is a React-based web application for Rendezvous Restaurant, a student-run dining experience at Durban University of Technology. The codebase implements a modern authentication flow, responsive UI, and integrates Firebase for user management and data storage. The design leverages Tailwind CSS for styling and React Router for navigation.

---

## Key Features

- **Authentication Flow**  
  - Email/password sign-up and login using Firebase Auth.
  - Form validation for user registration and login.
  - Placeholders for Google authentication integration.
  - User data stored in Firestore upon registration.

- **UI Components**  
  - Responsive authentication pages styled with Tailwind CSS.
  - Consistent site navigation via Header and Footer components.
  - Hero section on the homepage introducing the restaurant.

- **Routing**  
  - Client-side routing with React Router.
  - Separate routes for home and authentication pages.

- **Firebase Integration**  
  - Configuration via environment variables.
  - Modular setup for authentication and Firestore.

---

## Project Structure

```
rendezvous-restaurant/
├── documentation/
│   └── rendezvous.md         # Restaurant and project documentation
├── server/
│   ├── server.js             # Express server (minimal setup)
│   └── package.json
├── web/
│   ├── src/
│   │   ├── authentication/
│   │   │   ├── components/   # Login and Signup forms
│   │   │   ├── firebase/     # Firebase Auth and Firestore logic
│   │   │   └── Authentication.jsx
│   │   ├── components/       # Header, Footer, Hero
│   │   ├── config/           # Firebase config
│   │   ├── landing/          # Home page and layout
│   │   ├── assets/           # Tailwind CSS
│   │   ├── main.jsx          # App entry point
│   │   └── router.jsx        # React Router setup
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── .env                  # Firebase environment variables
└── README.md
```

---

## Authentication Flow

- **Signup**  
  - User fills out the registration form (`Signup.jsx`).
  - Form validates password match and terms acceptance.
  - On submit, calls `signUpWithEmailAndPassword` (Firebase Auth).
  - Generates a username and creates a user document in Firestore (`newUser`).
  - Redirects to home on success.

- **Login**  
  - User fills out the login form (`Login.jsx`).
  - On submit, calls `SignIn` (Firebase Auth).
  - Redirects to home on success.

- **Google Auth**  
  - Placeholder functions exist for future Google authentication integration.

- **Authentication Wrapper**  
  - `Authentication.jsx` toggles between Login and Signup forms.
  - Responsive, animated layout with Tailwind CSS.

---

## UI Components

- **Header**  
  - Navigation links (Home, About, Menu, Events, Gallery, Contact).
  - Dropdown for About section.
  - "Book A Table" dialog (popup).
  - Login button.

- **Footer**  
  - Restaurant info, quick links, contact details, and social media icons.

- **Hero**  
  - Prominent welcome section on the homepage.

---

## Routing

- **`router.jsx`**  
  - `/` → Home page (with Header, Footer, Hero).
  - `/auth` → Authentication page (Login/Signup).

---

## Firebase Integration

- **Config**  
  - `/src/config/firebase.config.jsx` initializes Firebase using `.env` variables.

- **Auth**  
  - `/src/authentication/firebase/FirebaseAuth.jsx` handles sign-up, sign-in, and sign-out.

- **Firestore**  
  - `/src/authentication/firebase/FirebaseFirestore.jsx` adds new user documents to Firestore.

---

## Styling

- **Tailwind CSS**  
  - Used throughout for rapid, responsive UI development.
  - Configured via `vite.config.js` and imported in `styles.css`.

---

## Commit Summary

> **feat: Implement authentication flow with login and signup components**
>
> - Added Authentication component to handle user login and signup.
> - Created Login and Signup components with form validation and Google authentication placeholders.
> - Integrated Firebase authentication for email/password sign-up and sign-in.
> - Set up Firestore to store new user data upon registration.
> - Developed a responsive layout for authentication pages using Tailwind CSS.
> - Added Footer and Header components for consistent site navigation and branding.
> - Implemented a Hero section on the homepage to introduce the restaurant.
> - Configured Firebase in the application with environment variables.
> - Established routing for the application using React Router.
> - Included Tailwind CSS for styling throughout the application.

---

## References

- [Firebase Auth & Firestore Integration](web/src/authentication/firebase/)
- [Authentication Components](web/src/authentication/components/)
- [Routing Setup](web/src/router.jsx)
- [UI Components: Header, Footer, Hero](web/src/components/)
- [Firebase Config](web/src/config/firebase.config.jsx)
- [Tailwind CSS Setup](web/vite.config.js), [web/src/assets/styles/styles.css](web/src/assets/styles/styles.css)

---

For more details, see [documentation/rendezvous.md](documentation/rendezvous.md).