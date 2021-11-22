import React from 'react';
import PropTypes from 'prop-types';


const List = function ({callBackend}) {
  
  return (
    <div className="list">
      <p id="Waldo" value="Waldo" onClick={(e) => {
        e.preventDefault();
        callBackend(e.target.id)}
      }>Waldo</p>
      <hr />
      <p id="Wally" value="Wally" onClick={(e) => callBackend(e.target.id)}>Wally</p>
      <hr />
     
    </div>
  );
};

List.propTypes={
  callBackend: PropTypes.func.isRequired
}
export default List;
