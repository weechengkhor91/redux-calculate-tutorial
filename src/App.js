import React, {Fragment} from 'react';
import './App.less';
import {connect} from 'react-redux'
import {salaryIncrease, salaryDecrease} from './actions/salaryAction'


const App = ({salary, ...props}) => {
//console.log(props)
  return (
    <div className="App">
      <h3>Salary</h3>
        {

              <Fragment>
                  <div className="amount"><sup className="currency">RM</sup> {salary}</div>
                  <button onClick={props.salaryIncrease} type="button">Increase</button>
                  {
                      salary === 1000 ?   <button type="button" disabled>Decrease</button> :
                          <button onClick={props.salaryDecrease}  type="button">Decrease</button>
                  }

              </Fragment>
        }

    </div>
  );
}

const mapStateToProps = (state) => ({
    salary: state.salaryData.salary,
})
export default connect(mapStateToProps, {salaryIncrease,salaryDecrease})(App);
