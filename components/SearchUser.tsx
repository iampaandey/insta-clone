'use client'
import { useContext, useEffect, useRef, useState } from "react"
import UserShareDis from "./UserShareDis";
import { searchUsers } from "@app/api/api";
import { AppContext } from "@app/context/MainContext";
import { AppContextType } from "@Interfaces";

const SearchUser = () => {
    const [recetList, setRecentList] = useState<any[]>([]);
    const [result, setResult] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState<Boolean>(false);
    const [user, setUser] = useState<string>('');
    const {state,dispatch}:AppContextType= useContext(AppContext)
    const searchFlag = state?.searchFlag;
    const searchRef=useRef<HTMLDivElement>(null);

    const handleClickOutside=(event:MouseEvent)=>{
        if(searchRef.current && !searchRef.current.contains(event.target as Node)){
            dispatch({type:'unSetSearchFlag'});
            dispatch({type:"showNavTitle"})
        }
    }
    useEffect(()=>{
     if(searchFlag){
        document.addEventListener("mousedown",handleClickOutside);
     }
     else{
        document.removeEventListener("mousedown",handleClickOutside);
     }

     return ()=>{
        document.removeEventListener("mousedown",handleClickOutside);
     }
    },[searchFlag])
    useEffect(()=>{
        if(typeof window != "undefined")
        {
            const lc = localStorage?.getItem('recent');
            if(lc){
            const obj = JSON.parse(lc);
            setRecentList(obj)
            }
        }
    },[])
    const handleSearch = async(val:any)=>{
        setUser(val)
        const res = await searchUsers({username:val})
        setResult(res)
        if(val=='')setResult([]);
    }
  return (<>    
  {
    searchFlag &&
    <div ref={searchRef} className="search-mainn">
      <h2 className="txt1">Search</h2>
      <input type="text" placeholder="Search" value={user} onChange={(e)=>{handleSearch(e.target.value)}} name="" id="" className="searchuser" onFocus={()=>{setIsSearching(true)}} />
      <hr />
      <h4 className="txt2">Recent</h4>

      <div className="search-list">
            {
                isSearching?
                result?.map((e)=>{
                    return <UserShareDis key={e?.email} setTargetMail={()=>{}} targetmail={e?.username}  name={e?.username}/>
                })
                :
                recetList?.map((e)=>{
                    return <UserShareDis key={e?.email} setTargetMail={()=>{}} targetmail={e?.username}  name={e?.username}/>
                })
            }
        </div>
    </div>
    }
    </>

  )
}

export default SearchUser
