import React from "react";
import {
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

import '@fontsource/halant'

export default function NosotrosPage() {
  return (
    <>
      <Seo title="About Us" />
      <Page>
        <h1>Our Story</h1>
        <h2>Our Mission</h2>
        <h2>Our Expertise</h2>
        <h2>Facilities</h2>
        <h2>Reviews</h2>
      </Page>
    </>
  );
}