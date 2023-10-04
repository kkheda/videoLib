import React from "react";
import "./SideBar.css";
import HomeIcon from "@mui/icons-material/Home";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import QueueIcon from "@mui/icons-material/Queue";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import HistoryIcon from "@mui/icons-material/History";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const sideBarData = [
    {
      title: "Explore",
      icon: <HomeIcon />,
      link: "/LandingPage",
    },
    {
      title: "Liked",
      icon: <ThumbUpAltIcon />,
      link: "/LikedVideos",
    },
    {
      title: "PlayList",
      icon: <QueueIcon />,
      link: "/PlaylistPage",
    },
    {
      title: "Watch Later",
      icon: <WatchLaterIcon />,
      link: "/WatchLater",
    },
    {
      title: "History",
      icon: <HistoryIcon />,
      link: "/History",
    },
  ];

  return (
    <div className="sideBar__container">
      <ul className="sideBar__list">
        {sideBarData.map((val, key) => {
          return (
            <NavLink to={val.link} key={key} className="sideBar__row">
              <div className="cursor icon">{val.icon}</div>
              <div className="cursor title"> {val.title}</div>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
