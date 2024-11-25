import Apple from '/Apple.png'
import Food from '/food.png'
import Tour from '/tour.png'
import React from '/react.png'

const edudetail = [
    {
        id: 1,
        title: 'Guru Nanak Dev Engineering College',
        degree_name: 'Masters in Computer Application',
        date:"Aug 2023 -Sep 2025",
        icon:'/gne.png',
        iconBg: "#E6DEDD",
        description: 'I am currently pursuing a Master\'s in Computer Applications at GNE College, where I am deepening my knowledge. My academic journey equips me with a strong foundation in programming, algorithms, and modern technologies.',
     
    },
    // Removed the trailing comma here
    {
        id: 2,
        title: 'Gujrawala Guru Nanak Khalsa College',
        degree_name: 'Bsc.cs -Bachelor of Science',
        date:"2020 -2023",
        icon:'/ggn.png',
        iconBg: "#E6DEDD",
        description: 'I completed my Bachelor of Science (BSc) at GGN Khalsa College, where I developed a strong foundation in scientific principles and methodologies. The program enhanced my analytical and problem-solving skills through hands-on projects and research opportunities. My time at the college fostered a passion for lifelong learning and a commitment to academic excellence.',
     
     
    },
    {
        id: 3,
        title: 'Ramgarhia Girls Sen. Sec. School',
        degree_name: 'Secondary',
        date:"2017 -2019",
        icon:'/school.png',
        iconBg: "#E6DEDD",
        description:'I completed my secondary education at Ramgarhia Girls School, where I received a well-rounded education that emphasized both academics and personal growth. The supportive environment fostered my curiosity and helped me develop essential skills for future success. My time at the school instilled in me a strong sense of community and the importance of collaboration.'
    },
];


const projects = [
  //food-delivery
    {
      name: "Food Delivery",
      description:'Developed food delivery website with React, Next.js, and Stripe. Features user-friendly interface, secure payments, and admin dashboard. Demonstrates skills in web development, payment integration, and user-centric design.'
,
      tags: [
        {
          // name: "react",
          // color: "blue",
          icon:'/react.png'
        },
        {
          // name: "mongodb",
          // color: "green",
          icon:'/mongodb.png'
        },
        {
          // name: "nodeJS",
          // color: "yellowgreen",
          icon:'/node.png'
        },
        {
           icon:'/express.png'
        },
        {
          icon:'/redux.png'
        }
      ],
      image: Food,
      source_code_link: "https://github.com/dinkyjoya/Food-Delivery",
    },
    //apple website
    {
      name: "Apple Website",
      description:'Developed an interactive website with React, Three.js, and GSAP, featuring secure authentication and responsive optimization. Demonstrated proficiency in web dev, 3D graphics, and animations, creating an immersive experience.'
        ,tags: [
        {
          // name: "react",
          // color: "blue",
          icon:'/react.png'
        },
        {
          // name: "gsap",
          // color: "yellowgreen",
          icon:'/gsap.png'
        },
        {
          // name: "Three.js",
          // color: "green",
          icon:'/threejs.png'
        },
        {
          // name: "mongodb",
          // color: "green",
          icon:'mongodb.png'
        },
      ],
      image:Apple ,
      source_code_link: "https://github.com/dinkyjoya/Apple-Website",
    },
    {
      name: "Tour & Travel",
      description:'Developed an engaging and interactive tour and travel website using React, providing a seamless user experience.Prioritized user experience, implemented efficient navigation, and optimized for responsive design'
     ,
      tags: [
        {
          // name: "react",
          // color: "blue",
          icon:"/react.png"
        },
        {
          // name: "react-router",
          // color: "green",
          icon:'/router.png'
        },
        {
          // name: "css",
          // color: "skyblue",/
          icon:'/css.png'
        },
      ],
      image:Tour ,
      source_code_link: "https://github.com/dinkyjoya/tour-travel",
    },
  ];
  
export {edudetail,projects}
