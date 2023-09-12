import React from 'react';

const ModalBox = ({ isOpen, closeModal, formData }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? 'visible' : 'invisible'}`}>
      <div className="modal-overlay"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Form Data</p>
            <button className="modal-close" onClick={closeModal}>&times;</button>
          </div>
          <div className="mb-4">
            <p>Email: {formData.email}</p>
            <p>Doctor: {formData.doctor}</p>
            <p>Id: {formData.patientId}</p>
            <p>District: {formData.district}</p>
            <p>Description: {formData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalBox;
