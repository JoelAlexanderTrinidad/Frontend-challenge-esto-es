import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

export const CardProyect = ({ id, name, date, assignedTo, projectManager, status, deleteProject }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); 

  };

  const handleDelete = () => {
    deleteProject(id);
    setIsModalOpen(false)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-between border p-3 ">
      <div className="">
        <h2>{name}</h2>
        <p className="text-sm text-slate-600">Creation date: {date}</p>
        <p className="text-sm lg:hidden">Assigned to: {assignedTo}</p>
      </div>
        
      <div className="hidden lg:block">
        <h2>{projectManager}</h2>
      </div>

      <div className="hidden lg:block">
        <h2>{assignedTo}</h2>
      </div>

      <div className="hidden lg:block text-sm bg-[#e7e7e7] px-2 border border-gray-300 rounded text-neutral-500">
        <h2>{status}</h2>
      </div>

      <div>
        <div className="relative lg:text-xl lg:me-8">
          <i
            className="fa-solid fa-ellipsis-vertical cursor-pointer"
            onClick={handleMenuToggle}
          ></i>

          {isMenuOpen && (
            <div className="absolute top-0 right-4 lg:right-5 mt-1 bg-white border rounded shadow-md w-48">
              <div className="text-sm">
                <Link to={`/editProject/${id}`}>
                  <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <i className="fa-solid fa-pen-to-square pe-4"></i>Edit
                  </div>
                </Link>
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleDeleteClick}
                >
                  <i className="fa-solid fa-trash pe-4"></i>Delete
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete this project?</h2>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                onClick={handleDelete}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

CardProyect.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  assignedTo: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  projectManager: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  deleteProject: PropTypes.func.isRequired
};
