
import {showPopup} from '../utils/showPopup'



//  register a user
export const registerUser = async (email, fullName, password, history) => {
  const data = { email: email, name: fullName, password: password };
  const response = await fetch(
    `/accounts/register`,
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  const res = await response.json()
  if(res.message ==='token sent sucessfully'){
    history('/auth/accounts')
  }
  else{
    console.log(res)
  }
  
};

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
