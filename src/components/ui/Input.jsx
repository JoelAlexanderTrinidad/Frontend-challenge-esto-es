import PropTypes from 'prop-types';

export const Input = ({ label, id, type = 'text', value, onChange, ...props }) => {
    return (
      <div className="mb-4 ">
        {label && <label htmlFor={id} className="block text-sm font-medium text-gray-700 ">{label}</label>}
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 "
          {...props}
        />
      </div>
    );
  };

  Input.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };