import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentUser } from '../../actions/authAction'
import { Redirect } from 'react-router-dom'
import './Profile.css'

const Profile = () => {

    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [thumbnail, setTuhmbnail] = useState('')

    useEffect(() => {
        dispatch(getCurrentUser())
    }, [dispatch])

    useEffect(() => {
        if(auth.isAuthenticated){
            setName(auth.user.name)
            setEmail(auth.user.email)
            setTuhmbnail(auth.user.thumbnail)
        }
    }, [auth])

    if(!auth.isAuthenticated) return <Redirect to='/' />

    return(
        <div className="jumbotron">
           <h1 className="display-4">Howdy, <b>{name}!</b></h1><br />
           <p className="lead">We got these details about you.</p>
           <hr className="my-4" />
           <center>
             <div className="profile-container">
                <div className="profile-item">
                <ul className="list-group">
                  <li className="list-group-item">
                    <div>
                      <b>Name</b>: {name}
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div>
                      <b>Email</b>: {email}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="profile-item">
                <img
                  className="photo"
                  src={thumbnail}
                  alt=""
                />
              </div>
            </div>
          </center>
        </div>
    )
}

export default Profile