import { useRef } from 'react';
import { PropTypes } from 'prop-types';

const Counter = ({ addItem, removeItem, count, id }) => {
  const element = useRef();
  if (count === 1) {
    element.current = (
      <button
        data-id={id}
        onClick={removeItem}
        disabled
        className="px-3 rounded-r-md md:text-2xl"
      >
        <i className="fa-solid fa-minus"></i>
      </button>
    );
  } else {
    element.current = (
      <button
        data-id={id}
        onClick={removeItem}
        className="hover:bg-red-200 px-3 cursor-pointer rounded-r-md active:bg-red-300 transition-colors md:text-2xl"
      >
        <i className="fa-solid fa-minus"></i>
      </button>
    );
  }
  return (
    <div className="flex items-center p-0.5">
      <button
        data-id={id}
        onClick={addItem}
        className="border-r-2 border-gray-300 hover:bg-green-300 px-3 cursor-pointer rounded-l-md active:bg-green-400 transition-colors md:text-2xl"
      >
        <i className="fa-solid fa-plus"></i>
      </button>
      <div className="border-r-2 border-gray-300 border-green-300 px-2 md:text-2xl">
        {count}
      </div>
      {element.current}
    </div>
  );
};

export default Counter;

Counter.propTypes = {
  addItem: PropTypes.func,
  removeItem: PropTypes.func,
  count: PropTypes.number,
  id: PropTypes.number,
}
