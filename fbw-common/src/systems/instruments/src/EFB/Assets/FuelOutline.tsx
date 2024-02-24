// Copyright (c) 2023-2024 FlyByWire Simulations
// SPDX-License-Identifier: GPL-3.0

/* eslint-disable max-len */
import React, { useEffect, useRef } from 'react';

const AnimatedLinearGradient = ({ id, percent, color, duration, enableDynamic }) => {
  const animationRef1 = useRef(null);
  const animationRef2 = useRef(null);
  const [previousPercent, setPreviousPercent] = React.useState(percent);

  useEffect(() => {
    if (animationRef1.current && enableDynamic) {
      // Reset the animation when percent changes
      animationRef1.current.setAttribute('values', `${previousPercent / 100};${percent / 100}`);
      animationRef1.current.beginElement();
    }
    if (animationRef2.current && enableDynamic) {
      // Reset the animation when percent changes
      animationRef2.current.setAttribute('values', `${previousPercent / 100};${percent / 100}`);
      animationRef2.current.beginElement();
    }
    setPreviousPercent(percent);
  }, [percent]);

  return (
    <linearGradient id={id} x1="0" x2="0" y1="1" y2="0">
      <stop offset="0%" stopColor={color} />
      <stop offset={`${percent}%`} stopColor={color}>
        <animate
          ref={(ref) => (animationRef1.current = ref)}
          attributeName="offset"
          values={`0;${percent / 100}`}
          dur={duration}
          repeatCount="1"
        />
      </stop>
      <stop offset={`${percent}%`} stopColor="white" stopOpacity="0">
        <animate
          ref={(ref) => (animationRef2.current = ref)}
          attributeName="offset"
          values={`0;${percent / 100}`}
          dur={duration}
          repeatCount="1"
        />
      </stop>
      <stop offset="100%" stopColor="white" stopOpacity="0" />
    </linearGradient>
  );
};

export const A380FuelOutline = ({
  className,
  feed1Percent,
  feed2Percent,
  feed3Percent,
  feed4Percent,
  leftInnerPercent,
  leftMidPercent,
  leftOuterPercent,
  rightInnerPercent,
  rightMidPercent,
  rightOuterPercent,
  trimPercent,
}: {
  className: string;
  feed1Percent: number;
  feed2Percent: number;
  feed3Percent: number;
  feed4Percent: number;
  leftInnerPercent: number;
  leftMidPercent: number;
  leftOuterPercent: number;
  rightInnerPercent: number;
  rightMidPercent: number;
  rightOuterPercent: number;
  trimPercent: number;
}) => (
  <svg
    width="864"
    height="664"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    fill="none"
    viewBox="0 200 864 864"
  >
    <defs>
      <style>
        {
          '.cls-1, .cls-2, .cls-3, .cls-4 { stroke-miterlimit: 10; } .cls-2 { stroke-width: 3px; } .cls-3 { stroke-width: 2px; } .cls-4 { stroke-width: .5px; }'
        }
      </style>
      <AnimatedLinearGradient
        id="gradientFeed1"
        percent={feed1Percent}
        color="var(--color-highlight)"
        duration="0.5s"
        enableDynamic
      />
      <AnimatedLinearGradient
        id="gradientFeed2"
        percent={feed2Percent}
        color="var(--color-highlight)"
        duration="0.5s"
        enableDynamic
      />
      <AnimatedLinearGradient
        id="gradientFeed3"
        percent={feed3Percent}
        color="var(--color-highlight)"
        duration="0.5s"
        enableDynamic
      />
      <AnimatedLinearGradient
        id="gradientFeed4"
        percent={feed4Percent}
        color="var(--color-highlight)"
        duration="0.5s"
        enableDynamic
      />
      <AnimatedLinearGradient
        id="gradientLeftInner"
        percent={leftInnerPercent}
        color="var(--color-highlight)"
        duration="0.5s"
        enableDynamic
      />
      <AnimatedLinearGradient
        id="gradientLeftMid"
        percent={leftMidPercent}
        color="var(--color-highlight)"
        duration="0.5s"
        enableDynamic
      />
      <AnimatedLinearGradient
        id="gradientLeftOuter"
        percent={leftOuterPercent}
        color="var(--color-highlight)"
        duration="0.5s"
        enableDynamic
      />
      <AnimatedLinearGradient
        id="gradientRightInner"
        percent={rightInnerPercent}
        color="var(--color-highlight)"
        duration="0.5s"
        enableDynamic
      />
      <AnimatedLinearGradient
        id="gradientRightMid"
        percent={rightMidPercent}
        color="var(--color-highlight)"
        duration="0.5s"
        enableDynamic
      />
      <AnimatedLinearGradient
        id="gradientRightOuter"
        percent={rightOuterPercent}
        color="var(--color-highlight)"
        duration="0.5s"
        enableDynamic
      />
      <AnimatedLinearGradient
        id="gradientTrim"
        percent={trimPercent}
        color="var(--color-highlight)"
        duration="0.5s"
        enableDynamic
      />
    </defs>
    <g id="FUEL">
      <g id="Right_Wing_FUEL" data-name="Right Wing FUEL">
        <polygon
          id="Right_Outer_Tank"
          data-name="Right Outer Tank"
          fill="url(#gradientRightOuter)"
          points="805.16 522.46 795.6 542.45 715.07 504.24 729.86 473.09 805.16 522.46"
        />
        <polygon
          id="Feed_Tank_4"
          data-name="Feed Tank 4"
          fill="url(#gradientFeed4)"
          points="644.55 417.81 624.64 462.13 715.07 504.24 729.86 473.09 644.55 417.81"
        />
        <polygon
          id="Right_Mid_Tank"
          data-name="Right Mid Tank"
          fill="url(#gradientRightMid)"
          points="577.04 373.82 551.07 427.63 624.64 462.13 644.55 417.81 577.04 373.82"
        />
        <polygon
          id="Right_Inner_Tank"
          data-name="Right Inner Tank"
          fill="url(#gradientRightInner)"
          points="540.52 356.38 526.52 387.77 483 368.33 483 395.67 551.07 427.63 577.04 373.82 540.52 356.38"
        />
        <polygon
          id="Feed_Tank_3"
          data-name="Feed Tank 3"
          fill="url(#gradientFeed3)"
          points="483 328.89 483 368.33 526.52 387.77 540.52 356.38 483 328.89"
        />
      </g>
      <g id="Right_Wing_TANK" data-name="Right Wing TANK">
        <line id="Left_Line" data-name="Left Line" className="cls-3" x1="715.07" y1="504.24" x2="729.86" y2="473.09" />
        <line
          id="Middle_Line"
          data-name="Middle Line"
          className="cls-3"
          x1="645.12"
          y1="416.53"
          x2="624.64"
          y2="462.13"
        />
        <line
          id="Right_Line"
          data-name="Right Line"
          className="cls-3"
          x1="551.55"
          y1="426.66"
          x2="577.04"
          y2="373.82"
        />
        <polyline
          id="Inner_Box"
          data-name="Inner Box"
          className="cls-3"
          points="540.52 357.2 526.52 387.77 483 368.33"
        />
        <polygon
          id="Left_Tank_Box"
          data-name="Left Tank Box"
          className="cls-2"
          points="795.6 542.45 483 395.67 483 328.89 577.04 373.82 805.16 522.46 795.6 542.45"
        />
      </g>
      <g id="Left_Wing_FUEL" data-name="Left Wing FUEL">
        <polygon
          id="Feed_Tank_2"
          data-name="Feed Tank 2"
          fill="url(#gradientFeed2)"
          points="383.89 328.89 383.89 368.33 340.37 387.77 326.37 356.38 383.89 328.89"
        />
        <polygon
          id="Left_Inner_Tank"
          data-name="Left Inner Tank"
          fill="url(#gradientLeftInner)"
          points="326.37 356.38 340.37 387.77 383.89 368.33 383.89 395.67 315.82 427.63 289.85 373.82 326.37 356.38"
        />
        <polygon
          id="Left_Mid_Tank"
          data-name="Left Mid Tank"
          fill="url(#gradientLeftMid)"
          points="289.85 373.82 315.82 427.63 242.25 462.13 222.34 417.81 289.85 373.82"
        />
        <polygon
          id="Feed_Tank_1"
          data-name="Feed Tank 1"
          fill="url(#gradientFeed1)"
          points="222.34 417.81 242.25 462.13 151.82 504.24 137.03 473.09 222.34 417.81"
        />
        <polygon
          id="Left_Outer_Tank"
          data-name="Left Outer Tank"
          fill="url(#gradientLeftOuter)"
          points="61.73 522.46 71.29 542.45 151.82 504.24 137.03 473.09 61.73 522.46"
        />
      </g>
      <g id="Left_Wing_TANK" data-name="Left Wing TANK">
        <line
          id="Left_Line-2"
          data-name="Left Line"
          className="cls-3"
          x1="151.82"
          y1="504.24"
          x2="137.03"
          y2="473.09"
        />
        <line
          id="Middle_Line-2"
          data-name="Middle Line"
          className="cls-3"
          x1="221.77"
          y1="416.53"
          x2="242.25"
          y2="462.13"
        />
        <line
          id="Right_Line-2"
          data-name="Right Line"
          className="cls-3"
          x1="315.34"
          y1="426.66"
          x2="289.85"
          y2="373.82"
        />
        <polyline
          id="Inner_Box-2"
          data-name="Inner Box"
          className="cls-3"
          points="326.37 357.2 340.37 387.77 383.89 368.33"
        />
        <polygon
          id="Left_Tank_Box-2"
          data-name="Left Tank Box"
          className="cls-2"
          points="71.29 542.45 383.89 395.67 383.89 328.89 289.85 373.82 61.73 522.46 71.29 542.45"
        />
      </g>
      <polygon
        id="Tail_Trim_FUEL"
        data-name="Tail Trim FUEL"
        fill="url(#gradientTrim)"
        points="433.37 693.25 376.84 730.83 392.7 761.44 433.37 744.17 433.53 744.17 474.2 761.44 490.06 730.83 433.53 693.25 433.37 693.25"
      />
      <polygon
        id="Tail_Trim_TANK"
        data-name="Tail Trim TANK"
        className="cls-2"
        points="433.37 693.25 376.84 730.83 392.7 761.44 433.37 744.17 433.53 744.17 474.2 761.44 490.06 730.83 433.53 693.25 433.37 693.25"
      />
    </g>
    <g id="BASE_SVG" data-name="BASE SVG">
      <g id="Wings">
        <g id="Left_Wing" data-name="Left Wing">
          <g id="ENG_2" data-name="ENG 2">
            <path
              id="Exhaust_Nozzle"
              data-name="Exhaust Nozzle"
              className="cls-1"
              d="m264.02,350.22c.28,3.12.67,5.52,1.36,7.22"
            />
            <path
              id="Inlet_Leading_Edge"
              data-name="Inlet Leading Edge"
              className="cls-1"
              d="m257,293.94c0-.95,38.11-.95,38.11,0"
            />
            <g id="Cowling">
              <path
                id="Cowling_L_Rear_Edge"
                data-name="Cowling L Rear Edge"
                className="cls-4"
                d="m255.36,330.38c5.22.2,8.93.29,16.03.29"
              />
              <path
                id="Cowling_R_Rear_Edge"
                data-name="Cowling R Rear Edge"
                className="cls-4"
                d="m296.51,330.34c-5.67.22-10.86.34-17.54.33"
              />
              <path
                id="Cowling_L_Froward_Edge"
                data-name="Cowling L Froward Edge"
                className="cls-4"
                d="m255.09,307.94c5.1-.26,10.73-.42,17.15-.42"
              />
              <path
                id="Cowling_R_Foward_Edge"
                data-name="Cowling R Foward Edge"
                className="cls-4"
                d="m297.05,307.97c-5.1-.26-12.05-.45-18.48-.46"
              />
            </g>
            <path
              id="Strake"
              className="cls-4"
              d="m289.95,312.93c-.31,2.6-1.15,12.29-1.56,13.85.1.1,3.64.21,3.64.21.1-2.29-.83-12.08-2.08-14.06Z"
            />
            <g id="Pylon">
              <line
                id="Pylon_Beam_Rear"
                data-name="Pylon Beam Rear"
                className="cls-4"
                x1="278.81"
                y1="326.42"
                x2="271.5"
                y2="326.42"
              />
              <line
                id="Pylon_Beam_Front"
                data-name="Pylon Beam Front"
                className="cls-4"
                x1="278.81"
                y1="313.74"
                x2="271.86"
                y2="313.74"
              />
              <path
                id="Pylon-2"
                data-name="Pylon"
                className="cls-1"
                d="m278.97,346.89s-.17-33.71-.17-33.8c0-3.82-.21-10.05-3.43-10.05h0c-3.22,0-3.51,6.23-3.51,10.05,0,.08-1.11,40.73-1.11,40.73"
              />
            </g>
            <path
              id="Housing"
              className="cls-3"
              d="m296.14,332.83c.46-4.24,1.17-10.9,1.17-15.55,0-19.22-3.01-26.97-4.15-27.47-3.69-1.19-29.97-1.08-34.17,0-1.32.43-4.15,8.25-4.15,27.47s3.39,32.89,4.06,32.89c.08.08,12.46.04,12.46.04"
            />
          </g>
          <g id="ENG_1" data-name="ENG 1">
            <path
              id="Exhaust_Nozzle-2"
              data-name="Exhaust Nozzle"
              className="cls-1"
              d="m146.75,433.33c.28,3.12,1.43,7.96,2.12,9.66"
            />
            <path
              id="Inlet_Leading_Edge-2"
              data-name="Inlet Leading Edge"
              className="cls-1"
              d="m139.73,377.05c0-.95,38.11-.95,38.11,0"
            />
            <g id="Cowling-2" data-name="Cowling">
              <path
                id="Cowling_L_Rear_Edge-2"
                data-name="Cowling L Rear Edge"
                className="cls-4"
                d="m138.09,413.49c5.22.2,8.93.29,16.03.29"
              />
              <path
                id="Cowling_R_Rear_Edge-2"
                data-name="Cowling R Rear Edge"
                className="cls-4"
                d="m179.23,413.45c-5.67.22-10.86.34-17.54.33"
              />
              <path
                id="Cowling_L_Froward_Edge-2"
                data-name="Cowling L Froward Edge"
                className="cls-4"
                d="m137.81,391.05c5.1-.26,10.73-.42,17.15-.42"
              />
              <path
                id="Cowling_R_Foward_Edge-2"
                data-name="Cowling R Foward Edge"
                className="cls-4"
                d="m179.77,391.08c-5.1-.26-12.05-.45-18.48-.46"
              />
            </g>
            <path
              id="Strake-2"
              data-name="Strake"
              className="cls-4"
              d="m172.67,396.04c-.31,2.6-1.15,12.29-1.56,13.85.1.1,3.64.21,3.64.21.1-2.29-.83-12.08-2.08-14.06Z"
            />
            <g id="Pylon-3" data-name="Pylon">
              <line
                id="Pylon_Beam_Rear-2"
                data-name="Pylon Beam Rear"
                className="cls-4"
                x1="161.53"
                y1="409.53"
                x2="154.23"
                y2="409.53"
              />
              <line
                id="Pylon_Beam_Front-2"
                data-name="Pylon Beam Front"
                className="cls-4"
                x1="161.53"
                y1="396.85"
                x2="154.58"
                y2="396.85"
              />
              <path
                id="Pylon-4"
                data-name="Pylon"
                className="cls-1"
                d="m161.7,433.56s-.17-37.27-.17-37.36c0-3.82-.21-10.05-3.43-10.05h0c-3.22,0-3.51,6.23-3.51,10.05,0,.08-1.19,43.44-1.19,43.44"
              />
            </g>
            <path
              id="Housing-2"
              data-name="Housing"
              className="cls-3"
              d="m178.27,421.39s1.76-12.18,1.76-21c0-19.22-3.01-26.97-4.15-27.47-3.69-1.19-29.97-1.08-34.17,0-1.32.43-4.15,8.25-4.15,27.47s3.39,32.89,4.06,32.89c.08.08,12.46.04,12.46.04"
            />
          </g>
          <g id="Flap_Fairings" data-name="Flap Fairings">
            <path
              id="Left_Flap_Fairing_5"
              data-name="Left Flap Fairing 5"
              className="cls-1"
              d="m328.22,457.77c.51,6.22,2.29,9.62,3.06,10.83.16.25.54.24.67-.03.62-1.21,1.98-4.65,2.7-12.53"
            />
            <path
              id="Left_Flap_Fairing_4"
              data-name="Left Flap Fairing 4"
              className="cls-1"
              d="m285.33,472.71c.43,6.81,1.92,9.99,2.56,11.07.15.25.5.28.68.05.88-1.07,2.94-4.55,2.48-13.42"
            />
            <path
              id="Left_Flap_Fairing_3"
              data-name="Left Flap Fairing 3"
              className="cls-1"
              d="m241.3,490.37c.29,15.36,2.22,23.87,2.96,26.6.09.34.57.37.7.04,1.15-2.83,4.29-12.18,4.29-29.83"
            />
            <path
              id="Left_Flap_Fairing_2"
              data-name="Left Flap Fairing 2"
              className="cls-1"
              d="m196.69,508.46c-.3,15.88,1.6,22.51,2.24,24.88.11.42.68.47.88.08,1.3-2.67,3.47-8.69,3.8-27.93"
            />
            <path
              id="Left_Flap_Fairing_1"
              data-name="Left Flap Fairing 1"
              className="cls-1"
              d="m150.76,527.15c.74,11.93,2.2,14.39,2.81,15.27.13.19.42.21.57.04.73-.84,2.31-6.08,2.69-17.97"
            />
          </g>
          <path
            id="Left_Wing-2"
            data-name="Left Wing"
            className="cls-3"
            d="m393.89,440.08l-82.82,22.31-147.41,59.11L9.11,589.17c-1.53,7.08-2.78,20.56-3,20.56-.47,0,.15-18.57,1.64-46.72.39-6.33,4.08-19.17,11.25-24.67l253.33-186,104.17-85.33,15.11-15.72,2.28-9.61"
          />
        </g>
        <g id="Right_Wing" data-name="Right Wing">
          <g id="ENG_3" data-name="ENG 3">
            <path
              id="Exhaust_Nozzle-3"
              data-name="Exhaust Nozzle"
              className="cls-1"
              d="m602.86,350.22c-.28,3.12-.67,5.52-1.36,7.22"
            />
            <path
              id="Inlet_Leading_Edge-3"
              data-name="Inlet Leading Edge"
              className="cls-1"
              d="m609.88,293.94c0-.95-38.11-.95-38.11,0"
            />
            <g id="Cowling-3" data-name="Cowling">
              <path
                id="Cowling_R_Rear_Edge-3"
                data-name="Cowling R Rear Edge"
                className="cls-4"
                d="m611.53,330.38c-5.22.2-8.93.29-16.03.29"
              />
              <path
                id="Cowling_L_Rear_Edge-3"
                data-name="Cowling L Rear Edge"
                className="cls-4"
                d="m570.38,330.34c5.67.22,10.86.34,17.54.33"
              />
              <path
                id="Cowling_R_Froward_Edge"
                data-name="Cowling R Froward Edge"
                className="cls-4"
                d="m611.8,307.94c-5.1-.26-10.73-.42-17.15-.42"
              />
              <path
                id="Cowling_L_Foward_Edge"
                data-name="Cowling L Foward Edge"
                className="cls-4"
                d="m569.84,307.97c5.1-.26,12.05-.45,18.48-.46"
              />
            </g>
            <path
              id="Strake-3"
              data-name="Strake"
              className="cls-4"
              d="m576.94,312.93c.31,2.6,1.15,12.29,1.56,13.85-.1.1-3.64.21-3.64.21-.1-2.29.83-12.08,2.08-14.06Z"
            />
            <g id="Pylon-5" data-name="Pylon">
              <line
                id="Pylon_Beam_Rear-3"
                data-name="Pylon Beam Rear"
                className="cls-4"
                x1="588.08"
                y1="326.42"
                x2="595.38"
                y2="326.42"
              />
              <line
                id="Pylon_Beam_Front-3"
                data-name="Pylon Beam Front"
                className="cls-4"
                x1="588.08"
                y1="313.74"
                x2="595.03"
                y2="313.74"
              />
              <path
                id="Pylon-6"
                data-name="Pylon"
                className="cls-1"
                d="m587.91,346.89s.17-33.71.17-33.8c0-3.82.21-10.05,3.43-10.05h0c3.22,0,3.51,6.23,3.51,10.05,0,.08,1.11,40.73,1.11,40.73"
              />
            </g>
            <path
              id="Housing-3"
              data-name="Housing"
              className="cls-3"
              d="m570.75,332.83c-.46-4.24-1.17-10.9-1.17-15.55,0-19.22,3.01-26.97,4.15-27.47,3.69-1.19,29.97-1.08,34.17,0,1.32.43,4.15,8.25,4.15,27.47s-3.39,32.89-4.06,32.89c-.08.08-12.46.04-12.46.04"
            />
          </g>
          <g id="ENG_4" data-name="ENG 4">
            <path
              id="Exhaust_Nozzle-4"
              data-name="Exhaust Nozzle"
              className="cls-1"
              d="m720.14,433.33c-.28,3.12-1.43,7.96-2.12,9.66"
            />
            <path
              id="Inlet_Leading_Edge-4"
              data-name="Inlet Leading Edge"
              className="cls-1"
              d="m727.16,377.05c0-.95-38.11-.95-38.11,0"
            />
            <g id="Cowling-4" data-name="Cowling">
              <path
                id="Cowling_R_Rear_Edge-4"
                data-name="Cowling R Rear Edge"
                className="cls-4"
                d="m728.8,413.49c-5.22.2-8.93.29-16.03.29"
              />
              <path
                id="Cowling_L_Rear_Edge-4"
                data-name="Cowling L Rear Edge"
                className="cls-4"
                d="m687.66,413.45c5.67.22,10.86.34,17.54.33"
              />
              <path
                id="Cowling_R_Froward_Edge-2"
                data-name="Cowling R Froward Edge"
                className="cls-4"
                d="m729.08,391.05c-5.1-.26-10.73-.42-17.15-.42"
              />
              <path
                id="Cowling_L_Foward_Edge-2"
                data-name="Cowling L Foward Edge"
                className="cls-4"
                d="m687.12,391.08c5.1-.26,12.05-.45,18.48-.46"
              />
            </g>
            <path
              id="Strake-4"
              data-name="Strake"
              className="cls-4"
              d="m694.22,396.04c.31,2.6,1.15,12.29,1.56,13.85-.1.1-3.64.21-3.64.21-.1-2.29.83-12.08,2.08-14.06Z"
            />
            <g id="Pylon-7" data-name="Pylon">
              <line
                id="Pylon_Beam_Rear-4"
                data-name="Pylon Beam Rear"
                className="cls-4"
                x1="705.36"
                y1="409.53"
                x2="712.66"
                y2="409.53"
              />
              <line
                id="Pylon_Beam_Front-4"
                data-name="Pylon Beam Front"
                className="cls-4"
                x1="705.36"
                y1="396.85"
                x2="712.31"
                y2="396.85"
              />
              <path
                id="Pylon-8"
                data-name="Pylon"
                className="cls-1"
                d="m705.19,433.56s.17-37.27.17-37.36c0-3.82.21-10.05,3.43-10.05h0c3.22,0,3.51,6.23,3.51,10.05,0,.08,1.19,43.44,1.19,43.44"
              />
            </g>
            <path
              id="Housing-4"
              data-name="Housing"
              className="cls-3"
              d="m688.61,421.39s-1.76-12.18-1.76-21c0-19.22,3.01-26.97,4.15-27.47,3.69-1.19,29.97-1.08,34.17,0,1.32.43,4.15,8.25,4.15,27.47s-3.39,32.89-4.06,32.89c-.08.08-12.46.04-12.46.04"
            />
          </g>
          <g id="Flap_Fairings-2" data-name="Flap Fairings">
            <path
              id="Right_Flap_Fairing_5"
              data-name="Right Flap Fairing 5"
              className="cls-1"
              d="m538.66,457.77c-.51,6.22-2.29,9.62-3.06,10.83-.16.25-.54.24-.67-.03-.62-1.21-1.98-4.65-2.7-12.53"
            />
            <path
              id="Right_Flap_Fairing_4"
              data-name="Right Flap Fairing 4"
              className="cls-1"
              d="m581.56,472.71c-.43,6.81-1.92,9.99-2.56,11.07-.15.25-.5.28-.68.05-.88-1.07-2.94-4.55-2.48-13.42"
            />
            <path
              id="Right_Flap_Fairing_3"
              data-name="Right Flap Fairing 3"
              className="cls-1"
              d="m625.59,490.37c-.29,15.36-2.22,23.87-2.96,26.6-.09.34-.57.37-.7.04-1.15-2.83-4.29-12.18-4.29-29.83"
            />
            <path
              id="Right_Flap_Fairing_2"
              data-name="Right Flap Fairing 2"
              className="cls-1"
              d="m670.2,508.46c.3,15.88-1.6,22.51-2.24,24.88-.11.42-.68.47-.88.08-1.3-2.67-3.47-8.69-3.8-27.93"
            />
            <path
              id="Right_Flap_Fairing_1"
              data-name="Right Flap Fairing 1"
              className="cls-1"
              d="m716.13,527.15c-.74,11.93-2.2,14.39-2.81,15.27-.13.19-.42.21-.57.04-.73-.84-2.31-6.08-2.69-17.97"
            />
          </g>
          <path
            id="Right_Wing-2"
            data-name="Right Wing"
            className="cls-3"
            d="m473,440.08l82.82,22.31,147.41,59.11,154.56,67.67c1.53,7.08,2.78,20.56,3,20.56.47,0-.15-18.57-1.64-46.72-.39-6.33-4.08-19.17-11.25-24.67l-253.33-186-104.17-85.33-15.11-15.72-2.28-9.61"
          />
        </g>
      </g>
      <g id="Cockpit_Windows" data-name="Cockpit Windows">
        <path
          className="cls-4"
          d="m417.25,76.04l4.2.2c.07,0,.13-.03.17-.08l1.23-1.78s.02-.02.03-.04l1.34-1.19c.08-.07.09-.19.02-.27l-1.69-2.04c-.05-.06-.13-.08-.2-.06l-1.54.4s-.08.03-.1.07l-3.61,4.48c-.1.13-.02.31.14.32Z"
        />
        <path
          className="cls-4"
          d="m425.48,71.79l7-3.72c.06-.03.1-.1.1-.17v-2.86c0-.13-.12-.22-.24-.19l-3.33.77s-.05.02-.07.03l-4.76,3.46c-.06.04-.09.12-.08.19l.25,1.64s.03.09.07.12l.84.7c.06.05.15.06.22.02Z"
        />
        <path
          className="cls-4"
          d="m415.75,77.88l3.43-.46c.51-.07.84.54.49.92l-1.69,1.89s-.05.05-.08.07l-3.97,3.06c-.33.25-.81.07-.89-.33l-.2-1c-.03-.15,0-.3.09-.43l2.42-3.49c.09-.13.23-.21.38-.24Z"
        />
        <path
          className="cls-4"
          d="m449.64,76.04l-4.2.2c-.07,0-.13-.03-.17-.08l-1.23-1.78s-.02-.02-.03-.04l-1.34-1.19c-.08-.07-.09-.19-.02-.27l1.69-2.04c.05-.06.13-.08.2-.06l1.54.4s.08.03.1.07l3.61,4.48c.1.13.02.31-.14.32Z"
        />
        <path
          className="cls-4"
          d="m441.41,71.79l-7-3.72c-.06-.03-.1-.1-.1-.17v-2.86c0-.13.12-.22.24-.19l3.33.77s.05.02.07.03l4.76,3.46c.06.04.09.12.08.19l-.25,1.64s-.03.09-.07.12l-.84.7c-.06.05-.15.06-.22.02Z"
        />
        <path
          className="cls-4"
          d="m451.14,77.88l-3.43-.46c-.51-.07-.84.54-.49.92l1.69,1.89s.05.05.08.07l3.97,3.06c.33.25.81.07.89-.33l.2-1c.03-.15,0-.3-.09-.43l-2.42-3.49c-.09-.13-.23-.21-.38-.24Z"
        />
      </g>
      <path
        id="Fuselage"
        className="cls-3"
        d="m407.24,677.06c-.15-.62-.3-1.23-.46-1.83-11.33-39.33-12.89-79.56-12.89-98.67,0,0,0-401.75,0-401.78,0-8.18,2.13-45.6,8.44-76.22,6.22-30.25,21.04-53.67,31.08-53.67h.05c10.04,0,24.87,23.42,31.09,53.67,6.3,30.63,8.44,68.04,8.44,76.22,0,.03,0,401.78,0,401.78,0,19.11-1.56,59.33-12.89,98.67-.14.55-.15.57-.29,1.13l-.07.27c.19,4.81,2.24,7.15,5.24,9.49l114,88.11c6.39,5.56,9.61,13.78,11.83,21.94l4.61,26.83-149.64-55.11-.68-.23c-2.11,7.73-4.52,15.55-6.57,21.87h-2.69s-4.84,0-4.84,0h-2.69c-2.05-6.32-4.46-14.14-6.57-21.87l-.68.23-149.64,55.11,4.61-26.83c2.22-8.17,5.44-16.39,11.83-21.94l114-88.11c3-2.33,5.05-4.67,5.24-9.49"
      />
    </g>
  </svg>

  /*
    <svg width="1278" height="455" viewBox="0 0 1290 455" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M717.101 288.355H874.129L1268.63 407.972L1289.48 442.937V430.051L1268.63 358.286L727.518 77.3383C724.937 72.8587 722.81 68.1323 721.169 63.2297C718.113 54.1487 716.735 44.5873 717.101 35.0127V288.355Z" stroke="currentColor" strokeMiterlimit="10" />
        <path d="M814.615 288.355C814.311 299.45 816.623 310.462 821.364 320.499C822.912 315.677 824.146 310.76 825.056 305.779C826.11 300.026 826.723 294.201 826.89 288.355" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" />
        <path d="M949.258 309.964C949.091 315.811 948.478 321.635 947.424 327.388C946.521 332.369 945.296 337.286 943.755 342.108C939.009 332.076 936.72 321.057 937.077 309.964V307.401" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" />
        <path d="M1078.42 348.857C1078.1 359.778 1076.24 370.599 1072.9 381.001C1070.77 376.524 1069.13 371.834 1068 367.01C1066.6 361.065 1065.98 354.963 1066.15 348.857V346.317" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" />
        <path d="M806.174 118.182C805.092 104.607 804.175 90.7884 803.423 76.7269C803.078 70.0645 802.772 63.4727 802.506 56.9514C801.075 55.4438 799.971 53.6575 799.262 51.704C798.553 49.7504 798.254 47.6717 798.384 45.5975C798.514 43.5233 799.071 41.4983 800.018 39.6488C800.966 37.7993 802.285 36.165 803.893 34.8481V29.7925L804.81 23.3496L808.126 21.5155C820.823 20.4104 834.65 19.7049 849.44 19.6814C864.23 19.6579 878.151 20.2928 890.896 21.3744C891.491 22.9151 892.009 24.4847 892.448 26.0773C893.322 29.2444 893.943 32.476 894.305 35.7416C894.958 41.5409 895.178 47.3807 894.964 53.2127" stroke="currentColor" strokeMiterlimit="10" />
        <path d="M891.012 48.2041C895.981 56.2357 898.709 65.4508 898.913 74.8927H891.012V48.2041Z" stroke="currentColor" strokeMiterlimit="10" />
        <path d="M895.033 74.8928C894.469 86.4618 893.505 98.7833 892 111.693C890.707 122.65 889.131 133.091 887.297 142.966H863.783V148.163" stroke="currentColor" strokeMiterlimit="10" />
        <path d="M804.81 23.3496L808.125 14.6258C820.851 13.1616 833.645 12.3766 846.454 12.2744C860.824 12.1788 875.187 12.9641 889.461 14.6258L890.896 21.3744" stroke="currentColor" strokeMiterlimit="10" />
        <path d="M840.856 136.194V77.4089C840.85 73.665 841.608 69.9592 843.083 66.5184C844.559 63.0776 846.722 59.9743 849.439 57.3983C852.498 59.9326 854.922 63.1467 856.518 66.7844C858.115 70.422 858.839 74.3824 858.633 78.3495V145.412" stroke="currentColor" strokeMiterlimit="10" />
        <path d="M573.312 291.929H416.284L21.8569 411.546L0.999789 446.511V433.625L21.8569 361.86L562.895 80.8183C565.479 76.3399 567.606 71.6133 569.244 66.7097C572.308 57.6304 573.686 48.0676 573.312 38.4927V291.929Z" stroke="currentColor" strokeMiterlimit="10" />
        <path d="M475.799 291.929C475.966 298.035 475.342 304.137 473.941 310.082C472.812 314.906 471.172 319.596 469.05 324.073C465.705 313.671 463.845 302.85 463.524 291.929" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" />
        <path d="M341.156 313.444C341.323 319.291 341.936 325.115 342.99 330.868C343.901 335.847 345.126 340.764 346.659 345.588C348.8 341.117 350.447 336.425 351.573 331.597C352.979 325.653 353.596 319.55 353.407 313.444V310.905" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" />
        <path d="M211.993 352.337C212.321 363.259 214.19 374.081 217.542 384.481C219.664 380.004 221.304 375.314 222.433 370.49C223.834 364.545 224.458 358.443 224.291 352.337V349.797" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" />
        <path d="M485.604 26.8534C457.101 22.6458 428.187 21.9744 399.519 24.8547" stroke="currentColor" strokeMiterlimit="10" />
        <path d="M395.38 78.3728C395.944 89.9653 396.908 102.263 398.413 115.173C399.706 126.154 401.282 136.594 403.116 146.446H426.63V151.667" stroke="currentColor" strokeMiterlimit="10" />
        <path d="M449.557 139.675V80.889C449.555 76.6671 448.59 72.5012 446.735 68.7086C445.298 65.7752 443.347 63.1232 440.974 60.8784C437.915 63.4127 435.49 66.6268 433.894 70.2645C432.298 73.9021 431.574 77.8625 431.78 81.8296V148.916" stroke="currentColor" strokeMiterlimit="10" />
        <path d="M399.049 121.663C397.967 108.197 397.034 94.4096 396.25 80.301C395.906 73.6543 395.6 67.0625 395.333 60.5256C393.899 59.0232 392.79 57.2405 392.078 55.2894C391.365 53.3383 391.063 51.261 391.191 49.1877C391.319 47.1144 391.874 45.0899 392.822 43.2414C393.769 41.3929 395.089 39.7602 396.697 38.4457V33.2726L397.614 26.8532L400.93 24.9956" stroke="currentColor" strokeMiterlimit="10" />
        <path d="M484.569 24.502C485.016 25.6541 485.581 27.2766 486.145 29.2048C487.006 32.3658 487.62 35.5892 487.979 38.8456C488.632 44.6528 488.852 50.5004 488.637 56.3402" stroke="currentColor" strokeMiterlimit="10" />
        <path d="M484.758 49.7327C487.075 53.487 488.915 57.5155 490.236 61.7249C491.719 66.486 492.511 71.4352 492.588 76.4213H484.687L484.758 49.7327Z" stroke="currentColor" strokeMiterlimit="10" />
        <path d="M484.757 121.404L487.932 76.4213" stroke="currentColor" strokeMiterlimit="10" />
        <path d="M573.383 453.824V378.252V0.0163574" stroke="currentColor" strokeWidth="0.829759" strokeMiterlimit="10" />
        <path d="M717.089 0V455" stroke="currentColor" strokeWidth="0.98456" strokeMiterlimit="10" />
        <path d="M399.519 27.5586L402.834 18.8113C429.859 15.7286 457.146 15.7286 484.17 18.8113L485.604 25.5598" stroke="currentColor" strokeMiterlimit="10" />
        <path d="M717.149 101.605L1258.47 370.443L1259.17 392.523L716.772 211.98L717.149 101.605Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
        <path d="M1151.06 355.229L1149.83 316.431L1151.06 355.229Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
        <path d="M1027.44 256.658L1029.25 314.268L1027.44 256.658Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
        <path d="M714.115 211.98V101.605L576.722 101.605V211.98H714.115Z" stroke="currentColor" strokeWidth="1.89" strokeMiterlimit="10" />
        <path d="M573.147 101.605L31.7794 370.443L31.0976 392.523L573.547 211.98L573.147 101.605Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
        <path d="M139.334 355.229L140.557 316.431L139.334 355.229Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
        <path d="M262.877 256.658L261.066 314.268L262.877 256.658Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
    </svg>
    */
);