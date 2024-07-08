
export interface Message {
    message: string;
    email: string;
}
export interface Friends {
    fUsername: string;
    fEmail: string;
    _id: string;
    messages: [Message]

}
export interface Comment {
    username: string;
    comment: string;
}
export interface Post {
    caption: string;
    comments: [Comment];
    imageUri: string;
    likeCount: number;
    likedBy: [string];
    username: string
}
export interface LoggedInUser {
    email: string;
    following: [string];
    friends: [Friends];
    name: string;
    notification: [Message];
    posts: [Post];
    socketIdd: string;
    username: string;
    _v: number;
    _id: string
}
export interface ErrorRes {
    message: string
}

type User = any;

export type initProps = {
    isLogin: boolean,
    isPosting: boolean,
    showNavTitle: boolean,
    showMessageBox: boolean,
    user: any,
    users: Array<User>,
    searchFlag: Boolean,
    notiFlag: Boolean
}

export type SetLogin = {
    type: 'setLogin',
}
export type SetPosting = {
    type: 'setPosting'
}
export type NotPosting = {
    type: 'notPosting'
}
export type ShowNavTitle = {
    type: 'showNavTitle'
}
export type serachFlag = {
    type: 'setSearchFlag' | 'unSetSearchFlag'
}
export type notiFlag = {
    type: 'setNotiFlag' | 'unSetNotiFlag'
}
export type showMessageBox = {
    type: 'showMessageBox'
}
export type getUsers = {
    type: 'setUsers',
    payload: Object
}
export type setUser = {
    type: 'setUser',
    payload: Object
}
export type hideNavTitle = {
    type: 'hideNavTitle',
    payload: Object
}
export type ActionType = SetLogin | SetPosting | NotPosting | ShowNavTitle | showMessageBox | getUsers | setUser | hideNavTitle | serachFlag | notiFlag;

export interface AppContextType {
    state: initProps,
    dispatch: React.Dispatch<ActionType>
}

export interface FormData {
    email: string;
    password: string;
    redirect: boolean
}

export interface UsernameArrayType {
    id?: string,
    username: string,
    __v?: number
}

export interface FormData2 extends UsernameArrayType {
    imageUri: string,
    likeCount: number,
    caption: string
}
export interface Res2 {
    message: string,
    status: number
}

