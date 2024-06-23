import { UserRoles } from "../enum";

export interface ILoginDetails{
    username:string,
    password:string
}
export interface ILocalStorage{
    access_token?:string,
    refresh_token?:string,
    role:UserRoles
}
export interface IUserDetails{
    "_id"?: string,
    "email"?: string,
    "firstName"?: string,
    "lastName"?: string,
    "displayName"?: string,
    "role"?: string,
    "refrenceCode"?: string,
    "uniqueCode"?: string,
    "isVerified"?: boolean,
    "isVerifiedByAdmin"?: boolean,
    "isAuthenticated": boolean,
   
}
export interface IUserRoles{
    SUPERADMIN:'SUPERADMIN',
    ADMIN:'ADMIN',
    USER:'USER'
}
export interface INavMenu {
    id: string;
    allowed?: string[];
    text: string;
    tooltip?: string;
    url: string;
    opened?: boolean;
    icon?: ({ color }: { color?: string | undefined; }) => JSX.Element;
    activeIcon?: string | undefined;
    submenus?: INavMenu[];
  }

export interface IJwtPayload {   
        _id: string;
        createdAt: string;
        updatedAt: string;
        isActive: boolean;
        isDeleted: boolean;
        email: string;
        firstName: string;
        lastName: string;
        displayName: string;
        role: UserRoles ;
        refrenceCode: string;
        uniqueCode: string;
        isVerified: boolean;
        isVerifiedByAdmin: boolean;
        __v: number   
}


