import { useState} from 'react'
import  Router from 'next/router'
import useRequest from '../../hooks/requestHook'

export default ()=>{
  const[ email, setEmail] = useState('')
  const[ password, setPassword] = useState('')
  const{ requestAction, errors} = useRequest({
    url: '/api/users/signIn',
    method: 'post',
    data: {email,password},
    onSuccess: ()=> Router.push('/')
  })
 
  const onSubmit = async (event)=>{
    event.preventDefault()
   requestAction()
   
  }

  return(
    <form onSubmit={onSubmit}>
      <h1>Sign in</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          className="form-control"
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password" 
          className="form-control"
          onChange={e=>setPassword(e.target.value)}
          value={password}
          ></input>
      </div>
      <button className="btn btn-primary">Sign in</button>
    {errors}
    </form>
  )
}