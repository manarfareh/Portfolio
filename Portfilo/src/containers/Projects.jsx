import { Projectcard } from "../components";
import {Reveal} from '../utils'
import {hotel,flight,videos,meuble_creatice,home_creatice,about,school_Management,stage_video_final,Enicar_Library_Demo,Evaluation,Evaluation_with_MobileNet,Loss_History,Traffic,Weather_Data,Road_Closure,Accident,} from '../assets'

const Projects = () => {
  return (
    <section className=" mx-auto mt-24 justify-center"  id="projects" style={{ width: '1200px', marginLeft: '140px', borderRadius: '10px' }}>
      <Reveal>
        <p className='text-2xl md:text-5xl xl:text-6xl font-extrabold text-white py-2'>Projects<span className='text-main1'>.</span></p>
      </Reveal>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-10'>
        {projects.map((project) => {
          return <Projectcard key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  
  {
    title: "Management of a Medical Practice (Pixemantic Internship)",
    imgSrc: [stage_video_final],
    code: "",
    tech: [
      {
        name: "Angular",
        color: "text-main1",
      },
      {
        name: "MySQL",
        color: "text-main1",
      },
      {
        name: "Spring Boot",
        color: "text-main1",
      },
      {
        name: "TypeScript ",
        color: "text-main1",
      },
      {
        name: "Java ",
        color: "text-main1",
      },
      
      {
        name: "Git",
        color: "text-main1",
      },
    ],      
    description:"This project demonstrated a commitment to improving healthcare services by leveraging technology to enhance administrative processes, increase patient engagement, and bolster data security.",
    modalContent: (
      <>
        <p>
        Designed, developed and maintained the backend and Frontend of a healthcare application.</p>
        <p>
        Applied authentication and authorization mechanisms to improve patient data security.</p>
        <p>
        Enhanced functionality of the admin panel by implementing a highly efficient patient management system, optimizing doctor scheduling processes, and integrating a real-time appointment booking feature, resulting in a 40% reduction in patient wait times and a 25% increase in appointment bookings
        </p>
      </>
    ),
    deg : "2deg",
  },
  {
    title: "Library Management for the University Enicarthage",
    imgSrc: [Enicar_Library_Demo],
    code: "https://github.com/manarfareh/Enicar-Library",
    projectLink: "",
    tech: [
      {
        name: " Angular",
        color: "text-main1",
      },
      {
        name: "Spring Boot",
        color: "text-main1",
      },
      {
        name: "PostgreSQL",
        color: "text-main1",
      },
      
      {
        name: "JavaScript ",
        color: "text-main1",
      },
      {
        name: "Git",
        color: "text-main1",
      },
    ],  
    description: " Designed and deployed a user-friendly library management system for the University Enicarthage.",
    modalContent: (
      <>
        <p>
        Designed and deployed a user-friendly library management system for the University Enicarthage, resulting in a reduction in search time for academic resources.
        </p>
        <p>
        Enabled real-time tracking of library assets.
        </p>
        <p>
        Put in place efficient user account management.
        </p>
      </>
    ),
    deg : "2deg",
  },
  {
    title: "Facial Expression Recognition",
    imgSrc: [Evaluation,Evaluation_with_MobileNet,Loss_History,],
    code: "https://github.com/manarfareh/Facial-Expression-Recognition",
    tech: [
      {
        name: "AI",
        color: "text-main1",
      },
      {
        name: "CNN",
        color: "text-main1",
      },
      {
        name: "MobileNet",
        color: "text-main1",
      },
      {
        name: "Python ",
        color: "text-main1",
      },
    ],      
    description:"develop an image classification model to distinguish between seven emotions: joy, surprise, fear, anger, disgust, sadness and neutral.",
    modalContent: (
      <>
        <p>
        Facial Emotion Recognition (FER) is the technology that analyses facial expressions from both static images and videos in order to reveal information on one’s emotional state.
        </p>
        <p>
        The dataset is divided into training, validation, and test sets. This division is essential to assess the model's performance on unseen data and prevent overfitting.
        </p>
      </>
    ),
    deg : "2deg",
  },
  
  {
    title: "MyRoad ",
    imgSrc: [Traffic,Weather_Data,Road_Closure,Accident],
    code: "https://github.com/manarfareh/My-Road",
    tech: [
      {
        name: "Python",
        color: "text-main1",
      },
      {
        name: "JavaScript",
        color: "text-main1",
      },
      {
        name: "React",
        color: "text-main1",
      },
      {
        name: "Flask ",
        color: "text-main1",
      },
      {
        name: "Java ",
        color: "text-main1",
      },
      {
        name: "Spring Boot ",
        color: "text-main1",
      },
      {
        name: "PostgreSQL ",
        color: "text-main1",
      },
      
      {
        name: "Git",
        color: "text-main1",
      },
    ],      
    description:"Managing urban traffic has become a major challenge, with significant consequences on the daily lives of citizens. Traffic jams, accidents, and other incidents on roads can lead to significant disruptions. It is in this context that our application intervenes by centralizing and monitoring data on the road network from various sources.",
    modalContent: (
      <>
        <p>
        To retrieve information on road traffic, we have used various sources to ensure reliable and continuous data collection, such as:
        </p>
        <p>
         Integration of Social Media APIs:<br/>
         We used the Meteomatics API to collect weather data.<br/>
          -Static Data: We used static data on perceived traffic jams and road closures.<br/>
           -Web scraping: We collected data on accidents from Tunisian websites.<br/>
        </p><br/>
        <p>
        REST and SOAP Web Services:<br/><br/>

        -REST Web Service:<br/>
            Services: Accident, Weather.<br/>
            Language: Python & JavaScript.<br/>
        Tools: React & Flask.<br/><br/>

        -SOAP Web Service:<br/>
        Services: Traffic, Road Closure.<br/>
        Language: Java & JavaScript.<br/>
        Tools: React & Spring Boot & Postgres.
        </p>
        <p>

        </p>
      </>
    ),
    deg : "2deg",
  },
  {
    title: "Online Flight Reservation System (Backend)",
    imgSrc: [flight],
    code: "https://github.com/manarfareh/Online-Flight-Reservation-System",
    projectLink : "",
    tech: [
      {
        name: "TCP Protocol",
        color: "text-main1",
      },
      {
        name: "Thread",
        color: "text-main1",
      },
      {
        name: "C",
        color: "text-main1",
      },
    ],  
    description:"Built and implemented an Online Flight Reservation System.",
    modalContent: (
      <>
        <p>
        Built and implemented an Online Flight Reservation System utilizing TCP Protocol and multi-threading in C.
         </p>
        <p>
        Ensured seamless communication between three virtual machines to provide real-time flight booking services.
        </p>
      </>
    ),
    deg : "2deg",
  },
  {
    title: "Creatice_Meuble (Compass IT Internship)",
    imgSrc: [home_creatice,about,meuble_creatice,videos],
    code: "https://github.com/manarfareh/Creatice_Meuble",
    tech: [
      {
        name: "MySQL",
        color: "text-main1",
      },
      {
        name: "PHP",
        color: "text-main1",
      },
      {
        name: "JavaScript ",
        color: "text-main1",
      },
    ],      
    description:"Developed an online platform for a furniture store.",
    modalContent: (
      <>
        <p>
        Developed an online platform for a furniture store, resulting in a 40% surge in online inquiries and a 20% rise in online purchases, driving significant revenue growth.
        </p>
      </>
    ),
    deg : "2deg",
  },
  {
    title: "School Management",
    imgSrc: [school_Management],
    code: "https://github.com/manarfareh/gestion_scolaire",
    projectLink: "",
    tech: [
      {
        name: "PHP",
        color: "text-main1",
      },
      {
        name: "JavaScript",
        color: "text-main1",
      },
      {
        name: "Bootstrap",
        color: "text-main1",
      },
      {
        name: "MySQL",
        color: "text-main1",
      },
    ],  
    description:"The School Management system aims to enhance the efficiency of school administration by providing a centralized and user-friendly solution for managing student records, tracking attendance ...",
    modalContent: (
      <>
        <p>
        The system provides a robust platform to securely store and manage student records. It includes personal details, contact information, enrollment history, and academic performance.
        </p>
        <p>
        Attendance Tracking:Keeping a close eye on student attendance is made effortless through the system. Real-time attendance tracking helps schools identify patterns and trends, promoting a culture of regular attendance among students.
        </p>
        <p>
        Event Calendar:Keeping track of important dates, school events, and holidays is crucial. The system includes an interactive event calendar, enabling users to stay updated on all school-related activities.
        </p>
      </>
    ),
    deg : "2deg",
  },
  
  {
    title: "Hotel Management System (Backend)",
    imgSrc: [hotel],
    code: "https://github.com/manarfareh/management_hotel",
    tech: [
      {
        name: "C++",
        color: "text-main1",
      },
    ],      
    description:"The goal of developing this application is to digitize the management of a hotel chain to better meet customer needs. ",
    modalContent: (
      <>
        <p>
        The system includes features essential for effective management, such as user authentication, reservation management (addition, cancellation, modification), and entity management. Information is stored in a file that can be updated as needed.
        </p>
      </>
    ),
    deg : "2deg",
  },
];

export default Projects