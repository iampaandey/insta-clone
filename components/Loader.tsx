'use client'
import { AppContext } from "@app/context/MainContext";
import { AppContextType } from "@Interfaces";
import Image from "next/image"
import { useContext, useEffect} from "react";

const Loader = ()=>{
    const {state}:AppContextType= useContext(AppContext)
    const loading:boolean = state?.loading
    useEffect(()=>{},[loading])
    return<>
    {loading?
     <div className="loader">
    <Image   width={400} height={400} src='/loaderr.gif' alt="loader"/>
    </div>
    :""}
    </>
}
export default Loader;