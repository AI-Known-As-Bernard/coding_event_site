'use client'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import React,{useState} from 'react'


const people = [{
    projects:[{title:"Test",url:'/'},{title:"Test",url:'/'},{title:"Test",url:'/'}],
    id: 23,
    firstName: "Audrey",
    lastName: "Geehan",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0074_wcayy0.jpg",
    year: "2",
    startingYear: 2023},
  {
    projects:[{title:"Summe Website",url:"https://red4cted25.github.io/Welcome-Back-Summer-Site/"},{title:"My API",url:"https://my-api-1exr.onrender.com/"},{title:"EventQuest", url:"https://eventquest-j2r8.onrender.com"},{title:"Simon Says",url:"https://red4cted25.github.io/Simon-Says/"}],
    id: 19,
    firstName: "Nicolas",
    lastName: "Diaz",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0066_zz0qod.jpg",
    year: "2",
    startingYear: 2023},
  {
    projects:[{title:"Food Quiz App", url:"https://desqui-food-quiz.netlify.app/"},{title:"Tic-Tac-Toe", url:"https://desqui-tic-tac-toe.netlify.app/"},{title:"Memory Card Game",url:"https://desqui-memory-game.netlify.app/"}],
    id: 21,
    firstName: "Diego",
    lastName: "Esquivias",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0061_ri1jbk.jpg",
    year: "2",
    startingYear: 2023},
  {
    projects:[],
    id: 37,
    firstName: "Noelle",
    lastName: "Weaver",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0069_lzksxe.jpg",
    year: "2",
    startingYear: 2023},
  {
    projects:[{title:"Movie Quiz",url:"https://cehly-movie-quiz.netlify.app/"},{title:"Invisible Maze Game",url:"https://invisible-maze-game.netlify.app/"},{title:"Jenkins Secret Society", url:"https://red4cted25.github.io/Jenkins-Secret-Society/"},{title:"Crack-It",url:"https://crackitquiz.netlify.app"}],
    id: 20,
    firstName: "Conner",
    lastName: "Ehly",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0067_vo2q4e.jpg",
    year: "2",
    startingYear: 2023},
  {
    projects:[{title: "Hangman",url:"https://joyzatech.github.io/Hangman/"},{title: "Joyza-OS",url:"https://joyzatech.github.io/Joyza-OS/"},{title: "Summer Vibes",url:"https://joyzatech.github.io/Summer-Vibes/"},{title: "Memory Game",url:"https://joyzatech.github.io/Memory-Game/"},{title: "Tic-Tac-Toe",url:"https://joyzatech.github.io/Tic-Tac-Toe/"},{title: "Joyza Home",url:"https://joyzatech.github.io/Joyza-Home/"}],
    id: 30,
    firstName: "Lucas",
    lastName: "Saner",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0063_u3xghr.jpg",
    year: "2",
    startingYear: 2023},
  {
    projects:[{title: "Pet Adoption", url:"https://pet-adoption-webservice.onrender.com/"},{title: "Event EJS", url:"https://eventsejs.onrender.com/"},{title: "React Quiz App", url:"https://reactquizizz.netlify.app/"},{title: "My API", url:"https://rhythmgameapi.onrender.com/"}],
    id: 29,
    firstName: "Alan",
    lastName: "Sanchez",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0068_jm9g3m.jpg",
    year: "2",
    startingYear: 2023
  },
  {
    projects:[],
    id: 28,
    firstName: "Noael",
    lastName: "Sameer",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0059_wnd2rm.jpg",
    year: "2",
    startingYear: 2023
  },
  {
    projects:[{title: "Portfolio", url: "https://oakuopus.github.io/Portfolio/"},{title: "Card Game", url: "https://card-games-wgv5.onrender.com"},{title: "Maze Game", url: "https://oakuopus.github.io/Maze-Game-group/"}],
    id: 26,
    firstName: "Oliver",
    lastName: "Kuopus",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0077_1_esajas.jpg",
    year: "2",
    startingYear: 2023},
  {
    projects:[{title:"Multiple Choice Quiz", url:"https://multiple-choice-quiz-application.netlify.app"},{title:"Event Site", url:"https://event-site.onrender.com"},{title:"API Project", url:"https://restful-api-poqa.onrender.com"}],
    id: 31,
    firstName: "Sabrina",
    lastName: "Shafer",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0064_1_tvvohx.jpg",
    year: "2",
    startingYear: 2023},
  {
    projects:[{title:"React Quiz",url:"https://quizzy-bee.netlify.app/"},{title:"Pet Adoption",url:"https://pet-adoption-platform-j9bw.onrender.com/login"},{title:"My API",url:"https://myapi-8314.onrender.com/api/"}],
    id: 22,
    firstName: "Daniel",
    lastName: "Freeman",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0058_gl0rma.jpg",
    year: "2",
    startingYear: 2023},
  {
    projects:[],
    id: 16,
    firstName: "Stryder",
    lastName: "Bateman",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0098_kcpsw9.jpg",
    year: "2",
    startingYear: 2023},
  {
    projects:[],
    id: 43,
    firstName: "Ari",
    lastName: "Lipschultz",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0214_depxlz.jpg",
    year: "1",
    startingYear: 2024},
  {
    projects:[{title:"Picture Grid", url:"https://montgomerymcdonald.github.io/picture-grid-project/"},{title:"Interactive Wesite", url:"https://montgomerymcdonald.github.io/Interactive-Website/"},{title:"Color Theory", url:"https://montgomerymcdonald.github.io/Color-Theory-Webpage"}],
    id: 44,
    firstName: "Montgomery",
    lastName: "McDonald",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0215_iuks0n.jpg",
    year: "1",
    startingYear: 2024},
  {
    projects:[],
    id: 52,
    firstName: "Kaden",
    lastName: "Smiley",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0217_cpcsdl.jpg",
    year: "1",
    startingYear: 2024},
  {
    projects:[],
    id: 54,
    firstName: "Ana",
    lastName: "Torres-Machado",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0236_oesuab.jpg",
    year: "1",
    startingYear: 2024},
  {
    projects:[],
    id: 55,
    firstName: "Brian",
    lastName: "Verdugo",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0220_akeunr.jpg",
    year: "1",
    startingYear: 2024},
  {
    projects:[],
    id: 40,
    firstName: "Ryder",
    lastName: "Barr",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0222_tvihfk.jpg",
    year: "1",
    startingYear: 2024},
  {
    projects:[{title:"Wrexham AFC Page",url:"https://maanvikp20.github.io/flecboc/"},],
    id: 47,
    firstName: "Maanvik",
    lastName: "Poddar",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0226_lqkxnz.jpg",
    year: "1",
    startingYear: 2024},
  {
    projects:[{title:"Asian Restaraunt",url:"https://robbo00.github.io/Asian-Restaraunt/"},{title:"Grid",url:"https://robbo00.github.io/Costume-Expressions/"},{title:"Flex-Box",url:"https://robbo00.github.io/FlexBox/"},{title:"Business Site",url:"https://robbo00.github.io/cssGroup/"},{title:"Color",url:"https://robbo00.github.io/Color/"}],
    id: 50,
    firstName: "Robert",
    lastName: "Scroggins",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0238_g9itan.jpg",
    year: "1",
    startingYear: 2024},
  {
    projects:[],
    id: 51,
    firstName: "Viraaj",
    lastName: "Sing",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0244_s4780a.jpg",
    year: "1",
    startingYear: 2024},
  {
    projects:[],
    id: 56,
    firstName: "Bryce",
    lastName: "Wahl",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0218_marafx.jpg",
    year: "1",
    startingYear: 2024},
  {
    projects:[],
    id: 39,
    firstName: "Karam",
    lastName: "Abbas",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0223_agfpow.jpg",
    year: "1",
    startingYear: 2024
  },
  {
    projects:[],
    id: 41,
    firstName: "Andy",
    lastName: "Chen",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0233_hc2qaq.jpg",
    year: "1",
    startingYear: 2024},
  {
    projects:[],
    id: 46,
    firstName: "Jose",
    lastName: "Pajon",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0216_edbjk2.jpg",
    year: "1",
    startingYear: 2024
  },
  {
    projects:[],
    id: 53,
    firstName: "Justin",
    lastName: "Swenson",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0219_zerwlt.jpg",
    year: "1",
    startingYear: 2024},
  {
    projects:[],
    id: 38,
    firstName: "Cameron",
    lastName: "Gaines",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0221_hflfue.jpg",
    year: "1",
    startingYear: 2024
  },
  {
    projects:[{title:"What the Duck",url:"https://angie-cote927.github.io/waddlewalk-website/"},{title:"Color Themes",url:"https://angie-cote927.github.io/Webpage--Color-Schemes/Website1/index.html"},{title:"Five Nights @ Freddy's",url:"https://angie-cote927.github.io/flexbox-layout-project/"},{title:"McSpotlight",url:"https://angie-cote927.github.io/McDonalds-Redesign/"}],
    id: 42,
    firstName: "Angie",
    lastName: "Cote",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0241_kyq5rc.jpg",
    year: "1",
    startingYear: 2024
  },
  {
    projects:[],
    id: 48,
    firstName: "Bruce",
    lastName: "Rodriguez",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0234_rb5lst.jpg",
    year: "1",
    startingYear: 2024
  },
  {
    projects:[{title:"Float and Position",url:" https://rjohn05-dc.github.io/Float-and-Positioning-Practice/"},{title:"Favorite Show",url:" https://rjohn05-dc.github.io/FavoriteShow.html/"},{title:"Picture Grid",url:" https://rjohn05-dc.github.io/Picture-Grid-Project/"},{title:"Flexbox Layout",url:" https://rjohn05-dc.github.io/Flexbox-Layout-Project/"}],
    id: 57,
    firstName: "Rohan",
    lastNamee: "John",
    profileImage: "https://res.cloudinary.com/west-mec-north-east-campus-coding/image/upload/c_thumb,w_600,g_face/NewsLetter/currentStudents/DSC_0232_fhuoji.jpg",
    year: "1",
    startingYear: 2024
  }]
const ProfileProjectList = () => {
    const [openRows, setOpenRows] = useState({});

    const toggleRow = (email) => {
      setOpenRows((prevState) => ({
        ...prevState,
        [email]: !prevState[email],
      }));
    };

    return (
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              {/* <th className="px-4 py-2 text-left text-sm font-semibold text-gray-200">Name</th> */}
              {/* <th className="px-4 py-2 text-left text-sm font-semibold text-gray-200">Title</th> */}
              {/* <th className="px-4 py-2 text-left text-sm font-semibold text-gray-200">Year</th> */}
              {/* <th className="px-4 py-2 text-left text-sm font-semibold text-gray-200">Actions</th> */}
            </tr>
          </thead>
          <tbody className="bg-gray-700 divide-y divide-gray-600">
            {people.map((person) => (
              <React.Fragment key={person.email}>
                <tr className="bg-gray-600">
                  <td className="whitespace-nowrap py-5 pl-4 pr-3 text-lg font-semibold sm:pl-0">
                    <div className="flex items-center mx-16">
                      <div className="size-20 shrink-0">
                        <img
                          alt=""
                          src={person.profileImage}
                          className="size-20 rounded-full"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-200">
                          {person.firstName + ' ' + person.lastName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div className="text-gray-900">{person.title}</div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      Year: {person.year}
                    </span>
                  </td>
                  {/* <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <button
                      onClick={() => toggleRow(person.email)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      {openRows[person.email] ? 'Hide Projects' : 'Show Projects'}
                    </button>
                  </td> */}
                </tr>
                {true && (
                  <tr className="bg-gray-800">
                    <td colSpan="4" className="py-4 px-4">
                      <div className="space-y-2 flex flex-row w-[60rem] justify-evenly">
                        {person.projects.map((project, index) => (
                          <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-blue-400 hover:underline"
                          >
                            {project.title}
                          </a>
                        ))}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      );
}

export default ProfileProjectList