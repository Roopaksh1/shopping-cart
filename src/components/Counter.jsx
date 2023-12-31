import { useRef } from 'react';
import { PropTypes } from 'prop-types';

const Counter = ({ onAddItem, onRemoveItem, count, id }) => {
  const element = useRef();
  if (count === 1) {
    element.current = (
      <button
        data-id={id}
        onClick={onRemoveItem}
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
        onClick={onRemoveItem}
        className="hover:bg-red-200 px-3 cursor-pointer rounded-r-md active:bg-red-300 transition-colors md:text-2xl"
      >
        <i className="fa-solid fa-minus"></i>
      </button>
    );
  }
  return (
    <div className="flex items-center p-2">
      <button
        data-id={id}
        onClick={onAddItem}
        className="border-r-2 border-gray-300 hover:bg-green-300 px-3 cursor-pointer rounded-l-md active:bg-green-400 transition-colors md:text-2xl"
      >
        <i className="fa-solid fa-plus"></i>
      </button>
      <div className="border-r-2 border-gray-300 px-2 md:text-2xl">{count}</div>
      {element.current}
    </div>
  );
};

export default Counter;

Counter.propTypes = {
  onAddItem: PropTypes.func,
  onRemoveItem: PropTypes.func,
  count: PropTypes.number,
  id: PropTypes.number,
};
