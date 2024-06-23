import useSidebarhook from "./useSidebarhook";
import { Icons } from "../../assets/svg";
const Sidebar = () => {
  const { isSideBarOpen, toggleSidebar, sidebarMenus, getMenuItems } =
    useSidebarhook();
  return (
    <div
      className={` ${
        isSideBarOpen ? "sm:w-1/5 w-full" : "sm:w-1/12 w-0"
      } transition-all ease-in-expo delay-150 absolute sm:relative top-0 left-0 bottom-0 z-10 border h-full rounded-r-xl bg-gray-900 bg-opacity-75`}
    >
      <div
        className={`${
          isSideBarOpen ? "w-72" : "w-0 hidden"
        }  sm:block justify-between sm:w-full relative  bg-[#0a0a0a] h-full text-white rounded-xl border py-5`}
      >
        <ul className="px-3"> {getMenuItems(sidebarMenus)}</ul>

        <div
          onClick={() => toggleSidebar()}
          className={` ${
            isSideBarOpen ? "rotate-180" : ""
          } transition-all ease-in-expo  rounded-full w-8 h-8 grid place-items-center bg-gray-300 text-[#0a0a0a] z-20 border-[4px] border-white absolute -right-4 hover:cursor-pointer top-11`}
        >
          <img src={Icons?.RightArrowIcon} width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
