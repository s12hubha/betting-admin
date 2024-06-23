import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store/strore";
import { setIsSidebarOpen } from "../../shared/slices/auth";
import AuthService from "../../core/service/auth.service";
import { INavMenu } from "../../models/interfaces/auth";
import { NavLink } from "react-router-dom";

const useSidebarhook = () => {
  const { isSideBarOpen } = useAppSelector((state) => state?.auth);
  const [sidebarMenus, setSidebarMenus] = useState<INavMenu[] | undefined>();

  const dispatch = useAppDispatch();
  useEffect(() => {
    setSidebarMenus(AuthService.getLeftMenu());
  }, []);
  useEffect(() => {
    const hideSidebar = () => {
      if (window.innerWidth <= 640) {
        toggleSidebar(false);
      }
    };
    window.addEventListener("resize", hideSidebar);
    window.addEventListener("load", hideSidebar);
    return () => {
      window.removeEventListener("resize", hideSidebar);
      window.removeEventListener("load", hideSidebar);
    };
  }, [window.innerWidth]);

  const nestedMenuClick = (
    ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    menu: INavMenu,
    index: number
  ) => {
    if (sidebarMenus?.length) {
      const arr = [...sidebarMenus];
      arr.forEach((m: INavMenu) => {
        m.opened = false;
      });
      arr[index].opened = !arr[index].opened;
      arr.splice(index, 1, arr[index]);
      setSidebarMenus([...arr]);
    }
  };

  const getMenuItems = (items: INavMenu[] | undefined): React.ReactNode => {
    if (items?.length) {
      return items.map((menu, index) => {
        const {icon:Icon}=menu
       
        return (
          <li className={"w-full p-3  mx-auto"} key={index + menu?.id}>
            <NavLink
              to={menu?.url}
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-gray-600"} ${
                  isSideBarOpen ? "justify-start" : "justify-center"
                } flex text-sm transition-all gap-3 items-center w-full`
              }
              onClick={(e) => nestedMenuClick(e, menu, index)}
            >
              <div className="w-fit bg-white">
                {Icon && <Icon color={menu?.opened?"#000":"#4b5563"} />}
              </div>
              <p className={`${isSideBarOpen ? "block" : "hidden"}`}>
                {menu?.text}
              </p>
              {menu?.submenus?.length ? (
                <span className="pull-right-container">
                  <i className="fa fa-angle-left float-right"></i>
                </span>
              ) : null}
            </NavLink>
            <ul
              className={
                "treeview-menu" +
                (menu?.submenus?.length && menu.opened ? " block" : " hidden")
              }
            >
              {getMenuItems(menu?.submenus)}
            </ul>
          </li>
        );
      });
    }
  };

  const toggleSidebar = (state?: boolean | undefined) => {
    if (state) {
      return dispatch(setIsSidebarOpen(state));
    }
    dispatch(setIsSidebarOpen(!isSideBarOpen));
  };
  return { isSideBarOpen, toggleSidebar, getMenuItems, sidebarMenus };
};

export default useSidebarhook;
