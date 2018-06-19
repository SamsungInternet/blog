import React from 'react';

const icons = {
  star: 'm26.9 22.4l6.8-6.6-9.4-1.4-4.2-8.5-4.2 8.5-9.5 1.4 6.9 6.6-1.7 9.4 8.5-4.4 8.4 4.4z m11.7-8q0 0.5-0.5 1.1l-8.1 7.9 1.9 11.2q0 0.1 0 0.4 0 1.1-0.9 1.1-0.4 0-0.9-0.2l-10-5.3-10 5.3q-0.5 0.2-0.9 0.2-0.5 0-0.7-0.3t-0.3-0.8q0-0.1 0.1-0.4l1.9-11.2-8.1-7.9q-0.6-0.6-0.6-1.1 0-0.8 1.3-1l11.2-1.6 5-10.2q0.4-0.9 1.1-0.9t1.1 0.9l5 10.2 11.2 1.6q1.2 0.2 1.2 1z',
  facebook: 'M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z',
};

const Icon = props => (
  <svg width={props.width} height={props.height} viewBox="0 0 40 40" className={`${props.icon}-icon`}>
    <path fill={props.fill} d={icons[props.icon]}></path>
  </svg>
);

export default Icon;
