import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder.jsx';

function Header() {
  return (
    <header className="bg-yellow-500">
      <SearchOrder />
      <Link to="/">Fast React Pizza GO.</Link>
    </header>
  );
}

export default Header;
