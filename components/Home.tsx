"use client"
import { useContext, useEffect, useState } from "react"
import Login from "./Login";
import PostCard from "./PostCard";
import SideBar from "./SideBar";
import { AppContext } from "@app/context/MainContext";
import { GiveData } from "./GiveData";
import { getFeed } from "@app/api/api";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

const Home = () => {
  const { state, dispatch } = useContext(AppContext);
  const {isLogin } = state;
  const [feed, setFeed] = useState<any>([]);
  const [totalPosts,setTotalPosts]=useState()
  useEffect(() => {
    dispatch({type:"setLoading"})
    dispatch({ type: 'showNavTitle' })
    const fun = async () => {
      const res = GiveData();
      if (res) {
        dispatch({ type: "setUser", payload: res })
        if(res._id !== "")
        dispatch({ type: "setLogin" })
      }
      const obj = await getFeed()
      setFeed(obj);
     
      setTotalPosts(obj.length);
    }
    if(localStorage.getItem("user"))
    fun()
  }, [])
  
    // console.log(user)
    
    const fetchMore=async ()=>{
      dispatch({type:"setLoading"})
      const availableData=await getFeed();
      dispatch({type:"unSetLoading"})

      console.log(availableData.length);
      setFeed(feed.concat(availableData));
  
      setTotalPosts(totalPosts+availableData.length);
    }
  return (
    <>
      {isLogin ? <div className='mainn'>
        <div className="main-home">
          <InfiniteScroll dataLength={feed.length} next={fetchMore} hasMore={true} loader={<Spinner/>}>
          
          <div className="postCards mt-2">
            {
              feed?.map((e: any) => {
                return <PostCard  likedBy={e?.likedBy} id={e?._id} caption={e?.caption} comment={e?.comment} imageUri={e?.imageUri} likeCount={e?.likeCount} username={e?.username} key={e?._id + e?.caption} />
              })
            }
          </div>
          </InfiniteScroll>
          <SideBar/>
        </div>
      </div> : <Login />
      }
    </>
  )
}

export default Home
