import { UserRoles } from "../../models/enum";
import { IJwtPayload, ILocalStorage, INavMenu, IUserDetails } from "../../models/interfaces/auth";
import store from "../../redux/store/strore";
import { Constants } from "../../shared/constants"
import { removeUser, setUser } from "../../shared/slices/auth";
import { jwtDecode } from "jwt-decode";
import { menu, menus } from "../../utilis/nav-menu-util";
import SocketConnector from "../../socket-connection";
export default class AuthService {
    static get key():string{
       return Constants.authSessionKey
    }
  
    static setLogin(data:ILocalStorage){
      const json = JSON.stringify(data);
   localStorage.setItem(this.key,json)
    }
    
    // static getCurrentJWTPayload(): IJwtPayload {
    //   const session = this.getSession();
    //   const payload = session?.access_token
    //     ? jwtDecode(session.access_token)
    //     : {};
    //   if(session?.access_token){console.log(jwtDecode(session?.access_token))}
    //   return payload as IJwtPayload;
    // }


    // static intializeUser(){
    //  const userData:IUserDetails= {...this.getCurrentJWTPayload(),isAuthenticated:true}
    //  store.dispatch(setUser(userData))
    // }
    
    static getRole():string{
      const session= this.getSession()

      if(session?.role){
        return session?.role
      }
      return ""
    }
    
    static async setLogout(navigate:any){
      await localStorage.removeItem(this.key)
      store.dispatch(removeUser())
      const socketInstance= SocketConnector.getInstance()
      socketInstance.disconnect()
      await new Promise((res,rej)=>{
        res(true)
        setTimeout(()=>{
          navigate("/auth/login")
        },500)
      })
  
    }
   
  static getSession(): ILocalStorage | null {
        try {
          const session = localStorage.getItem(this.key);
          if (session) {
            const s = JSON.parse(session);
            return s ? s : null;
          }
          return null;
        } catch (e) {
          return null;
        }
      }

  static isLoggedIn(): boolean {
        const session = this.getSession();
        return !!(session && session?.access_token );
      }
  
  static getLeftMenu(){
    const userRole= this.getRole();
    const Options=[] as INavMenu[]

    menus.forEach(menu=>{
      if(menu?.submenus?.length){
      const permittedSubmenus=menu.submenus.filter(x=>x.allowed?.includes(userRole))
      if(permittedSubmenus?.length){
        Options.push({...menu,submenus:permittedSubmenus})
      }
    }
    else {
      if(menu.allowed && menu.allowed.includes(userRole)){
        Options.push({...menu})
      }
    }
  })
    return Options

  }
}