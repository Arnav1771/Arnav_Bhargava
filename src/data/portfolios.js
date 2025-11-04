import pizza from '../img/portImages/pizza.png';
import chat from '../img/portImages/chat.png';
import clothing from '../img/portImages/clothing.png';
import movie from '../img/portImages/movie.png';
import tinder from '../img/portImages/tinder.png';
import zoom from '../img/portImages/zoom.png';
import twitter from '../img/portImages/twitter.png';
import prime from '../img/portImages/prime.PNG';
import disney from '../img/portImages/disney.PNG';
import youtube from '../img/portImages/yt.PNG';
import facebook from '../img/portImages/facebook.PNG';
import airbnb from '../img/portImages/airbnb.PNG';
import netflix from '../img/portImages/netflix.PNG';
import pizzaDev from '../img/portImages/pizzaDev.PNG';
import amazon from '../img/portImages/amazon.PNG';


const portfolios = [
    // {
    //     id: 31,
    //     category: 'Package & Extension',
    //     image: gpac,
    //     link1: 'https://github.com/ArnavBansal26/grapesjs-advance-components',
    //     link2: '',
    //     link3: 'https://www.npmjs.com/package/grapesjs-advance-components',
    //     title: 'Grapesjs Advance Components',
    //     text: 'Npm package using react js , grapesjs'
    // },
    // {
    //     id: 32,
    //     category: 'Package & Extension',
    //     image: vbSearchBlog,
    //     link1: 'https://github.com/ArnavBansal26/search-blog-vscode-extension',
    //     link2: '',
    //     link3: '',
    //     title: 'VSCode Extension',
    //     text: 'VSCode extension to search blogs'
    // },
    {
        id: 33,
        category: 'MERN',
        image: "https://photospace.life/ZP1ATR",
        link1: '',
        link2: 'https://youtu.be/iZTBue8Iy0o',
        link3: '',
        title: 'React Movie Booking System',
        text: 'React , TMDB'
    },
    {
        id: 24,
        category: 'React',
        image: disney,
        link1: 'https://github.com/Arnav1771/BlackCoffer_Energy_Dashboard',
        link2: '',
        link3: 'https://arnav1771.github.io/BlackCoffer_Energy_Dashboard/',
        title: 'Black Coffer Energy Dashboard',
        text: 'React, Styled Components, Firebase'
    },
    {
        id: 25,
        category: 'React',
        image: youtube,
        link1: 'https://github.com/Arnav1771/test17',
        link2: '',
        link3: 'https://yeah-ebon.vercel.app/',
        title: 'Task Manager App',
        text: 'React'
    },
    {
        id: 26,
        category: 'React',
        image: facebook,
        link1: 'https://github.com/Arnav1771/webcamKnn',
        link2: '',
        link3: '',
        title: 'WebcamKnn: Real-time Webcam Classification using KNN and MobileNet',
        text: 'Python, React, Next JS, Tailwind CSS, Tensorflow.js'
    },
    {
        id: 27,
        category: 'Machine Learning',
        image: airbnb,
        link1: 'https://github.com/Arnav1771/Tornado_Prediction_in_india',
        link2: '',
        link3: 'https://react-airbnb-vb.web.app/',
        title: 'Tornado Prediction in India',
        text: 'Python, Flask, Pandas, scikit-learn, HTML, Bootstrap, Plotly'
    },
    {
        id: 28,
        category: 'React',
        image: netflix,
        link1: 'https://github.com/Arnav1771/Boot_Portfolio',
        link2: '',
        link3: 'https://arnav-bhargava.bss.design/#about',
        title: 'Bootstrap Portfolio',
        text: 'React, Google Map API, BootStrap'
    },
    {
        id: 29,
        category: 'Node JS',
        image: pizzaDev,
        link1: 'https://github.com/Arnav1771/Speech_to_-Text_Project',
        link2: '',
        link3: 'https://arnav1771.github.io/Speech_to_-Text_Project/Prototype.html?room=BGjevwX&lang=en-US',
        title: 'Speech to Text College Project',
        text: 'HTML, CSS, Javascript, WebSockets'
    },
    {
        id: 30,
        category: 'MERN',
        image: amazon,
        link1: 'https://github.com/Arnav1771/Mern_BS_JS',
        link2: '',
        link3: 'https://arnav1771.github.io/Mern_BS_JS/',
        title: 'Boot Strap and Mern Stack Mini Projects',
        text: 'HTML, CSS , Javascript, Bootstrap, Font Awesome'
    },
    {
        id: 1,
        category: 'Node JS',
        image: pizza,
        link1: 'https://github.com/Arnav1771/Team_Daddies_AgroTech',
        link2: '',
        link3: 'https://arnav1771.github.io/Team_Daddies_AgroTech/',
        title: 'Agro Tech Hackathon',
        text: 'HTML, CSS, JS, Bootstrap, Google Fonts'
    },
    {
        id: 2,
        category: 'Machine Learning',
        image: chat,
        link1: 'https://github.com/Arnav1771/Axe-Consultancy-Tasks',
        link2: '',
        link3: '',
        title: 'Axe Consultancy Task',
        text: 'Python, Pandas, Sql, Beautiful Soup'
    },
    {
        id: 3,
        category: 'Machine Learning',
        image: clothing,
        link1: 'https://github.com/Arnav1771/Therapist-and-Child-Detection-and-Tracking',
        link2: '',
        link3: '',
        title: 'Therapist and Child tracking Detection using YOLO',
        text: 'Python , YOLO, Docker'
    },
    {
        id: 19,
        category: 'Machine Learning',
        image: prime,
        link1: 'https://github.com/Arnav1771/CS50_Python_Ai',
        link2: '',
        link3: 'https://cs50.harvard.edu/certificates/b335b1f7-89a6-41c5-88aa-e41429c0ff8c',
        title: 'Python AI CS50',
        text: 'Python, APIs'
    },
    {
        id: 12,
        category: 'Machine Learning',
        image: prime,
        link1: 'https://github.com/Arnav1771/CS50_Python',
        link2: '',
        link3: 'https://cs50.harvard.edu/certificates/1657453c-63ae-4895-a1f2-31b6c19387d8',
        title: 'Python CS50',
        text: 'Python, APIs'
    },
    {
        id: 20,
        category: 'Machine Learning',
        image: prime,
        link1: 'https://github.com/Arnav1771/CS50_Python_Ai',
        link2: '',
        link3: 'https://cs50.harvard.edu/certificates/56b1e036-36c0-4e81-b457-d3de8591fb5d',
        title: 'CS50 R Programming',
        text: 'Python, APIs'
    },
    {
        id: 4,
        category: 'Machine Learning',
        image: movie,
        link1: 'https://github.com/Arnav1771/RL_Bot_Training',
        link2: '',
        link3: '',
        title: 'Rocket League Bot',
        text: 'Python, Reinforcement Learning'
    },
    {
        id: 5,
        category: 'Machine Learning',
        image: tinder,
        link1: 'https://github.com/Arnav1771/Zidio_3_Month_Internship',
        link2: '',
        link3: '',
        title: 'Zidio 3 Month Internship',
        text: 'Python, Tensorflow, Keras, Kaggle Datasets'
    },
    {
        id: 6,
        category: 'Game Dev',
        image: zoom,
        link1: 'https://github.com/Arnav1771/Tiles_Broker',
        link2: '',
        link3: '',
        title: 'Godot Platformer Game',
        text: 'Tiles Broker'
    },
    {
        id: 7,
        category: 'Machine Learning',
        image: twitter,
        link1: 'https://github.com/Arnav1771/Vit_Capstone_proj',
        link2: '',
        link3: '',
        title: 'Vit Bhopal Capstone Project',
        text: 'Tensorflow, CNN'
    },
    // {
    //     id: 8,
    //     category: 'React',
    //     image: slack,
    //     link1: 'https://github.com/ArnavBansal26/React-Slack-vb',
    //     link2: '',
    //     link3: 'https://react-slack-apl.web.app/,        ',
    //     title: 'React Slack UI',
    //     text: 'React and Firebase'
    // },
    // {
    //     id: 9,
    //     category: 'React',
    //     image: whatsapp,
    //     link1: 'https://github.com/ArnavBansal26/React-Whatsapp-UI',
    //     link2: '',
    //     link3: 'https://react-whatsapp-Arnav.web.app/',
    //     title: 'React Whatsapp UI & Messaging',
    //     text: 'React and Firebase'
    // },
    // {
    //     id: 10,
    //     category: 'React',
    //     image: spotify,
    //     link1: 'https://github.com/ArnavBansal26/React-spotify-vb',
    //     link2: '',
    //     link3: 'https://react-spotify-apl.web.app/',
    //     title: 'React Spotify Clone',
    //     text: 'React and Firebase'
    // },
    // {
    //     id: 11,
    //     category: 'MERN',
    //     image: yt1,
    //     link1: 'https://github.com/ArnavBansal26/React-Mern-Youtube',
    //     link2: '',
    //     link3: 'https://mern-youtube-vb.herokuapp.com/',
    //     title: 'MERN Youtube Application',
    //     text: 'Mongo DB, Express JS, React JS, Node JS - Register & Login to use Features '
    // },
    // {
    //     id: 13,
    //     category: 'Node JS',
    //     image: tour,
    //     link1: 'https://github.com/ArnavBansal26/node-natours-travel-app',
    //     link2: '',
    //     link3: 'https://natours-booking-app-Arnav.herokuapp.com/',
    //     title: 'Travelling and Adventrous Tour App with Stripe',
    //     text: 'Server Side Rendering - Node JS, PUG Templates, Stripe Integration'
    // },
    // {
    //     id: 14,
    //     category: 'Machine Learning',
    //     image: natural,
    //     link1: 'https://github.com/ArnavBansal26/Capstone-2020-Natural-Disaster-Prediction',
    //     link2: 'https://www.youtube.com/watch?v=Gad5vz1Pkcc',
    //     link3: '',
    //     title: 'Natural Disaster Prediction & Management ',
    //     text: 'Python, Flask, Google API,Machine Learning Algorithms, Deep Learning Methods'
    // },
    // {
    //     id: 15,
    //     category: 'React',
    //     image: hulu,
    //     link1: 'https://github.com/ArnavBansal26/React-Hulu',
    //     link2: '',
    //     link3: 'https://react-hulu-vb.web.app/',
    //     title: 'React Hulu Clone',
    //     text: 'React'
    // },
    // {
    //     id: 16,
    //     category: 'React',
    //     image: news,
    //     link1: 'https://github.com/ArnavBansal26/React-news-app-ui',
    //     link2: '',
    //     link3: 'https://daily-newz.web.app/',
    //     title: 'React NEWZ App',
    //     text: 'React and API'
    // },
    // {
    //     id: 17,
    //     category: 'React',
    //     image: nba,
    //     link1: 'https://github.com/ArnavBansal26/React-Nba-app',
    //     link2: '',
    //     link3: 'https://react-nba-Arnav.web.app/',
    //     title: 'React NBA App',
    //     text: 'React'
    // },
    // {
    //     id: 18,
    //     category: 'React',
    //     image: artist,
    //     link1: 'https://github.com/ArnavBansal26/React-Artist-vb',
    //     link2: '',
    //     link3: 'https://react-artist-a0b21.web.app/',
    //     title: 'React Music Artist App',
    //     text: 'React'
    // },
   
    // {
    //     id: 21,
    //     category: 'React',
    //     image: trello,
    //     link1: 'https://github.com/ArnavBansal26/React-trello',
    //     link2: '',
    //     link3: 'https://react-trello-vb.web.app',
    //     title: 'React Trello UI',
    //     text: 'React'
    // },
    // {
    //     id: 22,
    //     category: 'React',
    //     image: tiktok,
    //     link1: 'https://github.com/ArnavBansal26/React-tiktok-UI',
    //     link2: '',
    //     link3: 'https://mern-tiktok-vb.web.app/',
    //     title: 'React Tiktok UI',
    //     text: 'React'
    // },
    // {
    //     id: 23,
    //     category: 'React',
    //     image: covid,
    //     link1: 'https://github.com/ArnavBansal26/React-Covid-Tracker',
    //     link2: '',
    //     link3: 'https://react-covid-vb.web.app/',
    //     title: 'React Covid 19 Tracker',
    //     text: 'React, Context API'
    // },
    
    
]

export default portfolios;