import React from "react";
import { useSiteConfiguration } from "../../hooks/useSiteConfiguration";
import { StaticImage } from "gatsby-plugin-image";

import * as classes from "./style.module.css";

interface LogoProps {
  fontSize?: string;
  color?: string;
}

export function Logo(props: LogoProps): React.ReactElement {
  const siteConfiguration = useSiteConfiguration();
  const fontSize = props.fontSize || "2rem";
  const color = props.color || "var(--primary-color)";

  return (
    <div
      className={classes.Logo}
      aria-roledescription="logo"
      style={{ fontSize, color }}
    >
      <StaticImage
        loading="eager"
        src="../../../../content/images/logo.png"
        alt="Nik Salon Logo"
        width={150}
      />
    </div>
  );
}
