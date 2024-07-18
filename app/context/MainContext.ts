"use client"


import { initProps } from "@Interfaces";
import React, { createContext, Dispatch } from "react"

export const initialState :initProps = {
  isLogin : false,
  isPosting:false,
  showNavTitle:false,
  showMessageBox:false,
  loading:false,
  user:[],
  users:[],
  searchFlag:false,
  notiFlag:false
  }
export const AppContext=createContext<{state : initProps; dispatch:React.Dispatch<any>}>({state : initialState,dispatch: ()=>null})
