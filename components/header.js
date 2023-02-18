import Link from 'next/link'

export default ({ currentUser }) =>{

  const signLinks = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup'},
    !currentUser && { label: 'Sign In', href: '/auth/signin'},
    currentUser && { label: 'Sign Out', href: '/auth/signout'}
  ]
  .filter(status=>status)
  .map(({label, href})=>{
    return <li key={href} className='nav-item'>
      <Link className='nav-link' href={href}>{label}</Link>
    </li>
  })

  return(
    <nav className="navbar navbar-light bg-light">
      <Link className='nav-link' href="/">HCNC</Link>
      <div className='d-flex justify-content-end'>
        <ul className='nav d-flex align-items-center'>

          {signLinks}
        </ul>

      </div>

    </nav>
  )
}