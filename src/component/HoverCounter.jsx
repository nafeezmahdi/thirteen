/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import withCounter from "./HOC/withCounter";

const HoverCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <>
      <div>
        <h1 onMouseOver={incrementCount}>Click {count} Times</h1>
      </div>
    </>
  );
};

export default withCounter(HoverCounter);
