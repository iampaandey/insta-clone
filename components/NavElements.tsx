"use client"
import { AppContext } from '@app/context/MainContext'
import { useRouter, usePathname } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
import { GiveData } from './GiveData'
import { AppContextType, initProps, LoggedInUser } from '@Interfaces'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

type props = {
  ImgLink: string,
  title: string,
}
const NavElements = ({ ImgLink, title }: props): JSX.Element => {
  const { state, dispatch }: AppContextType = useContext(AppContext)
  const { searchFlag, notiFlag }: initProps = state;
  const user: LoggedInUser = GiveData()
  const router: AppRouterInstance = useRouter()
  const pathname: string = usePathname()

  const handleClick = (): void => {
    if(user){
    if (title === "Create") {
      console.log('hh')
      dispatch({
        type: 'setPosting'
      })
    }
    else if (title === "Search") {
      dispatch({ type: "unSetNotiFlag" });

      if (searchFlag) {
        if (pathname != '/chat')
          dispatch({ type: "showNavTitle" });
        dispatch({ type: "unSetSearchFlag" });
      }
      else {
        dispatch({ type: "hideNavTitle" });
        dispatch({ type: "setSearchFlag" });
      }
    }
    else if (title === "Notification") {
      dispatch({ type: "unSetSearchFlag" });
      if (notiFlag) {
        if (pathname != '/chat')
          dispatch({ type: "showNavTitle" });
        dispatch({ type: "unSetNotiFlag" });
      }
      else {
        dispatch({ type: "hideNavTitle" });
        dispatch({ type: "setNotiFlag" });
      }
    }
    else if (title === "Explore") {
      router.push('explore')
    }
    else if (title == "Reels") {
      router.push('/reels')
    }
    else if (title === 'Messages') {
      router.push('/chat')
    }
    else if (title === 'Profile') {
      router.push(`/${user?.username}`)
    }
    else {
      router.push('/')
    }
  }
  }
  return (
    <div className={`nav-element ${state.showNavTitle ? 'wide' : ''} `} onClick={handleClick}>
      <span className='nav-item-span'>  <img className="nav-element-images" src={ImgLink} /> <span id={state.showNavTitle ? '' : 'hideNav'}>{title}</span></span>
    </div>
  )
}

export default NavElements
