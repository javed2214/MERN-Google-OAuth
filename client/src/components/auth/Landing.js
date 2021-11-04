import React, { useEffect } from 'react'
import './Landing.css'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentUser } from '../../actions/authAction'
import { Redirect } from 'react-router-dom'

const Landing = () => {

    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentUser())
    }, [])

    if(auth.isAuthenticated) return <Redirect to='/profile' />

    return(
        <div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="center">
                <a className="oauth-container btn black-text white" href="/auth/google" style={{ textTransform: "none", height: '52px', border: '5px solid grey' }} >
                    <div className="left">
                        <img width="21px" style={{ marginTop: '5px', marginRight: '10px'}} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                    </div>
                    <span style={{ fontWeight: 'bold', fontSize: '20px', padding: '10px', fontFamily: 'Roboto' }}>Login with Google</span>
                </a>
            </div>
        </div>
    )
}

export default Landing