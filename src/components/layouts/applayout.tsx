import { FC } from "react";
import { useAppSelector } from "../../redux/store/strore";
import NavBar from "../Navbar";
import Sidebar from "../sidebar";
import ModalLayout from "../Modal";

type IAppLayoutProps = {
  children: React.ReactNode;
};
const Applayout: FC<IAppLayoutProps> = ({ children }) => {
  const { user } = useAppSelector((state) => state?.auth);
  const { isOpen } = useAppSelector((state) => state?.modal);
  return (
    <div className="relative h-full flex ">
      <Sidebar />
      <div className="w-full  ">
        <NavBar userName={user?.displayName} email={user?.email} />

        <div className=" h-[91vh] overflow-y-auto w-full bg-gray-100 px-5 py-4">
          {children}
        </div>
      </div>
      {isOpen && <ModalLayout />}
    </div>
  );
};

export default Applayout;
