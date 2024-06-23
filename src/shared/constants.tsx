export const Constants = {
    authSessionKey: "auth",  
  
  };
export const ClientRoutesConstants={
  dashboard:"/app/dashboard",
  games:"/app/games",
  userManagement:"/app/user-management",
  login:"/auth/login",
  index:"/"
}
  export const APIConstants = {
    login: "/api/auth/login",
    userList:"/api/users/getAllUsers",
    getAllGames:"/api/game/getAllGames",
    getAllRooms:"/api/room/getAllRooms",
    getActiveRoom:"/api/room/getActiveRoom",
    getAllParticipants:"/api/participant/getAllOrderListByRoomId",
    submitColorGameResult:'/api/room/submitResult'
  };