

type Props={
    buttonValue:string,
    onclickFun:()=>void,
    flag:boolean
}
const ButtonPrimary = ({buttonValue, onclickFun, flag}:Props) => {
  console.log(flag)
  return (
    <div>
      <button className="buttonprimary" disabled={flag} onClick={onclickFun}>{buttonValue}</button>
    </div>
  )
}

export default ButtonPrimary
