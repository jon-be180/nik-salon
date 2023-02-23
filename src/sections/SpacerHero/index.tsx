import React from "react";

import * as classes from "./style.module.css";

// this is used in place of a hero section, providing some space due to the video in the original header using negative space
export function SpacerHeroSection(props: PageSection): React.ReactElement {
  return <div className={classes.HeroContainer}></div>;
}
