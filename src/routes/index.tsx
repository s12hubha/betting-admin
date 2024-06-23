
import {useRoutes} from 'react-router-dom';
import { ProtectedRoutes } from './protected';
import { publicRoutes } from './public';

export interface IAppProps {
  auth:boolean
}

export default function RoutePage ({auth}:IAppProps) {

  const getRoutes= auth? ProtectedRoutes:publicRoutes


  const element = useRoutes([...getRoutes]);
  return <>{element}</>
}
