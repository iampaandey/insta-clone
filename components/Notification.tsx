'use client'
import { useContext, useEffect, useRef } from "react"
import NotificationCard from "./NotificationCard"
import { AppContext } from "@app/context/MainContext"

const Notification = () => {
    const {state,dispatch} = useContext(AppContext)
    console.log(state)
    const notiFlag= state?.notiFlag;
    
    const notificationRef=useRef<HTMLDivElement>(null);
    const handleClickOutside = (event:MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
       dispatch({type:'unSetNotiFlag'})
       dispatch({type:"showNavTitle"})
       console.log("tried closing notification")
      }
    };
    useEffect(() => {
      if (notiFlag) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [notiFlag]);
    
  return (<>
   {notiFlag && <div ref={notificationRef} className="search-mainn">
            <h2 className="txt1">Notification</h2>
            <div className="noti-cards">
                <NotificationCard flag={true} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Meloni Liked Your Photo"/>
                <NotificationCard flag={true} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Amit Liked Your Photo"/>
                <NotificationCard flag={true} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Jogi Liked Your Photo"/>
                <NotificationCard flag={false} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Rahul started Followed You"/>
                <NotificationCard flag={true} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Mamta Liked Your Photo"/>
                <NotificationCard flag={true} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Meloni Liked Your Photo"/>
                <NotificationCard flag={true} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Meloni Liked Your Photo"/>
                <NotificationCard flag={false} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Mamta started Followed You"/>
                <NotificationCard flag={true} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Meloni Liked Your Photo"/>
                <NotificationCard flag={false} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Meloni started Followed You"/>
                <NotificationCard flag={true} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Meloni Liked Your Photo"/>
                <NotificationCard flag={true} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Meloni Liked Your Photo"/>
                <NotificationCard flag={true} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Meloni Liked Your Photo"/>
                <NotificationCard flag={true} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Meloni Liked Your Photo"/>
                <NotificationCard flag={false} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Lalu started Followed You"/>
                <NotificationCard flag={true} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Meloni Liked Your Photo"/>
                <NotificationCard flag={false} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Larence started Followed You"/>
                <NotificationCard flag={true} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Meloni Liked Your Photo"/>
                <NotificationCard flag={true} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Meloni Liked Your Photo"/>
                <NotificationCard flag={true} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Meloni Liked Your Photo"/>
                <NotificationCard flag={false} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Kejri started Followed You"/>
                <NotificationCard flag={true} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Meloni Liked Your Photo"/>
                <NotificationCard flag={false} uri1="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM" uri2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQadq1dY-23P-ceYTIJ9A4-hulkOzlpSeirGI5bOCk1J4Rjn9C_NMHr-NQnppAJG0-GfP3xgrmJHpykwEM"  val="Neetish started Followed You"/>



            </div>
    </div>}
    </>
  )
}

export default Notification
