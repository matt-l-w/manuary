import React from 'react';

import styled from 'tachyons-components';
import { Heading1 } from '../elements/Heading';

const NavContainer = styled('header')`
  ma0 
  mw-100 
  bw1 bb
  pa3
`

export default () => {
  return (
    <NavContainer>
      <Heading1>{generateTitle()}</Heading1>
    </NavContainer>
  )
}

function generateTitle() {
  if (process.env.NODE_ENV !== "production") {
    document.title = "Janchester";
    return "Janchester";
  }

  const host = window.location.hostname;
  const subdomain = host.split('.')[0];
  const formattedTitle = titleCase(subdomain);

  document.title = formattedTitle;

  return formattedTitle;
}

// from https://stackoverflow.com/questions/32589197/capitalize-first-letter-of-each-word-in-a-string-javascript/43376967
function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  // Directly return the joined string
  return splitStr.join(' '); 
}