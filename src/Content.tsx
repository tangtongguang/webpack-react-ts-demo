import React from 'react';
import content from "./content.module.scss";
import car from './attrs.png';
export const Content = (): JSX.Element => (<div className={content.container}>
  <img alt="Car" src={car} className={content.car} />
</div>)