
import { sendPostRequest } from '../utils/sendRequest';
import {showPopup} from '../utils/showPopup'



//  register a user
export const registerUser = async (email, fullName, password, history, setState,dispatch) => {
  const data = { email: email, name: fullName, password: password };
  sessionStorage.setItem('user', JSON.stringify(data))
  const response = await fetch(
    `/accounts/register`,
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  const res = await response.json()
  if(res.success){
    setState(true)
    setTimeout(()=>{setState(false)}, 60000)
  }else{
    showPopup(dispatch, {emotion:'', message: res.message})
  }
  
};



export const submitOtp = async(otp, history, dispatch)=>{
  try {
    if(otp){
      const data = JSON.parse(sessionStorage.getItem('user'))
      const response = await sendPostRequest(`/accounts/register/${otp}`, data)
      if(response.success){
        history('/accounts/products')
        showPopup(dispatch, {emotion:'Registration successful', message:'welcome to Mihles cart'})
      }
      else{
        showPopup(dispatch, {emotion:'', message:response.message})
      }
    }
   
  } catch (error) {
    showPopup(dispatch, {emotion:'', message:error.message})
  }
}

//  login user

export const loginUser = async (email, password, history, dispatch) => {
  const data = { email: email, password: password };
  const response = await fetch(
    `/accounts/login`,
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data)
    
    }
  );
  const res = await response.json()
  if(res.message ==='token sent sucessfully'){
    showPopup(dispatch, {emotion:'login successfull', message: 'welcome back to Mihles.cart'})
    history('/accounts')
  }
  else{
    console.log(res)
  }
};
