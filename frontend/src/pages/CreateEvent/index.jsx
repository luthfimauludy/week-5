/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import { useState } from 'react';

import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

import classes from './style.module.scss';

const CreateEvent = () => {
  const [selectedPicture, setSelectedPicture] = useState(false);
  const [pictureURL, setPictureURL] = useState('');

  const fileToDataUrl = (file) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setPictureURL(reader.result);
    });
    reader.readAsDataURL(file);
  };

  const doChangePicture = (e) => {
    const file = e.target.files[0];
    setSelectedPicture(file);
    fileToDataUrl(file);
  };

  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>Create Event</h3>
      <form>
        <div className={classes.boxInput}>
          <div className={classes.containInput}>
            <div className={classes.formInput}>
              <label>Title</label>
              <input type="text" name="title" />
            </div>
            <div className={classes.formInput}>
              <label>Location</label>
              <select name="cityId">
                <option>Select Location</option>
              </select>
            </div>
            <div className={classes.formInput}>
              <label>Category</label>
              <select name="categoryId">
                <option hidden>Select Category</option>
              </select>
            </div>
            <div className={classes.formInput}>
              <label>Date Time</label>
              <input type="date" name="date" />
            </div>
          </div>
          <div className={classes.containPhoto}>
            {!selectedPicture && (
              <div className={classes.boxPhoto}>
                <ImageOutlinedIcon />
              </div>
            )}
            {selectedPicture && (
              <div className={classes.boxPhoto}>
                <img src={pictureURL} alt="Default Pictures" />
              </div>
            )}
            <div className={classes.boxChoosePhoto}>
              <label>
                <span>Choose Photo</span>
                <input name="picture" type="file" onChange={doChangePicture} />
              </label>
            </div>
          </div>
        </div>
        <div className={classes.boxDesc}>
          <div className={classes.formInput}>
            <label>Date Time</label>
            <textarea cols="79" rows="3" />
          </div>
        </div>
        <div className={classes.btn}>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
