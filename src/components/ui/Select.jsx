import PropTypes from 'prop-types';

export const Select = ({ label, id, options, value, onChange, ...props }) => {
  return (
    <div className="mb-4 ">
      {label && <label htmlFor={id} className="block text-sm font-medium text-gray-700 ">{label}</label>}
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 "
        {...props}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };