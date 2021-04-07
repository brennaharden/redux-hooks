import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
// must import these hooks from react-redux
import {getHolds} from '../../ducks/holdReducer';
// bring in your desired action from the reducer
import axios from 'axios';
import Hold from '../Hold/Hold';

function Account() {
    const {user} = useSelector((state) => state.authReducer)
    // replaces mapStateToProps... we now have access to the user object from our reducer. see: https://react-redux.js.org/api/hooks#useselector
    const {holds} = useSelector((state) => state.holdReducer)
    // again, we are bringing in holds from global state
    const {id, img} = user
    // destructuring id and img off of the user object
    const dispatch = useDispatch()
    // this is the syntax needed to use the useDispatch hook. see: https://react-redux.js.org/api/hooks#usedispatch

    useEffect(() => {
        if (id) {
            axios.get(`/api/holds/${id}`).then(res => {
                console.log(res.data)
                dispatch(getHolds(res.data))
                // invoke dispatch and pass the action from your reducer, invoked with the data you want to include as your payload as an argument 
                // In this example, we're fetching holds from the database, according to the user's id... then saving it to global state (redux) using our getHolds action
            }).catch(err => console.log(err))
        }
        
    }, [dispatch, id])
    // included dispatch in the dependency array because react told me to... you might see a similar "warning"

    const deleteHold = (holdId) => {
        axios.delete(`/api/holds/${holdId}/${id}`).then(res => {
            dispatch(getHolds(res.data))
        }).catch(err => console.log(err))
    }

    return (
        <div className="act-wrapper">
        <div className="account">
            <header>My Account</header>
            <div className="big-boy">
    <Link to="/settings"><img className="make-changes" alt="click for settings"src={(img === null) ? `https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png` : `${img}`}/></Link>
                <div className="hold-container">
                    <h1>CURRENT HOLDS</h1>
                    {holds.map(hold => <Hold key={hold.id} hold={hold} delete={deleteHold}/>)}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Account;
// just a friendly reminder that you do not need to connect here when using useSelector and useDispatch