import React from 'react';

import classNames from 'classnames/bind';
import styles from 'css/components/home';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component, 
 *  i.e. We should keep this as the container that does the data-fetching 
 *  and dispatching of actions if you decide to have any sub-components.
 */
export default class Home extends React.Component {

  render() {
    return (
      <div className={cx('home')}>
        <h1 className={cx('home__header')}>TRENDS - Transportation Revenue Estimator and Needs Determination System</h1>
        <p>The T.R.E.N.D.S. Model is designed to provide transportation planners, policy makers and the public with a tool to forecast revenues and expenses for the Texas Department of Transportation (TxDOT) for the period 2012 through 2050.</p>
      </div>
    );
  }
  
};
