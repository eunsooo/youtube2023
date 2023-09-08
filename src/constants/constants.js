import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

import { AiOutlineFire } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { PiFilmSlateLight } from "react-icons/pi";
import { BsBroadcastPin } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiSoccerBallLight } from "react-icons/pi";
import { GoPencil } from "react-icons/go";

export const footerText = [
    {
        title: "github",
        url: "/",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "/",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "/",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "/",
        icon: <AiOutlineInstagram />
    },
  ]
  
  export const categories = [
      {
          title: "인기 급상승",
          icon: <AiOutlineFire />,
          src: "/trending"
      },
      {
          title: "쇼핑",
          icon: <AiOutlineShopping />,
          src: "/shopping"
      },
      {
          title: "음악",
          icon: <AiOutlinePlayCircle />,
          src: "/music"
      },
      {
          title: "영화",
          icon: <PiFilmSlateLight />,
          src: "/movie"
      },
      {
          title: "실시간",
          icon: <BsBroadcastPin />,
          src: "/live"
      },
      {
          title: "게임",
          icon: <IoGameControllerOutline />,
          src: "/game"
      },
      {
          title: "스포츠",
          icon: <PiSoccerBallLight />,
          src: "/sports"
      },
      {
          title: "학습",
          icon: <GoPencil />,
          src: "/education"
      },
  ];