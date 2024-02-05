// import React from "react";

import bgAuth from "../../static/images/bg-auth.jpg";

import classes from "./style.module.scss";

const Register = () => {
  return (
    <div className={classes.wrapper}>
      <aside className={classes.aside}>
        <img src={bgAuth} alt="Background Auth" className={classes.imgAuth} />
      </aside>
      <div className={classes.containForm}>
        <div className={classes.boxForm}>
          <div className={classes.headerForm}>
            <div>
              <span>Event Organizer</span>
            </div>
            <div>
              <span>Register</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
