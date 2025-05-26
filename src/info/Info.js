import self from "../img/self.png"
import Architecture from "../img/Architecture.gif"
import weatherapp from "../img/weatherapp.png"
import argo from "../img/argo.png"
import lib from "../img/lib.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Fady",
    lastName: "Goda",
    initials: "FG", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Cloud & DevOps Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Cairo, Egypt'
        },
        // {
        //     emoji: "💼",
        //     text: "Systems Engineer at Google"
        // },
        {
            emoji: "📧",
            text: "fadi.sami.goda@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/Fady120",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/fady-goda-140520175/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        // {
        //     link: "https://instagram.com",
        //     icon: 'fa fa-instagram',
        //     label: 'instagram'
        // },
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Fady. I'm a Cloud & DevOps engineer.",
    skills:
        {
            proficientWith: ['DevOps', 'Docker', 'K8S', 'git', 'github', 'Github Actions', 'Ansible', 'AWS', 'python', 'MySQL'],
            exposedTo: ['nodejs', 'Go', 'Flutter', 'React Native']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "AWS Automation with Terraform",
            // live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Fady120/AWS-Automation-with-Terraform", // this should be a link to the **repository** of the project, where the code is hosted.
            image: Architecture
        },
        {
            title: "Weather App K8S",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/Fady120/weatherapp-k8s",
            image: weatherapp
        },
        {
            title: "My React Portfolio CI/CD",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/Fady120/instabug_internship_exam_2023",
            image: argo
        },
        {
            title: "Library Management System",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/Fady120/Library-Management-System",
            image: lib
        }
    ]
}