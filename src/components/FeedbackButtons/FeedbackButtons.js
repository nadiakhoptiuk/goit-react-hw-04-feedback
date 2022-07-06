// import PropTypes from 'prop-types';
import s from './FeedbackButtons.module.css';

export default function FeedbackButtons({ btnTypes, onIncrease }) {
  return (
    <ul className="btnList">
      {btnTypes.map((btnType, index) => {
        return (
          <li key={index}>
            <button
              type="button"
              className={s[btnType[0]]}
              onClick={onIncrease}
              name={[btnType[0]]}
            >
              {btnType[0]}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

// FeedbackButtons.propTypes = {
//   btnTypes: PropTypes.shape(PropTypes.string.isRequired),
//   onIncrease: PropTypes.func.isRequired,
// };
