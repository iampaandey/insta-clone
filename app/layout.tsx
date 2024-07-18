import { ReactElement } from "react"
import Nav from "../components/Nav"
import "@styles/styles.css"
import "./globals.css";

import AuthProvider from "@components/AuthProvider"
import MainProvider from "./providers/MainProvider"
import SearchUser from "@components/SearchUser"
import Notification from "@components/Notification"
import PostBox from "@components/PostBox"
import Loader from "@components/Loader";
export const metadata = {
  title: 'Socialize',
  description: 'A Clone of Instagram build with Engineering',
}
type props = {
  children: ReactElement
}
export default function RootLayout({ children }: props) {

  return (
    <html lang="en">
      <body>
          <MainProvider>
          <Nav/>
          <SearchUser/>
          <Notification/>
          <Loader/>
          <PostBox/>     
          {children}
          </MainProvider>
      </body>
    </html>
  )
}
