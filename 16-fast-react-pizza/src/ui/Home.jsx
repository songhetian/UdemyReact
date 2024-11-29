import CreateUser from '../features/user/CreateUser.jsx';
import { useSelector } from 'react-redux';
import Button from './Button.jsx';

function Home() {

  const userName = useSelector(state => state.user.userName);
  return (
    <div className="mt-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-center text-xl font-semibold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">Straight out of the oven, straight to you.</span>
      </h1>

      {userName === '' ? <CreateUser /> : <Button to="/menu" type="primary">继续订购</Button>}

    </div>
  );
}

export default Home;
