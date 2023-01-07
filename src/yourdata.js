// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"
import flutterIcon from './images/flutter-logo.svg'
import firebaseIcon from './images/firebase.png'
import nodejsIcon from './images/nodeJs.png'
import expressIcon from './images/express.png'
import mongodbIcon from './images/mongoDb.png'
import adobeIcon from './images/adobe.png'


import derbyIcon from './images/clients/derby-logo.png'
import townIcon from './images/clients/madawaska.png'
import fiberforce from './images/clients/fiberforce.png'

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "DevAll",
  headerTagline: [
    //Line 1 For Header
    "Hybrid Mobile Applications",
    //Line 2 For Header
    "Web Apps",
    //Line 3 For Header
    "Desktop Applications",
  ],
  //   Header Paragraph
  headerParagraph:
    "A place where dreams turn into the reality of highest quality",

  //Contact Email
  contactEmail: "msamoeed@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Project One", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/chatin-74dc1.appspot.com/o/Screenshot%202021-07-25%20at%202.45.20%20PM.png?alt=media&token=8251c8e5-edba-44ca-8619-1429832062b3",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "Project Two", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/chatin-74dc1.appspot.com/o/Screenshot%202021-07-25%20at%202.45.29%20PM.png?alt=media&token=39a045d8-b2a3-44ea-9f8a-828d4401bbd1",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "Project Three", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/chatin-74dc1.appspot.com/o/Screenshot%202021-07-25%20at%202.46.06%20PM.png?alt=media&token=43e23165-c2a7-4e90-8491-21f76dbb36b6",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "Project Four", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/chatin-74dc1.appspot.com/o/Screenshot%202021-07-25%20at%202.46.15%20PM.png?alt=media&token=4675e8cc-b892-47b8-a904-cb9eb242eac0",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "Project Five", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/chatin-74dc1.appspot.com/o/Screenshot%202021-07-25%20at%202.46.28%20PM.png?alt=media&token=8bcf9523-0e3a-473e-a671-de920e38c228",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
   
    {
      title: "Project Six", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:"https://firebasestorage.googleapis.com/v0/b/chatin-74dc1.appspot.com/o/Simulator%20Screen%20Shot%20-%20iPhone%2013%20-%202022-07-03%20at%2012.53.01.png?alt=media&token=0e16cdb8-9eac-4139-bb66-b4553bf62286",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Flutter developer for over 2 years, i love developing beautiful looking user Interface along with fully functional backend. I have worked with API integration, Firebase as well as MYSQL database. You can look at my work in my active GIG. I prefer quality over quantity. If you an idea in mind or a design in place, hit me up with your idea and i can create something you desire.",
  
  aboutImage:
    "https://miro.medium.com/max/1838/0*Tq0QsFDoiGBQaHu0.png",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    
    {
      img: flutterIcon,
      para:
        "Cross-Platform application development for Android, IOS, Web and more",
    },
    {
      img: firebaseIcon,
      para:
        "Firebase Services to handle all the needs of your business",
    },
    {
      img: mongodbIcon,
      para:
        "Mongodb to host your own database and services",
    }, {
      img: expressIcon,
      para:
        "Express to get the backend of your apps up and running in no time",
    }, {
      img: nodejsIcon,
      para:
        "Backend Services using NodeJs framework",
    },
   
    {
      img: jsIcon,
      para:
        "Javascript expertise to fulfil all your requirements",
    },
    {
      img: reactIcon,
      para:
        "Expertise in developing maintainable high quality Front-end for Websites using ReactJS",
    },
    {
      img: designIcon,
      para:
        "Sleek design with creative and inovative animations",
    },
    {
      img: adobeIcon,
      para:
        "UI/UX services to develop a good user experience",
    },
    
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "React Web Apps",
  promotionPara: "https://firebasestorage.googleapis.com/v0/b/chatin-74dc1.appspot.com/o/Screenshot%202021-07-25%20at%205.06.22%20PM.png?alt=media&token=d21379a6-411f-4dab-b3d5-af6e638aa00b",

   reactApp: "https://firebasestorage.googleapis.com/v0/b/chatin-74dc1.appspot.com/o/Screenshot%202021-07-25%20at%205.14.05%20PM.png?alt=media&token=bc379208-97bf-49a4-9ab3-5c8c1e7839d0",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, 
      url: "https://github.com/msamoeed" },
    {
      img: codepenIcon,
      url: "https://www.codepen.com/",
    },
    {
      img: dribbbleIcon,
      url: "https://dribbble.com/chetanverma",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/msamoeed",
    },
  ],


  testimonials  : [
    {
      img : "https://media.licdn.com/dms/image/C4D03AQG4Baof8Jk2Ug/profile-displayphoto-shrink_800_800/0/1612320842759?e=1678320000&v=beta&t=ikskiMdcN13JTaSciUBezqHivbkfhHQnt8B1xljuB20",
      name : "Jason Boucher",
      designation : "Business System Analyst at Twin Rivers Paper Company",
      review : "Softsol team were the lead on a project I hired them for. The project involved creating a Flutter App and Website for an Ice Fishing Derby. During this Project Abdul Moeed was extremely easy to work with and was extremely knowledgeable with the development environment. While working on this project I also had him help me with other projects that a failed developer had worked on. He was more then happy to help me out and aid an amazing job. I would highly recommend working with them. The project he helped me save would be dead today if it wasn't for his assistance, and the current project he is working on for me is already turning out great!"
    },
    {
      img : "https://media.licdn.com/dms/image/C4D03AQEO_0-dvO4v9g/profile-displayphoto-shrink_200_200/0/1516518252366?e=1678320000&v=beta&t=4CZcrXjbDCJ9l6PMsgGhG_mOECpBDXaX2Fb3JHqoKnw",
      name : "Grady Lonigan",
      designation : "Concrete Construction Innovation, Development, Rehabilitation & Restoration",
      review : "Softsol and thier team did excellent and professional work from start to finish. They custom built a mobile app for us meeting all of our needs. Thanks again Abdul, and I highly recommend"
    }, 
    {
      img : "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png",
      name : "Plnielsen",
      designation : "Writer",
      review : "Fantastic! The app is just as I hoped and every idea that was possible has been accommodated. Delivered over and above, including time spent on the project. Thoroughly recommend."
    }, 
   
  ],

  clients : [

{
  name : "Long Lake Ice Fishing Derby",
  img : derbyIcon,
},
{
  name : "FiberForce",
  img : fiberforce,
}
,
{
  name : "Town of Madawaska",
  img : townIcon,
}
  ],


  services : [
    {
      image  : "https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png" ,
      name : "Flutter",
      description : "Flutter is a cross-platform mobile application development framework created by Google. It is used to develop applications for Android, iOS, Linux, Mac, and Windows."
    },
    {
      image  : "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" ,
      name : "IOS",
      description : "IOS App Development for Iphone and Ipad"
    },
    {
      image  : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/2346px-Android_logo_2019_%28stacked%29.svg.png" ,
      name : "Android",
      description : "Android App Development for Android Phones and Tablets"
    }
  ]

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
