const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://github.com/vinaykanth-s",
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
    name: "Fraazo Clone",
    description: "Buy fresh fruits & vegetables online at best price.",
    stack: ["React", "Redux", "Material UI"],
    sourceCode: "https://github.com/vinaykanth-s/fraazo-clone",
    livePreview: "https://github.com/vinaykanth-s/",
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
];

const contact = {
  email: "vinaykanth.s@gmail.com",
};

export { header, about, projects, skills, contact };
