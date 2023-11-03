import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    portfolio,
    soundcloud,
    HDportfolio,
    jobit,
    tripguide,
    threejs,
    fiverr,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "MERN Developer",
      icon: web,
    },
    {
      title: "Java Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "3D Web Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Full-Stack Web Developer",
      company_name: "Newton School",
      icon: "https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/zfvkuf2k98lacoqpqdiw",
      iconBg: "#383E56",
      date: "September 2022 - August 2023",
      points: [
        "was a full stack developer trainee at Newton School, gaining hands-on experience in various aspects of front-end and back-end development.",
        "Successfully completed rigorous coursework covering key technologies such as HTML, CSS, JavaScript, Node.js, React, and MongoDB, among others, under the guidance of industry experts and mentors.",
        "Showcased a strong understanding of database management, and API integration, effectively translating theoretical knowledge into practical solutions during various training exercises and assignments",
        "Proactively engaged in assignments, seminars, coding challenges, and continuously enhancing technical skills in the field of full stack development",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "As a mentor, it was a pleasure to guide Subhash, who consistently exhibited a strong passion for web development. He is always dedicated to getting better and never misses a chance to learn and grow. His projects shows commitment to staying updated with the latest in technology and expanding his skills",
      name: "Saloni Pandey",
      designation: "SDE-1",
      company: "Vision IAS",
      image: "https://avatars.githubusercontent.com/u/70425604?v=4",
    },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "My 3D Portfolio",
      description:
        "My web development portfolio is an immersive showcase of my skills in creating dynamic and engaging online experiences. I have meticulously crafted a collection of 3D models that bring a unique and interactive dimension to my work. Integrating responsive design principles, I have aimed to ensure optimal performance and accessibility across various devices.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
        {
          name: "framer-motion",
          color: "yellow-text-gradient",
        },
        {
          name: "emailjs",
          color: "purple-text-gradient",
        },
      ],
      image: HDportfolio,
      hosted_link:"https://subhashkrportfolio.netlify.app",
      source_code_link: "https://github.com/subhashsha15/React-Advanced-Projects/tree/main/3D%20Portfolio",
    },
    {
      name: "SoundCloud Clone",
      description:
        "My SoundCloud clone project allows users to explore and discover a wide range of music content. The project incorporates key features such as user authentication, liking songs, following artists, and playlist creation, providing users with a familiar and intuitive music listening experience. I integrated elements that adapt to different device requirements, aiming to create a smooth user experience on a wide range of devices.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restAPI",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "material-UI",
          color: "yellow-text-gradient",
        },
        {
          name: "axios",
          color: "purple-text-gradient",
        },
      ],
      image: soundcloud,
      hosted_link:"https://soundcloud-clone0.netlify.app",
      source_code_link: "https://github.com/subhashsha15/Sound-Cloud-Clone---React-Project-2---ied8jss2pjs9",
    },
    {
      name: "Portfolio Builder",
      description:
        "This website helps people easily build their own professional portfolios. The site offers simple-to-use templates,and can edit details making it easy for users to customize their portfolios to reflect their unique style and skills. Users can also share their portfolios on social media by downloading or printing it.The website is designed to be user-friendly, accessible, and help them expand their professional networks.This application perform smoothly and accessible on all types of devices.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "mantine",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "yellow-text-gradient",
        },
      ],
      image: portfolio,
      hosted_link:"https://portfoliobuilder00.netlify.app",
      source_code_link: "https://github.com/subhashsha15/Resume-Builder---React-Project---beqedh07u70b",
    },
    {
      name: "Fiverr-clone",
      description:
        "I'm currently building a website similar to Fiverr. Although it's still in the works and doesn't have any features yet, the goal is to create a platform where freelancers and businesses can collaborate on different digital projects and services. Users will be able to communicate easily and conduct secure transactions. The site will also have a dependable review system to foster trust among users. Overall, the aim is to support entrepreneurship and help individuals and businesses connect in the online marketplace.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "normal css",
          color: "green-text-gradient",
        },
      ],
      image: fiverr,
      hosted_link:"https://fiverr-freelancing.netlify.app",
      source_code_link: "https://github.com/subhashsha15/React-Advanced-Projects/tree/main/Fiverr-UI-clone",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };