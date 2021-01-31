import React from 'react'
import s from './users.module.css'
import userPhoto from '../../assets/images/New_user.png'
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p);
                                 }}> {p} </span>
                })}
            </div>

            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                        withCredentials : true,
                                        headers:{
                                            'API-KEY': 'e75f4c93-da0c-4918-8f20-5d7dc3c1f1d8'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0){
                                                props.unfollow(u.id)
                                            }
                                        })
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                        withCredentials : true,
                                        headers:{
                                            'API-KEY': 'e75f4c93-da0c-4918-8f20-5d7dc3c1f1d8'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode===0){
                                                props.follow(u.id)
                                            }
                                        })}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                    </span>
                    <span>
                        <div>{u.status}</div>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </div>)}
        </div>
    )
}

export default Users;






