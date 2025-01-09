import { BiLogoCss3, BiLogoFirebase, BiLogoMongodb, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoAndroid,BiLogoJava } from "react-icons/bi";
import { TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress,SiDotnet,SiJquery,SiMysql  } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "",
    image: "./demo.jpeg",
    icons: [BiLogoReact, BiLogoCss3, SiThemoviedatabase],
    description: "Our projects are under development to deliver innovative and engaging platforms—stay tuned for exciting updates!",
    github: "#",
    demo: "#",
  },
  {
    id: "2",
    name: "",
    image: "./demo.jpeg",
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi, TbDatabase],
    description: "Our projects are under development to deliver innovative and engaging platforms—stay tuned for exciting updates!",
    github: "#",
    demo: "#",
  },
  {
    id: "3",
    name: "Real Time Chatting Application",
    image: "./whatsapp.PNG",
    icons: [BiLogoAndroid , BiLogoJava ,BiLogoFirebase ],
    description: "Chatting app that allows users to communicate with one another in real-time via text",
    github: "#",
    demo: "#",
  },
  {
    id: "4",
    name: "Thank you !!!",
    image: "./samanit.jpg",
    icons: [ BiLogoMongodb, SiExpress, BiLogoReact, BiLogoRedux, BiLogoTailwindCss],
    description: "I believe in a leadership style that prioritizes collaboration, communication, and empowerment, enabling teams to thrive and reach their full potential",
    github: "#",
    demo: "#",
  },
  {
    id: "5",
    name: "Aditya Blood Cross (ABC)",
    image: "./androidpro.jpg",
    icons: [BiLogoAndroid , BiLogoJava , BiLogoFirebase, TbApi],
    description: "Aditya Blood Cross helps you in your future when you or your family needs a blood urgently. With this application you can request for blood when you needed and the people nearby who is willing to help will contact you. Aditya Blood Cross team will provide you blood as fast as possible.",
    github: "https://github.com/nandkishor-chauhan/BloodDonationApp.git",
    demo: "https://github.com/nandkishor-chauhan/BloodDonationApp.git",
  },
  {
    id: "6",
    name: "",
    image: "./dotnet.png",
    icons: [SiDotnet , SiJquery , SiMysql ,TbBrandPrisma],
    description: "Our projects are under development to deliver innovative and engaging platforms—stay tuned for exciting updates!",
    github: "#",
    demo: "#",
  },
];

export default ProjectsData;
