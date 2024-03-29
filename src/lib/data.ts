export const projects = [
    {
        title: 'MiXR',
        slogan: 'Make everything come to life',
        img: '/assets/images/mixr.png',
        color: '#7E41A5',
        demo: 'https://mixr.tripod-digital.com/',
        slug: 'mixr',
        description:
            'MiXR is a web application that simplifies the process of creating augmented reality in a quick and simple way. Just uploading the desirable content and choosing a few easy configurations, any user can create their own AR.',
        design: {
            title: 'UX / UI Design',
            description:
                'Create and adapt the user flow to make it as simple as possible. Transform a complex concept accessible to all kinds of users. Design the brand, logo and user interface to make it appealing and intuitive. Make the design real developing using React, Typescript, CSS modules, Stripe and Firebase.',
            challenges:
                "Make the augmented reality concept easy and intuitive to all users. At the start, the project didn't have the brand design definition or pictures as references. I was responsible for designing the logo and creating pictures to explain how augmented reality works and what each part of the experience personalization meant.",
            solution:
                'The form to upload the AR was a single page with a huge amount of inputs and setups. The first thing to make the experience less intimidating, I split the process into easy and quick steps and the personalization as optional and just showing if necessary at the right moment. In the end, the user was able to launch the AR online faster and easier.',
            iframe: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F4EO0OWcXHlK6HFy7nigNrt%2FUntitled%3Fnode-id%3D1%253A1574',
        },
        tools: [
            {
                name: 'React',
                icon: '/assets/icons/react.png',
            },
            {
                name: 'TypeScript',
                icon: '/assets/icons/typescript.png',
            },
            {
                name: 'CSS',
                icon: '/assets/icons/css.png',
            },
            {
                name: 'Firebase',
                icon: '/assets/icons/firebase.png',
            },
            {
                name: 'Github',
                icon: '/assets/icons/github.png',
            },
            {
                name: 'Figma',
                icon: '/assets/icons/figma.png',
            },
            {
                name: 'Whimsical',
                icon: '/assets/icons/whimsical.png',
            },
        ],
    },
    {
        title: 'Motorly',
        slogan: 'Find cars in a snap',
        img: '/assets/images/motorly.png',
        color: '#FF0042',
        demo: 'https://motorly.nz/',
        slug: 'motorly',
        description:
            'Motorly is a mobile application that helps to find cars using their number plate or uploading a photo. It looks for offers on TradeMe and Facebook and gives the lowest, highest, and average prices. Also, a few useful information about the requested car like model, engine, year, etc.',
        design: {
            title: 'UI Design',
            description:
                'Re-design the landing page and develop the search function using the supplied API provided by the backend team.',
            challenges:
                'Re-design the landing page into a modern and appealing first impression using the supplied pictures and content. Define the other pages structure and user flow on the web.',
            solution:
                'To understand the client taste, I provided a few design references and designed some prototypes on Figma to get to the final look before development. Programmed the design to work on desktop and mobile using Next.js (React SSR), CSS Modules and Firebase Auth. ',
            iframe: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FevsnG3OIVbBkKs9I50GNM4%2FMotory-Design-Process%3Fnode-id%3D0%253A1',
        },
        tools: [
            {
                name: 'React',
                icon: '/assets/icons/react.png',
            },
            {
                name: 'Next',
                icon: '/assets/icons/next.png',
            },
            {
                name: 'JavaScript',
                icon: '/assets/icons/javascript.png',
            },
            {
                name: 'CSS',
                icon: '/assets/icons/css.png',
            },
            {
                name: 'Firebase',
                icon: '/assets/icons/firebase.png',
            },
            {
                name: 'Figma',
                icon: '/assets/icons/figma.png',
            },
            {
                name: 'Github',
                icon: '/assets/icons/github.png',
            },
        ],
    },
    {
        title: 'Countries Rank',
        slogan: 'Check some data by country',
        img: '/assets/images/countries-rank.png',
        color: '#ff9c00',
        github: 'https://github.com/dpisati/countries-rank',
        demo: 'https://dp-countries-rank.vercel.app/',
        slug: 'countries-rank',
        description:
            'World Ranks is a web application that lists countries and provide information such as: capital, subregion, language, currency, native name, Gini and neighbours countries. The front-end was build using Next.js using external API for data.',
        tools: [
            {
                name: 'React',
                icon: '/assets/icons/react.png',
            },
            {
                name: 'Next',
                icon: '/assets/icons/next.png',
            },
            {
                name: 'Javascript',
                icon: '/assets/icons/javascript.png',
            },
            {
                name: 'CSS',
                icon: '/assets/icons/css.png',
            },
            {
                name: 'Github',
                icon: '/assets/icons/github.png',
            },
        ],
    },

    {
        title: 'Happy',
        slogan: 'Find orphanages nearby',
        img: '/assets/images/happy.png',
        color: '#25B8D0',
        github: 'https://github.com/dpisati/happy_app',
        slug: 'happy',
        description:
            'This application was made during the Next Level Week promoted by Rocketseat. This app will show orphanages nearby. You can also create an account and add orphanages that wasnt listed. This registration will be waiting for the administrator to approve.',
        tools: [
            {
                name: 'React',
                icon: '/assets/icons/react.png',
            },
            {
                name: 'React Native',
                icon: '/assets/icons/react.png',
            },
            {
                name: 'Node',
                icon: '/assets/icons/node.png',
            },
            {
                name: 'Typescript',
                icon: '/assets/icons/typescript.png',
            },
            {
                name: 'CSS',
                icon: '/assets/icons/css.png',
            },
            {
                name: 'Github',
                icon: '/assets/icons/github.png',
            },
        ],
    },
    {
        title: 'Ecollect',
        slogan: 'Find recycling centres nearby',
        img: '/assets/images/ecollect.png',
        color: '#2eae69',
        github: 'https://github.com/dpisati/ecollect_app',
        slug: 'ecollect',
        description:
            'This application was made during the Next Level Week promoted by Rocketseat. The idea to create an ecological application came up inspired by the World Environment Day. The goal is to encourage awareness and action for the protection of the environment.',
        tools: [
            {
                name: 'React',
                icon: '/assets/icons/react.png',
            },
            {
                name: 'React Native',
                icon: '/assets/icons/react.png',
            },
            {
                name: 'Node',
                icon: '/assets/icons/node.png',
            },
            {
                name: 'Typescript',
                icon: '/assets/icons/typescript.png',
            },
            {
                name: 'CSS',
                icon: '/assets/icons/css.png',
            },
            {
                name: 'Github',
                icon: '/assets/icons/github.png',
            },
        ],
    },

    {
        title: 'Letmeask',
        slogan: 'Ask me anything!',
        img: '/assets/images/letmeask.png',
        color: '#ea4235',
        github: 'https://github.com/dpisati/letmeask',
        slug: 'letmeask',
        description:
            'This application was made during the Next Level Week - Together promoted by Rocketseat. The app was made to help people to combine questions organized by room. Inside each room, the admin can: highlight, answer and delete questions made in real-time!',
        tools: [
            {
                name: 'React',
                icon: '/assets/icons/react.png',
            },
            {
                name: 'Typescript',
                icon: '/assets/icons/typescript.png',
            },
            {
                name: 'CSS',
                icon: '/assets/icons/css.png',
            },
            {
                name: 'Firebase',
                icon: '/assets/icons/firebase.png',
            },
            {
                name: 'Github',
                icon: '/assets/icons/github.png',
            },
        ],
    },
    {
        title: 'Podcastr',
        slogan: 'Your podcast player',
        img: '/assets/images/podcastr.png',
        color: '#e718b4',
        github: 'https://github.com/dpisati/podcastr',
        slug: 'podcastr',
        description:
            'This application was made during the Next Level Week - Together promoted by Rocketseat. The app was made to help people to combine questions organized by room. Inside each room, the admin can: highlight, answer and delete questions made in real-time!',
        tools: [
            {
                name: 'React',
                icon: '/assets/icons/react.png',
            },
            {
                name: 'Typescript',
                icon: '/assets/icons/typescript.png',
            },
            {
                name: 'CSS',
                icon: '/assets/icons/css.png',
            },
            {
                name: 'Github',
                icon: '/assets/icons/github.png',
            },
        ],
    },
    {
        title: 'Proffy',
        slogan: 'Find teachers online',
        img: '/assets/images/proffy.png',
        color: '#8453e0',
        github: 'https://github.com/dpisati/proffy',
        slug: 'proffy',
        description:
            'Proffy is a web application and mobile to help people find teachers and connect them. This application was made during the Next Level Week 2 promoted by Rocketseat.',
        tools: [
            {
                name: 'React',
                icon: '/assets/icons/react.png',
            },
            {
                name: 'React Native',
                icon: '/assets/icons/react.png',
            },
            {
                name: 'Node',
                icon: '/assets/icons/node.png',
            },
            {
                name: 'Typescript',
                icon: '/assets/icons/typescript.png',
            },
            {
                name: 'CSS',
                icon: '/assets/icons/css.png',
            },
            {
                name: 'Github',
                icon: '/assets/icons/github.png',
            },
        ],
    },
    {
        title: 'Movie App',
        slogan: 'Get details from movies',
        img: '/assets/images/movie.png',
        color: '#363636',
        github: 'https://github.com/dpisati/movie',
        demo: 'https://dpisati.github.io/movie/',
        slug: 'movies',
        description:
            'Movie App is an online library to help people find your favorite movie. This application was made to exercise the connection between React and an outside API promoted by TheMovieDB.',
        tools: [
            {
                name: 'React',
                icon: '/assets/icons/react.png',
            },
            {
                name: 'JavaScript',
                icon: '/assets/icons/javascript.png',
            },
            {
                name: 'CSS',
                icon: '/assets/icons/css.png',
            },
            {
                name: 'Github',
                icon: '/assets/icons/github.png',
            },
        ],
    },
    {
        title: 'Pokedex',
        slogan: 'All pokemons on your hand',
        img: '/assets/images/pokedex.png',
        color: '#FD1A55',
        github: 'https://github.com/dpisati/pokedex_app',
        demo: 'https://dpisati.github.io/pokedex_app/#/',
        slug: 'pokedex',
        description:
            'Pokedex App is an online library to help people find your favorite Pokemon. This application was made to exercise the connection between React and an outside API promoted by PokéAPI.',
        tools: [
            {
                name: 'React',
                icon: '/assets/icons/react.png',
            },
            {
                name: 'JavaScript',
                icon: '/assets/icons/javascript.png',
            },
            {
                name: 'CSS',
                icon: '/assets/icons/css.png',
            },
            {
                name: 'Github',
                icon: '/assets/icons/github.png',
            },
        ],
    },
    {
        title: 'Blockthon',
        slogan: 'Run with a block',
        img: '/assets/images/blockthon.png',
        color: '#ff4143',
        github: 'https://github.com/dpisati/blockthon',
        demo: 'https://dpisati.github.io/blockthon/',
        slug: 'blockthon',
        description:
            'Blockthon is a quick and fun game made to study a bit of Unity and WebGL. The goal is to reach the final line without hitting any objects. Use the keys A (left) and D (right) to avoid the obstacles and run the race!',
        tools: [
            {
                name: 'Unity',
                icon: '/assets/icons/unity.png',
            },
            {
                name: 'HTML',
                icon: '/assets/icons/html.png',
            },
            {
                name: 'CSS',
                icon: '/assets/icons/css.png',
            },
            {
                name: 'JavaScript',
                icon: '/assets/icons/javascript.png',
            },
            {
                name: 'Github',
                icon: '/assets/icons/github.png',
            },
        ],
    },
    {
        title: 'Giphy App',
        slogan: 'All gifs in one place',
        img: '/assets/images/giphy.png',
        color: '#9f2de9',
        github: 'https://github.com/dpisati/giphy-api',
        demo: 'https://awesome-bhaskara-b412a4.netlify.app/',
        slug: 'giphy',
        description:
            'Blockthon is a quick and fun game made to study a bit of Unity and WebGL. The goal is to reach the final line without hitting any objects. Use the arrows to avoid the obstacles and run the race!',
        tools: [
            {
                name: 'Vue',
                icon: '/assets/icons/vue.png',
            },
            {
                name: 'HTML',
                icon: '/assets/icons/html.png',
            },
            {
                name: 'CSS',
                icon: '/assets/icons/css.png',
            },
            {
                name: 'JavaScript',
                icon: '/assets/icons/javascript.png',
            },
            {
                name: 'Github',
                icon: '/assets/icons/github.png',
            },
        ],
    },
];
