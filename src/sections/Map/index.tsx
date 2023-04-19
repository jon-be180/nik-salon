import React from "react";

import * as classes from "./style.module.css";

export function MapSection(): React.ReactElement {
  return (
    <div className={classes.iframeContainer}>
      <iframe
        className={classes.iframe}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39304.61516491718!2d-90.47597230307937!3d14.540076066457837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589bb7815ec25eb%3A0x92b394614c23d84!2sNik%20Sal%C3%B3n%20de%20Belleza!5e0!3m2!1sen!2sgt!4v1681860779182!5m2!1sen!2sgt"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
