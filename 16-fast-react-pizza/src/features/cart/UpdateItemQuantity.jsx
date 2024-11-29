import Button from '../../ui/Button.jsx';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice.js';

// eslint-disable-next-line react/prop-types
function UpdateItemQuantity({ pizzaId, curentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-8">
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
      <span className="font-medium">{curentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
    </div>
  );
}

export default UpdateItemQuantity;