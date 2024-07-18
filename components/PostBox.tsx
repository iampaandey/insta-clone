"use client"
import { useContext, useEffect, useState } from "react"
import ButtonPrimary from "./ButtonPrimary"
import { AppContext } from "@app/context/MainContext"
import { addPost } from "@app/api/api"
import InputBox from "./InputBox"
import { GiveData } from "./GiveData"
import AlertBox from "./AlertBox"
import { AppContextType, FormData2, LoggedInUser, Res2 } from "@Interfaces"

const PostBox = ():JSX.Element => {
const { state, dispatch }:AppContextType = useContext(AppContext)
const [message, setMessage] = useState<string>("");
const [type, setType] = useState<string>("");
const [isAlert, setIsAlert] = useState<boolean>(false);
const [us, setUs] = useState<string>("")
const [val, setVal] = useState<string>("Select from computer")


const [caption, setCaption] = useState<string>("")
const [uri, setUri] = useState<string>("")
const data: LoggedInUser = GiveData();
const { isPosting } = state;
useEffect(():void => {
  if (data) {
    // console.log(data)
    setUs(data?.username)
  }
}, [])
function fileToUrl():void {
  setVal("Added !")
  const elem : HTMLInputElement | null= document?.querySelector("input[type=file]");
  if(elem){
  const file :File|undefined = elem?.files?.[0]
  const reader : FileReader = new FileReader();
  reader.addEventListener(
    "load",
    () => {
      // convert image file to base64 string
      if(typeof reader.result === "string" )
      setUri(reader.result);
    },
    false,
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}
}

const handleClick =  ():void => {
  const elem :HTMLElement|null = document.getElementById('fl')
  elem?.focus()
}
const handlePost = async ():Promise<void> => {
  dispatch({type:"setLoading"})
  const formdata: FormData2 = {
    username: us,
    imageUri: uri||"",
    likeCount: 0,
    caption: caption
  }
  const res :Res2 = await addPost(formdata)
  console.log(res)
  if (res.status === 200) {
    setMessage("Posted !")
    setType("success")
  }
  else {
    setMessage("Something Went Wrong")
    setType("error")
  }
  setIsAlert(true)
  setTimeout(() => {
    dispatch({
      type: 'notPosting'
    })
    dispatch({type:"unSetLoading"})
  }, 1000)
  

}
const handleRandClick = ():void => {
  dispatch({
    type: 'notPosting'
  })
}
return (
  <>
    {isAlert && <AlertBox type={type} message={message} onClose={() => setIsAlert(false)} />
    }
    {isPosting && <><div className="postBox-container"
      onClick={handleRandClick}
    >
    </div>

      <div className="post-flex">
        <div className="postBox-main">
          <h3 className="create-post-heading">Create new post</h3>
          <hr />
          <ButtonPrimary buttonValue={val}flag={false} onclickFun={handleClick} />
          <InputBox placeText="Write A Captions" type="text" val={caption} setVal={setCaption} />
          <ButtonPrimary buttonValue="Post" flag={uri===""} onclickFun={handlePost} />
          <input type="file" name="fl" id="fl" className="fl" onChange={fileToUrl} />
        </div>
      </div>
    </>
    }


  </>
)
}

export default PostBox
