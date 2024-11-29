import Button from '../../ui/Button.jsx';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteItem } from './cartSlice.js';

DeleteItem.propTypes = {
  pizzaId: PropTypes.number
};

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>Delete</Button>
  );
}

export default DeleteItem;