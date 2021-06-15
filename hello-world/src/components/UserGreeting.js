import React, {Component} from "react"
class UserGreeting extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isloggedIn: true
        }
    }
    render()
    {
       let message
       if(this.state.isloggedIn)
       {
          message= <div>Welcome Aishu</div>
       }
       else
       {
           message= <div>Welcome Guest</div>
       }
       return(
       <div>{message}</div>
       )
           }

}
export default UserGreeting
