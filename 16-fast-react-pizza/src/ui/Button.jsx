import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  to:       PropTypes.string,
  type:     PropTypes.string,
  onClick:  PropTypes.func
};

function Button({ children, disabled, to, type, onClick }) {
  const base = 'text-sm disabled:cursor-not-allowed focus:ring-offset-4 inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300';
  const styles = {
    base:      base,
    primary:   base + ' px-4 py-3 sm:px-6 sm:py-4',
    small:     base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round:     base + ' px-1 py-1 md:px-3.5 md:py-2 text-sm',
    secondary: 'text-sm disabled:cursor-not-allowed ' +
               'focus:ring-offset-4 inline-block ' +
               'rounded-full border-stone-2 border-2 ' +
               'font-semibold ' +
               'uppercase text-stone-300 ' +
               'transition-colors ' +
               'duration-300 ' +
               'hover:bg-stone-300 ' +
               'hover:text-stone-800 ' +
               'hover:ring hover:ring-stone-300 hover:ring-offset-4 outline-none' +
               'focus:outline-none ' +
               'focus:ring focus:ring-stone-300 ' +
               'px-4 py-1 sm:px-6 sm:py-3.5'
  };
  if (to) return <Link to={to} className={styles[type]}>{children}</Link>;
  if (!onClick) return (
    <button
      disabled={disabled}
      className={styles[type]}
    >
      {children}
    </button>
  );

  return (
    <button
      disabled={disabled}
      className={styles[type]}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;