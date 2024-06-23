import {io} from 'socket.io-client'
import { UrlUtils } from './utilis/http-utils'
import AuthService from './core/service/auth.service'

const URL=UrlUtils.getBaseUrl()

export const socket=io(URL,{
    autoConnect:false,
    extraHeaders:{
    Authorization: `Bearer ${AuthService.getSession()?.access_token}`,
}})