import { Switch, Route } from 'react-router-dom'
import Landingpage from '../Pages/Landingpage'
import Login from '../Pages/Login'
import Reset from '../Pages/Resetpw'
import Hire from '../Pages/Hirepage'
// import Chat from '../Pages/Chat'
import Profile from '../Pages/Profile2'
import EditProfile from '../Pages/EditProfile'
import Home from '../Pages/Home'
import Konfirmasipass from '../Pages/Konfirmasipass'
import Register from '../Pages/Register'
import Message from '../Pages/Chat'
import Guard from './guard'

const Router =()=>{
    return(
      <Switch>
        <Route path="/" exact>
            <Landingpage />
        </Route>
        
        <Route path="/Konfirmasipass" exact render={(props)=>(<Konfirmasipass  {...props}/>)}/>
        <Route path="/register/:id" exact render={(props)=>(<Register  {...props}/>)}/>
        <Guard path="/editprofile/:id" exact component={EditProfile}/>
        <Route path="/login" exact render={(props)=>(<Login  {...props}/>)}/>
        <Route path="/login/:id" exact render={(props)=>(<Login  {...props}/>)}/>
        <Route path="/reset-password" exact render={(props)=>(<Reset  {...props}/>)}/>
        <Guard path="/hire" exact render={(props)=>(<Hire  {...props}/>)}/>
        {/* <Route path="/message" exact render={(props)=>(<Chat  {...props}/>)}/> */}
        <Guard path="/hirepage" exact component={Hire}/>
        <Guard path="/message" component={Message}/>
        <Guard path="/editprofile/:id" exact component={EditProfile}/>
        <Guard path="/profile" exact component={Profile}/>
        <Guard path = "/home" component={Home} />

        <Route>
          404 NOT FOUND
        </Route>
      </Switch>
    )
}

export default Router
