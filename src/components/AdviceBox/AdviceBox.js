import React from 'react';

import classes from './AdviceBox.module.css';
import iconDice from '../../assets/icon-dice.svg';
import patternDividerMobile from '../../assets/pattern-divider-mobile.svg';
import patternDividerDesktop from '../../assets/pattern-divider-desktop.svg';

const AdviceBox = (props) => {
  return (
    <article className={classes.advice}>
      <p className={classes.advice__number}>Advice #117</p>
      <blockquote className={classes.advice__quote}>
        "It is easy to sit up and take notice, what's difficult is getting up
        and taking action."
      </blockquote>
      <picture>
        <source
          srcSet={patternDividerMobile}
          media="(min-width: 370px) and (max-width: 799px)"
        />
        <source srcSet={patternDividerDesktop} media="(min-width: 800px)" />
        <img src={patternDividerDesktop} alt="divider" />
      </picture>
      <button className={classes['dice-button']}>
        <img src={iconDice} alt="dice icon" />
      </button>
    </article>
  );
};

export default AdviceBox;
