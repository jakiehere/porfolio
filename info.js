let info = {
  name: "Panha SUM",
  logo_name: "Jakie",
  flat_picture: require("./src/assets/me.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Hey there, I'm Panha I graduated from Phnom Penh International University in Computer Science. I have 1+ years of experience in Web Development having strong development and problem solving skill.",
  links: {
    linkedin: "https://www.linkedin.com/in/sum-panha/",
    github: "https://github.com/n-jakie",
    resume: "https://drive.google.com/file/d/1BSTxToX6m0opLNcSu3D6_1_M4OOfBYh9/view?usp=sharing",
  },
  education: [
    {
      name: "Phnom Penh International University",
      place: "Phnom Penh",
      date: "sep, 2018 - 2022",
      degree: "Bachelor in Computer Science",
      description:
        "",
      skills: [
        "Software Engineering",
        "Programming",
      ]
    },
    {
      name: "High School Certificated",
      place: "",
      date: "2018",
      degree: "Pea Reang, Prey Veng",
      description:
        "",
      skills: [
      ]
    }
  ],
  experience: [
    {
      name: "Z1 Flexible Solution",
      place: "Toul Kouk, Phnom Penh",
      date: "Apr, 2022 - Dec, 2022",
      position: "Junior Front-end developer",
      description:
        "",
      skills: [ 
                "HTML5", "CSS3", "JavaSript", 
                "TypeSript", "React Js",
                "Next Js", "Redux", "TailwindCss",
                "SEO"
              ]
    },
    {
      name: "Z1 Flexible Solution",
      place: "Toul Kouk, Phnom Penh",
      date: "Dec, 2022 - Now",
      position: "Backend Developer",
      description:
        "",
      skills: ["PHP", "Laravel", "Backpack", "AJAX", "jQuery", "VueJs"]
    },
  ],
  skills: [
    {
      title: "Language",
      info: ["PHP","Javascript","TypeScript"],
      icon: "fa fa-code"
    },
    {
      title: "Front-end",
      info: ["React", "Next", "TailwindCSS", "Bootstrap", "Redux", "VueJs"],
      icon: "fa fa-cubes"
    },
    {
      title: "UX/UI Design",
      info: ["Figma", "Photoshop", "Illustrator"],
      icon: "fa fa-pencil-square-o"
    },
    {
      title: "web technologies",
      info: ["Laravel", "RestAPI"],
      icon: "fas fa-laptop-code"
    },
  ],
  portfolio_design: [
    {
      name: "Keep it Green",
      title: "UI/UX Design",
      pictures: [
        {}
      ],
      technologies: ["Figma", "Photoshop"],
      category: "Visual Design",
      github: "",
      date: "Jan, 2022",
      visit: "",
      description:
        ""
    },
  ],
  portfolio: [
    {
      name: "ZPoin",
      pictures: [
        {
          img: require("./src/assets/portfolio/zpoin/zpoin1.png")
        },
        {
          img: require("./src/assets/portfolio/zpoin/zpoin2.png")
        },
        {
          img: require("./src/assets/portfolio/zpoin/zpoin3.png")
        },
      ],
      technologies: ["Laravel", "Backpack", "VueJs", "jQuery", "PostgresQL"],
      category: "Web Application",
      date: "Jan, 2023 - Now",
      github:
        "https://github.com/n-jakie",
      visit: "https://github.com/n-jakie",
      description:
        "ZPoin web application with new feature: upload, filters, transfer and reimburse etc. ZPoin has become a fast growing that is a useful app under Z1 Super App that use for all interal users under Zellenium Group and external user now it have 5000+ users. And now it have maketplace to pay with some company that coperated with such as Park Cafe and Pizza Hut."
    },
    {
      name: "DipMarts",
      pictures: [
        {
          img: require("./src/assets/portfolio/dipmart/dipmart1.png")
        },
      ],
      technologies: ["React", "Next", "Typescript", "Redux", "TailwindCss", "Axios"],
      category: "E-commerce Website",
      date: "Aug, 2022",
      github: "https://github.com/n-jakie",
      visit: "https://github.com/n-jakie",
      description:
        "E-commerce website for mobile view with new experience as front-end developer and i've created user friendly, styling, animation, page speed improvment, server-side, SEO, and best practice code for this website. "
    },
    {
      name: "Z1 News",
      pictures: [
        {
          img: require("./src/assets/portfolio/z1news/z1news1.png")
        },
        {
          img: require("./src/assets/portfolio/z1news/z1news2.png")
        },
        {
          img: require("./src/assets/portfolio/z1news/z1news3.png")
        },
        {
          img: require("./src/assets/portfolio/z1news/z1news4.png")
        },
        {
          img: require("./src/assets/portfolio/z1news/z1news5.png")
        },
      ],
      technologies: ["React", "Next", "Typescript", "TailwindCss", "Wordpress", "graphql"],
      category: "CMS Website",
      date: "Nov, 2022",
      github:
        "https://github.com/n-jakie",
      visit: "https://github.com/n-jakie",
      description:
        "Z1 News website is the news website that use wordpress as backend and NextJs as front-end devlopment."
    },
  ],
};

export default info;
