"use client"
import { useContext, useEffect, useState } from "react"
import ButtonPrimary from "./ButtonPrimary"
import { AppContext } from "@app/context/MainContext"
import { addPost } from "@app/api/api"
import { useSession } from "next-auth/react"
import InputBox from "./InputBox"
import { GiveData } from "./GiveData"
import AlertBox from "./AlertBox"

const PostBox = () => {
   const {state, dispatch}=useContext(AppContext);
   const [message, setMessage] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [isAlert, setIsAlert] = useState<boolean>(false);
   const [us, setUs] = useState<string>("")
   const [val, setVal] = useState<string>("Select from computer")

   
   const [caption, setCaption] = useState<string>("")
   const [uri, setUri] = useState<any>()
   const data:any = GiveData();
   const {isPosting} = state;
   useEffect(()=>{
    if(data)
    {
      // console.log(data)
      setUs(data?.username)
    }
   },[])
   function fileToUrl() {
    setVal("Added !")
    const elem:any  = document?.querySelector("input[type=file]");
    const file = elem?.files[0]
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        // convert image file to base64 string
        console.log(reader.result)
        setUri(reader?.result);
      },
      false,
    );
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
 
    const handleClick=async()=>{
      const elem = document.getElementById('fl')
      elem?.focus()
    }
    const handlePost = async()=>{
      const formdata:any = {
        username: us,
        imageUri:uri,
        likeCount:0,
        caption:caption
      }
      const res = await addPost(formdata)
      console.log(res)
      if(res.status === 200)
        {
          
          setMessage("Posted !")
          setType("success")
        }
        else
        {
          
          setMessage("Something Went Wrong")
          setType("error")
        }
        setIsAlert(true)
      setTimeout(() => {
        
        dispatch({
          type:'notPosting'
        })
      }, 3000)
      
    }
    const handleRandClick=()=>{
      dispatch({
        type:'notPosting'
      })
    }
  return (
    <>
    {          isAlert &&           <AlertBox type={type}  message={message} onClose={()=>setIsAlert(false)}/>
  }   
   {isPosting && <><div className="postBox-container"
    onClick={handleRandClick}
    >
    </div>

         <div className="post-flex">
            <div className="postBox-main">
      <h3 className="create-post-heading">Create new post</h3>
      <hr/>
      <ButtonPrimary buttonValue={val} onclickFun={handleClick}/>
      <InputBox placeText="Write A Captions" type="text" val={caption} setVal={setCaption}/>
      <ButtonPrimary buttonValue="Post" onclickFun={handlePost}/>

      <input type="file" name="fl" id="fl" className="fl" onChange={fileToUrl} />
    </div>
    </div>
    </>
    }
   
   
    </>
  )
}

export default PostBox
