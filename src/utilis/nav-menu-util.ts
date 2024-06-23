import { Icons } from "../assets/svg";
import { SvgIcons } from "../assets/svg/ReactSvg";
import { UserRoles } from "../models/enum";
import { INavMenu } from "../models/interfaces/auth";
import { ClientRoutesConstants } from "../shared/constants";

export const menus:INavMenu[]=[
    {
      id:"common_dash",
      text:"Dashboard",
      url:ClientRoutesConstants?.dashboard,
      allowed:[UserRoles.ADMIN,UserRoles?.SUPERADMIN,UserRoles.USER],
      opened:true,
      icon:SvgIcons.DashboardSVG,
      activeIcon:Icons.DashboardWhiteIcon,
      tooltip:"dashboard"  
    },
    {
      id:"user_setting",
      text:"User Management",
      url:ClientRoutesConstants?.userManagement,
      allowed:[UserRoles?.SUPERADMIN,UserRoles.USER],
      opened:false,
      icon:SvgIcons.PeopleSVG,
      activeIcon:Icons.PeopleWhiteIcon,
      tooltip:"manage your users here"  
    },
    {
      id:"games",
      text:"Games",
      url:ClientRoutesConstants?.games,
      allowed:[UserRoles?.SUPERADMIN,UserRoles.USER],
      opened:false,
      icon:SvgIcons.GameIconSVG,
      activeIcon:Icons.PeopleWhiteIcon,
      tooltip:"manage your users here"  
    },
 
]