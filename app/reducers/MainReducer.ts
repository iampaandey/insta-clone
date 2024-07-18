import { ActionType, initProps } from "@Interfaces"



const MainReducer = (initialState:initProps, action:ActionType) => { 
    console.log(action)
   switch(action.type)
  {

    case 'setLoading':
        return {...initialState,loading:true};
        case 'unSetLoading':
        return {...initialState,loading:false};
    case 'setLogin':
        return {...initialState,isLogin:true,loading:false};
    case 'setPosting':
        return {...initialState,isPosting:true};  
    case 'notPosting':
        return {...initialState,isPosting:false,loading:false}
    case 'showNavTitle':
        return {...initialState, showNavTitle:true}  
    case 'hideNavTitle':
        return {...initialState, showNavTitle:false} 
    case 'showMessageBox':
        return {...initialState, showMessageBox:true,loading:false}
    case 'setUsers':
        // console.log()
        return {...initialState, users:action?.payload,loading:false} 
    case 'setUser':
        return {...initialState, user:action?.payload,loading:false}   
    case 'setSearchFlag':
        return {...initialState, searchFlag:true} 
    case 'unSetSearchFlag':
        return {...initialState, searchFlag:false,loading:false} 
    case 'setNotiFlag':
        return {...initialState, notiFlag:true} 
    case 'unSetNotiFlag':
        return {...initialState, notiFlag:false,loading:false}             
          
  }
}

export default MainReducer;

 