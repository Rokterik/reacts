import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
    return  (
        <div>

        <div>
          <img src='https://cdn.wallpapersafari.com/43/52/rkRsp5.jpg'/>
        </div>

        <div>
          ava + description
        </div>
          <MyPosts/>

      </div>
    )
}
export default Profile;