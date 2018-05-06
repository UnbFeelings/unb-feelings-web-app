import React from 'react';
import MediaQuery from 'react-responsive';

/**
 * Media query for both PC and Mobile devices.
 * Usage:
 *  <DisplayOn device="mobile">Display on mobile</DisplayOn>
 *  <DisplayOn device="PC">Display on PC</DisplayOn>
 */
const DisplayOn = ({ device, children }) => {
  if (device === "mobile") {
    return (
      <MediaQuery query="(max-device-width: 767px)">
        {children}
      </MediaQuery>
    );
  }

  if (device === "PC") {
    return (
      <MediaQuery query="(min-device-width: 768px)">
        {children}
      </MediaQuery>
    );
  }

  throw new Error("Only mobile or PC devices are allowed");
}

export default DisplayOn;