import { useEffect, useState } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import "./sidebar.scss";
import AuthService from "../../services/auth";

const sidebarNavItems = [
  {
    display: "Tasks",
    icon: <i className="bx bx-star"></i>,
    to: "/list-tasks",
    section: "list-tasks",
  },
  {
    display: "Create Task",
    icon: <i className="bx bx-receipt"></i>,
    to: "/create-task",
    section: "create-task",
  },
  {
    display: "Delete Task",
    icon: <i className="bx bx-bin"></i>,
    to: "/bulk-delete",
    section: "bulk-delete",
  },
];

const Sidebar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const logOut = () => {
    console.log("logOut");
    AuthService.logout();
    navigate("/login");
  };
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">Kwanso</div>
      <div className="sidebar__menu">
        <div
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${activeIndex}px)`,
          }}
        ></div>
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div
              className={`sidebar__menu__item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="sidebar__menu__item__icon">{item.icon}</div>
              <div className="sidebar__menu__item__text">{item.display}</div>
            </div>
          </Link>
        ))}
        <a className="logout-btn" onClick={logOut} > Logout</a>
      </div>
    </div>
  );
};

export default Sidebar;
