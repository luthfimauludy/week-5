import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getEvent } from './actions';
import { selectEvent } from './selectors';
// import { FormattedMessage } from 'react-intl';

import imgEvents from '../../static/images/img-grid.png';

import classes from './style.module.scss';

const Home = ({ events }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(events);

  useEffect(() => {
    dispatch(
      getEvent(
        (res) => {
          setData(res);
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      )
    );
  }, [dispatch]);

  useEffect(() => {
    setData(events);
  }, [events]);

  return (
    <div className={classes.wrapper}>
      <section className={classes.header}>
        <div className={classes.boxSearch}>
          <input type="text" placeholder="Search event" />
          <button type="button">Search</button>
        </div>
      </section>
      <section className={classes.mainContent}>
        <h1>Events For You</h1>
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
                  <h3>{item?.title}</h3>
                  <p>{item?.cityId}</p>
                </div>
                <p className={classes.subTitle}>{item?.descriptions}</p>
              </div>
            </div>
          ))}
          {/* <div className={classes.boxEvent}>
            <div className={classes.cardEvent}>
              <div>
                <img src={imgEvents} alt="Event Pictures" />
              </div>
            </div>
            <div className={classes.boxTitle}>
              <div className={classes.title}>
                <h3>Tomorrowland</h3>
                <p>Jakarta, 20 July 2024</p>
              </div>
              <p className={classes.subTitle}>
                Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali. Sampai lah saya malam itu di
                Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..
              </p>
            </div>
          </div>
          <div className={classes.boxEvent}>
            <div className={classes.cardEvent}>
              <div>
                <img src={imgEvents} alt="Event Pictures" />
              </div>
            </div>
            <div className={classes.boxTitle}>
              <div className={classes.title}>
                <h3>Tomorrowland</h3>
                <p>Jakarta, 20 July 2024</p>
              </div>
              <p className={classes.subTitle}>
                Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali. Sampai lah saya malam itu di
                Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..
              </p>
            </div>
          </div>
          <div className={classes.boxEvent}>
            <div className={classes.cardEvent}>
              <div>
                <img src={imgEvents} alt="Event Pictures" />
              </div>
            </div>
            <div className={classes.boxTitle}>
              <div className={classes.title}>
                <h3>Tomorrowland</h3>
                <p>Jakarta, 20 July 2024</p>
              </div>
              <p className={classes.subTitle}>
                Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali. Sampai lah saya malam itu di
                Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..
              </p>
            </div>
          </div>
          <div className={classes.boxEvent}>
            <div className={classes.cardEvent}>
              <div>
                <img src={imgEvents} alt="Event Pictures" />
              </div>
            </div>
            <div className={classes.boxTitle}>
              <div className={classes.title}>
                <h3>Tomorrowland</h3>
                <p>Jakarta, 20 July 2024</p>
              </div>
              <p className={classes.subTitle}>
                Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali. Sampai lah saya malam itu di
                Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..
              </p>
            </div>
          </div>
          <div className={classes.boxEvent}>
            <div className={classes.cardEvent}>
              <div>
                <img src={imgEvents} alt="Event Pictures" />
              </div>
            </div>
            <div className={classes.boxTitle}>
              <div className={classes.title}>
                <h3>Tomorrowland</h3>
                <p>Jakarta, 20 July 2024</p>
              </div>
              <p className={classes.subTitle}>
                Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali. Sampai lah saya malam itu di
                Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

Home.propTypes = {
  events: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  events: selectEvent,
});

export default connect(mapStateToProps)(Home);
