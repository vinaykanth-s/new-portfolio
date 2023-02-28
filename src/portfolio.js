const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://vinaykanth.com/",
  title: "VK",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Vinay Kanth",
  role: "Software Developer",
  description:
    "I am a passionate software engineer and a problem solver with expertise in Frontend development using modern technologies such as JavaScript, React, Material UI, HTML/CSS.",
  resume:
    "https://drive.google.com/file/d/1geUmbEHo5KsiCDlkfkKGRSUiyaQsF8VL/view?usp=sharing",
  social: {
    linkedin: "https://linkedin.com/in/vinaykanth-s/",
    github: "https://github.com/vinaykanth-s",
    twitter: "https://twitter.com/VinaykanthS",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Project Manager Dashboard",
    description: "Using this application a project manager can add, edit project & team details.",
    stack: ["React", "ReduxToolKit", "Firebase", "Material UI"],
    sourceCode: "https://github.com/vinaykanth-s/project-manager-dashboard",
    livePreview: "https://vk-projects-manager.netlify.app/",
  },
  {
    name: "eCommerce App",
    description: "A typical ecommerce application where users can add products to cart and place an order.",
    stack: ["React", "ReduxToolKit", "Firebase", "Material UI"],
    sourceCode: "https://github.com/vinaykanth-s/ecommerce-react-app",
    livePreview: "https://vinay-react-ecommerce.netlify.app/",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up

  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "MobX",
  "Material UI",
  "SASS/SCSS",
  "Webpack", 
  "Babel"
];

const contact = {
  email: "vinaykanth.s@gmail.com",
};

export { header, about, projects, skills, contact };
