// Test ID: IIDSAT

import { calcMinutesLeft, formatCurrency, formatDate } from '../../utils/helpers';
import { getOrder, updateOrder } from '../../services/apiRestaurant.js';
import { useFetcher, useLoaderData } from 'react-router-dom';
import OrderItem from './OrderItem.jsx';
import { useEffect } from 'react';
import Button from '../../ui/Button.jsx';

// const order = {
//   id: "ABCDEF",
//   customer: "Jonas",
//   phone: "123456789",
//   address: "Arroios, Lisbon , Portugal",
//   priority: true,
//   estimatedDelivery: "2027-04-25T10:00:00",
//   cart: [
//     {
//       pizzaId: 7,
//       name: "Napoli",
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: "Diavola",
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: "Romana",
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: "-9.000,38.000",
//   orderPrice: 95,
//   priorityPrice: 19,
// };

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are
  // only for the restaurant staff
  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
  }, [fetcher]);

  const {
          id,
          status,
          priority,
          priorityPrice,
          orderPrice,
          estimatedDelivery,
          cart
        } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-xl font-semibold">Order {id} Status</h2>

        <div className="space-x-2">
          {priority && <span
            className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase text-green-50 tracking-wide ">Priority</span>}
          <span
            className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase text-green-50 tracking-wide">{status} order</span>
        </div>
      </div>

      <ul className="divide-stone-200 divide-y border-b border-t">
        {cart.map((item) => (
          <OrderItem item={item} key={item.id} isLoadingIngredients={fetcher.state === 'loading'}
                     ingredients={fetcher?.data?.find(el => el.id === item.pizzaId)?.ingredients ?? []} />))}
      </ul>

      <div className="bg-stone-200 px-5 py-6 flex items-center justify-between flex-wrap gap-2">
        <p>
          {deliveryIn >= 0
           ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
           : 'Order should have arrived'}
        </p>
        <p className="text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority &&
         <p className="text-sm font-medium text-stone-600">Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
      {!priority && <div className="mt-4 text-right">
        <fetcher.Form method="patch">
          <Button type="primary">修改状态</Button>
        </fetcher.Form>
      </div>}

    </div>
  );
}

export async function loader({ params }) {
  return await getOrder(params.orderId);
}

// eslint-disable-next-line no-unused-vars
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

export default Order;
