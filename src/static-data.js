export const links = [
  { url: "/", title: "home" },
  { url: "/about", title: "about" },
  { url: "/portfolio", title: "portfolio" },
  { url: "/contact", title: "contact" },
];

export const skills = [
  "mongoose",
  "nextjs",
  "react",
  "node.js",
  "Redux",
  "typescript",
  "sass",
  "framer-motion",
  "pugjs",
  "bootstrap",
  "javascript",
  "css",
  "html",
  "express.Js",
  "firebase",
  "gulp",
  "git & github",
];

export const exp = [
  {
    align: "left",
    title: "Went To College",
    desc: "I went to college, where i started studying engineering. A year after, i specialized in comupter major.",
    date: "2017 - 2022",
    company: "Pharos University",
  },
  {
    align: "right",
    title: "Ground Training",
    desc: "Got Involved in the software development life cycle. learned how to plan for Software Design, Deployment and Maintenance. Collaborated with the team to identify customer requirements at the tech meeting, Learnt how the company signs actual contracts. Documented a report about client requirements in the meeting with different-role stakeholders.",
    date: "May 2019 - Aug 2019",
    company: "Egypt Experts",
  },
  {
    align: "left",
    title: "Started freelancing",
    desc: "I've managed to secure my first freelance gig with a client and developed a complete website for law purposes and her business",
    date: "May 2019 - Aug 2019",
    company: "",
  },
  {
    align: "right",
    title: "Graduation",
    desc: "Graduated from the college with B+ overall degree.",
    date: "2022",
    company: "Pharos University",
  },
  {
    align: "left",
    title: "Compeleted military service",
    desc: "I have demonstrated a keen eye for design and an understanding of user experience principles. I was the head designer of a printing center that was responsible for designing and printing on all sorts of materials such as banners, vinyl, flex, Also thermal printing like on T-shirts, cups, wood, and metal.",
    date: "2023-2024",
    company: "",
  },
];

export const projects = [
  {
    id: "dsad121",
    title: "Blogly",
    description:
      "Blogy is a fully functional blogs webiste. Authentication implemented with next-auth (github & credentials) providers, you can register, login, log out and create new blogs. Users can only update or delete existing ones that they have published. It allows users to create, read and share their thoughts with the world. Users can sign up or log in using email and password authentication or their GitHub accounts. Once logged in they are able to view all published blogs.",
    image:
      "https://github.com/Nyctophilus/blogly/raw/master/public/preview1.png",
    gitUrl: "https://github.com/Nyctophilus/blogly",
    previewUrl: "https://blogly-fayad.vercel.app/",
    skills: [
      "nextjs",
      "next-auth",
      "mongoose",
      "React",
      "NodeJS",
      "framer-motion",
      "tailwind",
      "material-tailwind",
      "bcrypt",
    ],
  },
  {
    id: 1,
    title: "React DashBoard",
    description:
      "This is a Dashboard which used a lot of react functionality to create. It has Main, login, Register, Error Pages. user login authentication with firebase login tokens (automatic login, automatic logout on token expires). Redux/toolkit used in state management.",
    image:
      "https://nyctophilus.github.io/Portfolio/assets/images/portfolio/DashBoard.webp",
    gitUrl: "https://github.com/Nyctophilus/DashBoard",
    previewUrl: "https://nyctophilus.github.io/DashBoard",
    skills: ["React.js", "Redux", "react-portals", "react-transition-group"],
  },
  {
    id: 2,
    title: "My Reads",
    description:
      "A Bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.",
    image:
      "https://nyctophilus.github.io/Portfolio/assets/images/portfolio/MyReads-React.webp",
    gitUrl: "https://github.com/Nyctophilus/MyReads-React",
    previewUrl: "https://nyctophilus.github.io/MyReads-React",
    skills: ["react", "react-router"],
  },
  {
    id: 3,
    title: "Quote React App",
    description:
      "This is my Third react project. storing/adding quotes app utilizing all react feature during learning process upon using react-router.",
    image:
      "https://nyctophilus.github.io/Portfolio/assets/images/portfolio/Quote-React-Router-App.webp",
    gitUrl: "https://github.com/Nyctophilus/Quotes--RouterProject",
    previewUrl: "https://mfayad-react-quotes-router-project.netlify.app",
    skills: ["react", "react-router"],
  },
  {
    id: 4,
    title: "Cocktail",
    description:
      "In this project, Implemented a search engine through cocktail API. using react/router, fetching and displaying cocktail by user demand.",
    image:
      "https://nyctophilus.github.io/Portfolio/assets/images/portfolio/Cocktails.webp",
    gitUrl: "https://github.com/Nyctophilus/Cocktails",
    previewUrl: "https://silver-cocktails-react-app.netlify.app/",
    skills: [
      "react",
      "react-router",
      "custom hooks",
      "advanced folder structure",
    ],
  },
  {
    id: 5,
    title: "Food Order App",
    description:
      "This is my second completed react project. Food ordering app utilizing all react feature during learning process.",
    image:
      "https://nyctophilus.github.io/Portfolio/assets/images/portfolio/Food-Order-App.webp",
    gitUrl: "https://github.com/Nyctophilus/Food-Order-App",
    previewUrl: "https://react-foodorder-cart.netlify.app/",
    skills: ["react", "custom hooks"],
  },
  {
    id: 6,
    title: "Image Processing API",
    description:
      "Image Processing App with an express server that manipulates images based on a server request with the dimensions and the image name.",
    image:
      "https://nyctophilus.github.io/Portfolio/assets/images/portfolio/image_processing_API.webp",
    gitUrl: "https://github.com/Nyctophilus/image_processing_API",
    previewUrl: "https://nyctophilus.github.io/image_processing_API",
    skills: ["express", "node", "typescript", "jasmine", "sharp.lib"],
  },
  {
    id: 7,
    title: "my old Portfolio",
    description: `y personal portfolio. I've tried to gather all the tricks & workarounds I learned so far, So it will serve as a showcase of my present skills! ,and my ability of build from scratch.`,
    image:
      "https://nyctophilus.github.io/Portfolio/assets/images/portfolio/Portfolio.webp",
    gitUrl: "https://github.com/Nyctophilus/Portfolio",
    previewUrl: "https://nyctophilus.github.io/Portfolio",
    skills: ["pug", "sass", "javascript", "gulp", "browser-sync"],
  },
  {
    id: 8,
    title: "fwd weather journal app",
    description:
      "Weather Journal App with Asynchronous JavaScript that uses Web API and user data to dynamically update the UI.",
    image:
      "https://nyctophilus.github.io/Portfolio/assets/images/portfolio/weatherApp.webp",
    gitUrl: "https://github.com/Nyctophilus/fwd-weather-journal",
    previewUrl: "https://nyctophilus.github.io/fwd-weather-journal",
    skills: ["express", "node", "javascript", "API"],
  },
  {
    id: 9,
    title: "Metis",
    description: "custom blog website 🤳. Basically UI/Sass practise!",
    image:
      "	https://nyctophilus.github.io/Portfolio/assets/images/portfolio/Metis.webp",
    gitUrl: "https://github.com/Nyctophilus/Metis",
    previewUrl: "https://nyctophilus.github.io/Metis",
    skills: [
      "pug",
      "sass",
      "javascript",
      "gulp",
      "browser-sync",
      "swiper.js",
      "sass mixins",
      "sass placeholders",
      "grid layout",
    ],
  },
  {
    id: 10,
    title: "Aero",
    description: `It's basically a practice JS Template. Mainly Focused on practical Javascript LocalStorage To Save User Settings, and take defaults when reload, randomly Change Background images at time intervals.`,
    image:
      "https://nyctophilus.github.io/Portfolio/assets/images/portfolio/Aero.webp",
    gitUrl: "https://github.com/Nyctophilus/Aero---Car-Accessories-Website",
    previewUrl: "https://nyctophilus.github.io/Aero---Car-Accessories-Website",
    skills: ["javascript", "localstorage", "html", "css", "performant"],
  },
];
