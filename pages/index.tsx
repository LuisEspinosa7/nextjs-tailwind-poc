import Dashboard from './dashboard'
import Login from './login'
import Menu1 from './menu1';


export default function Home() {
  var isAuthenticated: boolean = true

  var content = isAuthenticated ? <Menu1/> : <Login/>;
  return (
    <>
      {
        content
      }
    </>
  )
}
