
import useUserManagementhook from "../components/useUserManagementhook";
import PageWrapperWithButton from "../../../../components/layouts/mainContainer";



const UserManagement = () => {
  const { handleUser } = useUserManagementhook();

  return (
    <PageWrapperWithButton
      title="User Management"
      showButton={true}
      buttonTitle="Add User"
      buttonHandler={()=>handleUser()}
      buttonClassName="bg-[#fe5e37] text-white px-3"
    >
      <div className="h-full w-full bg-white">1</div>
    </PageWrapperWithButton>
  );
};

export default UserManagement;
