import PropTypes from "prop-types";

export const Button = ({ children, ...props }) => {
    return (
        <button className="bg-red-500 px-3 h-10 my-auto rounded-md text-white" {...props}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired
  };