import { Socket, io } from "socket.io-client";
import store from "./redux/store/strore";
import {  updateRoom } from "./shared/slices/games";
import { closeModal, openModal } from "./shared/slices/common";
import ModalTypes from "./utilis/modal-constant-util";
import { Store } from "@reduxjs/toolkit";

class SocketConnector {
  public static instance: SocketConnector;
  private socket: Socket | null = null;
  private store:Store=store
  private constructor(
    private readonly baseurl: string,
    private readonly authToken: string
  ) {}
  public static getInstance(
    baseurl?: string,
    authToken?: string,
  ): SocketConnector {
    if (!SocketConnector.instance) {
      SocketConnector.instance = new SocketConnector(baseurl||"", authToken||"");
    }
    return SocketConnector.instance;
  }
  public connect(): void {
    if (!this.socket) {
      this.socket = io(this.baseurl, {
        extraHeaders: {
          Authorization: `Bearer ${this.authToken}`,
        },
      });
      this.socket.on("connect", () => {
        console.log("Connected to socket server");
      });
      this.socket.on("newRoom", (room:any) => {
        const {dispatch,getState}= this.store
       
        dispatch(closeModal())
       dispatch(updateRoom(room?.data))
       
      });
      this.socket.on("newOrder", (room:any) => {
        console.log("room=>>>",room)
        // store.dispatch(setUserList([room?.data,...store.getState().game.particpantList]))
      });
      this.socket.on("updatedStatus", (room:any) => {
        console.log("status=>>>",room)
        const { MODAL_BODY_TYPES } = ModalTypes;
        const {dispatch,getState}=store
        const {ColorAndNumberGame,game,}=getState()
       
        const {activeRoom}=game
        const {gameData,maxAmountColor,maxAmountNumber}=ColorAndNumberGame
        const AllColorArr=gameData.filter(data=>data?.group==="color")
        const AllNumbersArr=gameData.filter(data=>data?.group==="number")
        dispatch(openModal({
          title: "User Details",
          bodyType: MODAL_BODY_TYPES.SELECT_WINNER,
          isOpen: true,
          extraObject: { AllColorArr,AllNumbersArr,maxAmountColor,maxAmountNumber,activeRoom },
        }))
      });

      this.socket.on("disconnect", () => {
        console.log("Disconnected from socket server");
      });
    }
  }
  public disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
  public emitEvents(event: string, data: unknown): void {
    if (this.socket) {
      this.socket.emit(event, data);
    } else {
      console.error("Soccet is not connected");
    }
  }
}
export default SocketConnector;
export const socketInstance = SocketConnector.instance;
