import React from 'react'
import AddRoom from './AddRoom'
import Sidebar from './Sidebar'
import { Switch, Route} from 'react-router-dom'

function AdminPannel() {
    return (
        <div>
            <div className="row">            
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="container col-10">
                    <Switch>
                        <Route path="/admin/addroom" component={AddRoom}/>
                        <Route path="/admin" component={AddRoom}/> 
                    </Switch>
                </div>      
            
            </div>
            
        </div>
    )
}

export default AdminPannel
