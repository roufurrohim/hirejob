import { Switch, Route } from 'react-router-dom'
import Landingpage from '../Pages/Landingpage'
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