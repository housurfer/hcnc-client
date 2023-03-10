import { useState } from "react"
import axios from "axios"

  const useRequest = ({url, method, data, onSuccess}) =>{
  const [errors, setErrors] = useState(null);

  const requestAction = async ()=>{
    try{
      setErrors(null)

      const response = await axios[method](url,data)
      if (onSuccess){
        onSuccess(response.data)
      }
      return response.data
      
  }catch(err){
    setErrors(<div className= "alert alert-danger">
    <h4>Error Occured</h4>
    <ul className='my-0'>
      {err.response.data.errors.map(err=><li key={err.message}>{err.message}</li>)}
    </ul>
  </div>)
  }
  
}
return{requestAction, errors}
}
export default useRequest