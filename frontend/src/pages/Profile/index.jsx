/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import { useState } from 'react';

import defaultPic from '../../static/images/default-pic.jpg';

import classes from './style.module.scss';

const Profile = () => {
  const [selectedPicture, setSelectedPicture] = useState(false);

  const doChangePicture = (e) => {
    const file = e.target.files[0];
    setSelectedPicture(file);
  };

  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>Edit Profile</h3>
      <form>
        <div className={classes.container}>
          <div className={classes.boxImage}>
            <img src={defaultPic} alt="Default Pictures" />
          </div>
          <label className={classes.boxChoosePhoto}>
            <span>Choose Photo</span>
            <input type="file" name="picture" onChange={doChangePicture} />
          </label>
        </div>
        <div className={classes.boxInput}>
          <div className={classes.formInput}>
            <label>Name</label>
            <input type="text" />
          </div>
          <div className={classes.formInput}>
            <label>Email</label>
            <input type="email" />
          </div>
        </div>
        <div className={classes.btnSave}>
          <button type="submit">Save Change</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
