import {  Modal } from "flowbite-react";
import { useAppDispatch, useAppSelector } from "../../redux/store/strore";
import { closeModal } from "../../shared/slices/common";
import ModalTypes from "../../utilis/modal-constant-util";
import { IModalProps } from "../../models/interfaces/user-managment";
import TimedWinnerSelectPopup from "../../pages/private/Games/components/popup/TimedWinnerSelectPopup";


function ModalLayout() {
  const { isOpen, bodyType, extraObject, title }:IModalProps = useAppSelector(
    (state) => state?.modal
  );
  const { MODAL_BODY_TYPES } = ModalTypes;
  const dispatch = useAppDispatch();
  const close = () => {
    if(extraObject?.closeHandler){
      extraObject?.closeHandler()
    }
    dispatch(closeModal());
  };

  return (
    <>
      {/* The button to open modal */}
      <Modal dismissible show={isOpen} onClose={close}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
        {/* <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3> */}

{/* Loading modal body according to different modal type */}
{
  {
    //   [MODAL_BODY_TYPES.LEAD_ADD_NEW]: (
    //     <AddLeadModalBody
    //       closeModal={close}
    //       extraObject={extraObject}
    //     />
    //   ),

    [MODAL_BODY_TYPES.UPDATE_USER]: <div>Update User</div>,
    [MODAL_BODY_TYPES.CREATE_USER]: <div>Create User</div>,
    [MODAL_BODY_TYPES.SELECT_WINNER]: <TimedWinnerSelectPopup  closeModal={close}  extraobject={extraObject}/>,
    [MODAL_BODY_TYPES.DEFAULT]: <div></div>,
  }[bodyType]
}
        </Modal.Body>
        
      </Modal>
      {/* Put this part before </body> tag */}
     
    </>
  );
}

export default ModalLayout;
