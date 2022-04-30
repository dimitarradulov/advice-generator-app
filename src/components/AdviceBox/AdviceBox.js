import React, { Fragment } from 'react';

import classes from './AdviceBox.module.css';
import iconDice from '../../assets/icon-dice.svg';
import patternDividerMobile from '../../assets/pattern-divider-mobile.svg';
import patternDividerDesktop from '../../assets/pattern-divider-desktop.svg';

const AdviceBox = (props) => {
  let content = <p className={classes.advice__quote}>Loading...</p>;

  if (!props.isLoading) {
    content = (
      <Fragment>
        <p className={classes.advice__number}>Advice #{props.adviceData.id}</p>
        <blockquote className={classes.advice__quote}>
          {props.adviceData.advice}
        </blockquote>
      </Fragment>
    );
  }

  if (props.error) {
    content = (
      <p className={classes.advice__quote} style={{ color: '#fa5252' }}>
        {props.error}
      </p>
    );
  }

  return (
    <article className={classes.advice}>
      {content}
      <picture>
        <source
          srcSet={patternDividerMobile}
          media="(min-width: 370px) and (max-width: 799px)"
        />
        <source srcSet={patternDividerDesktop} media="(min-width: 800px)" />
        <img src={patternDividerDesktop} alt="divider" />
      </picture>
      <button onClick={props.onButtonClick} className={classes['dice-button']}>
        <img src={iconDice} alt="dice icon" />
      </button>
    </article>
  );
};

export default AdviceBox;
