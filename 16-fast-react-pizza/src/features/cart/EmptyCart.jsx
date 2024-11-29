import LinkButton from '../../ui/LinkButton.jsx';

function EmptyCart() {
  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="font-bold mt-4 text-yellow-500 tracking-[3px]">Your cart is still empty. Start adding some pizzas
        :)</p>
    </div>
  );
}

export default EmptyCart;
