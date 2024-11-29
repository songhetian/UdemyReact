import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { useState } from 'react';
import Button from '../../ui/Button.jsx';
import { createOrder } from '../../services/apiRestaurant.js';
import { useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice.js';
import { formatCurrency } from '../../utils/helpers.js';
import EmptyCart from '../cart/EmptyCart.jsx';
import store from '../../store.js';
//
// https://uibakery.io/regex-library/phone-number
const isValidPhone = str => /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const errors = useActionData();
  const userName = useSelector(state => state.user.userName);
  const totalPrice = useSelector(getTotalCartPrice);
  const currentTotalPrice = withPriority === true ? totalPrice * 1.2 : totalPrice;

  if (cart.length === 0) return <EmptyCart />;
  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-semibold mb-8">Ready to order? Let go!</h2>
      <Form method="POST">
        <div className="mb-5 gap-2 flex flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input type="text" name="customer" className="input grow" defaultValue={userName} required />
        </div>

        <div className="mb-5 gap-2 flex flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {errors?.phone && <p className="text-xs mt-2 text-red-700 p-2 rounded-md bg-red-100">{errors.phone}</p>}
          </div>

        </div>

        <div className="mb-5 gap-2 flex flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input type="text" name="address" required
                   className="input w-full"
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input type="checkbox" name="priority" id="priority" value={withPriority}
                 onChange={e => setWithPriority(e.target.checked)}
                 className="outline-none w-6 h-6 accent-yellow-400 focus:ring focus:ring-yellow-300 focus:ring-offset-2"
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        <input type="hidden" value={JSON.stringify(cart)} name="cart" />
        <div>
          <Button
            disabled={isSubmitting}
            type="primary"
          >
            {isSubmitting ? '提交中' : `Order now ${formatCurrency(currentTotalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart:     JSON.parse(data.cart),
    priority: data.priority === 'true'
  };

  const errors = {};

  if (!isValidPhone(order.phone)) {
    errors.phone = '手机号必须符合格式';
  }

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
