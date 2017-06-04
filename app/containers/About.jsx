import React from 'react';

/*
 * Note: This is kept as a container-level component, 
 *  i.e. We should keep this as the container that does the data-fetching 
 *  and dispatching of actions if you decide to have any sub-components.
 */
export default class About extends React.Component {

  render() {
    return (
      <div>
        <h1>About page</h1>

          <p>The T.R.E.N.D.S. Model is designed to provide transportation planners, policy makers and the public with a tool to forecast revenues and expenses for the Texas Department of Transportation (TxDOT) for the period 2012 through 2050. The User, through interactive windows, can control a number of variables related to assumptions regarding statewide transportation needs, population growth rates, fuel efficiency, inflation rates, taxes, fees and other elements. The output is a set of tables and graphs showing a forecast of revenues, expenditures and fund balances for each year of the analysis period based on the User’s inputs regarding both transportation needs and revenue choices.</p>
          <p>T.R.E.N.D.S. will be updated on a monthly basis to include the latest cash forecasts and letting schedules from TxDOT. In addition, as updates regarding population forecasts, inflation rates, fuel efficiency, and other variables become available, they will be incorporated into the model.</p>
          <p>To make comments regarding the model, offer suggestions for improvements, or for assistance, please contact David Ellis at d-ellis@tamu.edu or Brianne Glover at b-glover@tamu.edu.</p>
          <p>Please consult the User's Guide for specific information on user-controlled inputs and a description of the model output.</p>

          <p>Texas Department of Transportation Texas and A&amp;M Transportation Institute</p>


      </div>
    );
  }
  
};
