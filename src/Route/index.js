import { Switch, Route } from 'react-router-dom'
import Landingpage from '../Pages/Landingpage'
import Login from '../Pages/Login'
import Reset from '../Pages/Resetpw'
import Hire from '../Pages/Hirepage'
// import Chat from '../Pages/Chat'
import Profile from '../Pages/Profile'
import EditProfiles from '../Pages/EditProfile'
import Home from '../Pages/Home'
import Konfirmasipass from '../pages/Konfirmasipass'
import Login from '../pages/Login'
import Register from '../pages/Register'
import RegisterPekerja from '../pages/RegisterPekerja'
import Guard from './guard'


const Router =()=>{
    return(
      <Switch>
        <Route path="/" exact>
            <Landingpage />
        </Route>
        <Route path="/RegisterPerekrut">
            <Register />
        </Route>
        <Route path="/Konfirmasipass">
            <Konfirmasipass />
        </Route>
        <Route path="/Register">
            <RegisterPekerja />
        </Route>
        <Route path="/login" exact render={(props)=>(<Login  {...props}/>)}/>
        <Route path="/reset-password" exact render={(props)=>(<Reset  {...props}/>)}/>
        <Route path="/hire" exact render={(props)=>(<Hire  {...props}/>)}/>
        {/* <Route path="/message" exact render={(props)=>(<Chat  {...props}/>)}/> */}
        {/* <Guard path="/hirepage" exact component={Hire}/> */}
        <Guard path="/editprofile/:status" exact component={EditProfiles}/>
        <Guard path="/profile/:status" exact component={Profile}/>
        <Guard component={Home} />
          {/* path = 
            login = /login/id
            register = /register
            home = /home/ {guard}
            chat = /message {guard}
            profile = /my-profile {guard}
            resetpassword = /reset-password 
            forgetpassword = /forget-password
            hire = /hire {guard} */}

        <Route>
          404 NOT FOUND
        </Route>
      </Switch>
    )
}

export default Router