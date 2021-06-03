import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import '../css/loginRegiser.css'

import registerCustomer from '../services/registerCustomerService'

function RegisterCustomer() {

    const [customerData, setcustomerData] = useState({
        name: '',
        email: '',
        contact: '',
        address: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)

    const onchange = (e) => {
        setcustomerData({
            ...customerData,
            [e.target.name] : e.target.value
        })
        // console.log(customerData)
    }
    const reload = () => {
        window.location.reload(false);
    }

    const style = {

    }

    const submit = async (e) => { 
        e.preventDefault()
        setLoading(true)
        const jwt = await registerCustomer(customerData)
        localStorage.setItem('token', jwt)
        // addProduct(customerData)
        console.log(customerData)
        setLoading(false)     
        
    }

    return (
        <div className="back" style={{height: '700px'}}>
            <center>
                <Link to="/login">                                    
                    <button type="button" className="btn btn-light">Already Registered? Login</button>
                </Link> 
                
            </center>
            <div className="row">
            <div className="col-3">

            </div>
            <div className="col-6">
            <form className="container mt-5 form" autoComplete="off">                
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="form-group col-12">
                                <label htmlFor="name" className="col-5">Customer Name</label> 
                                <input onChange={onchange} value={customerData.productNo} className="form-control col-11 ml-3" type="text" id="name" name="name"/>
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="email" className="col-5">Email</label> 
                                <input onChange={onchange} value={customerData.email} className="form-control col-11 ml-3"  type="text" id="email" name="email" />
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="contact" className="col-5">Contact No</label> 
                                <input onChange={onchange} value={customerData.contact} className="form-control col-11 ml-3" type="textarea" rows="4" id="contact" name="contact"/>
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="address" className="col-5">Address</label> 
                                <input onChange={onchange} value={customerData.address} className="form-control col-11 ml-3" type="text" id="address" name="address"/>
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="password" className="col-5">Password</label> 
                                <input onChange={onchange} value={customerData.password} className="form-control col-11 ml-3" type="password" id="password" name="password"/>
                            </div>
                            <div className="form-group col-12 mt-5">
                                <center>
                                    <button onClick={submit} type="submit" className="btn btn-success">Register</button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </form> 
            </div>
            <div className="col-3">

            </div>
            </div>
        </div>
        
    )
    
}

export default RegisterCustomer