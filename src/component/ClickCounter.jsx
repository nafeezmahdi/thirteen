/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import withCounter from "./HOC/withCounter";

const ClickCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <>
      <div>
        <button type="button" onClick={incrementCount}>
          Click {count} Times
        </button>
      </div>
    </>
  );
};

export default withCounter(ClickCounter);
