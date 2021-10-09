import { Switch, Route } from 'react-router-dom'
import Landingpage from '../Pages/Landingpage'
import Login from '../Pages/Login'
import Reset from '../Pages/Resetpw'
import Hire from '../Pages/Hirepage'
import Chat from '../Pages/Chat'
import Home from '../Pages/Home'
import Guard from './guard'

import CompanyProfiles from '../Pages/Profile'
import CompanyEditProfiles from '../Pages/EditProfile'

const Router =()=>{
    return(
      <Switch>
        <Route path="/" exact>
          <Landingpage />
        </Route>
        <Route path="/login" exact render={(props)=>(<Login  {...props}/>)}/>
        <Route path="/reset-password" exact render={(props)=>(<Reset  {...props}/>)}/>
        <Route path="/hire" exact render={(props)=>(<Hire  {...props}/>)}/>
        {/* <Route path="/message" exact render={(props)=>(<Chat  {...props}/>)}/> */}
        <Guard path="/hire" exact component={Hire}/>
        <Guard path="/message" component={Chat}/>

        <Guard path="/home" component={Home} />
        <Guard path="/my-profile" component={CompanyProfiles} />
        <Guard path="/edit-profile" component={CompanyEditProfiles} />
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