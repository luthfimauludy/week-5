import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { getEvent } from './actions';
import { selectEvent } from './selectors';

import imgEvents from '../../static/images/img-grid.png';

import classes from './style.module.scss';

const Home = ({ dataEvent }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(dataEvent);

  useEffect(() => {
    dispatch(
      getEvent(
        (res) => {
          setData(res);
        },
        (error) => {
          console.log(error);
        }
      )
    );
  }, [dispatch]);

  useEffect(() => {
    setData(dataEvent);
  }, [dataEvent]);

  return (
    <div className={classes.wrapper}>
      <section className={classes.header}>
        <div className={classes.boxSearch}>
          <input type="text" placeholder="Search event" />
          <button type="button">
            <FormattedMessage id="app_home_button_search" />
          </button>
        </div>
      </section>
      <section className={classes.mainContent}>
        <h1>
          <FormattedMessage id="app_home_header_title" />
        </h1>
        <div className={classes.container}>
          {data?.map((item, index) => (
            <div key={index} className={classes.boxEvent}>
              <div className={classes.cardEvent}>
                <div>
                  <img src={imgEvents} alt="Event Pictures" />
                </div>
              </div>
              <div className={classes.boxTitle}>
                <div className={classes.title}>
                  <h3>{item.title}</h3>
                  <p>
                    {item.cities.location}, {item.date}
                  </p>
                </div>
                <p className={classes.subTitle}>{item.descriptions}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

Home.propTypes = {
  dataEvent: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  dataEvent: selectEvent,
});

export default connect(mapStateToProps)(Home);
