import { useEffect } from "react"
import Router from 'next/router'
import useRequest from "../../hooks/requestHook"

export default ()=>{
  const { requestAction } = useRequest({
    url: '/api/users/signOut',
    method: 'post',
    data: {},
    onSuccess: ()=> Router.push('/')
  })
  useEffect(()=>{
    requestAction()
  }, [])
}