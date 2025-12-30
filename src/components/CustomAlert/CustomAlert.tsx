import React from 'react';
import './CustomAlert.css';
import { FiCheckCircle, FiXCircle, FiX } from 'react-icons/fi';

interface CustomAlertProps {
  isOpen: boolean;
  type: 'success' | 'error';
  title: string;
  message: string;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ isOpen, type, title, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="alert-overlay" onClick={onClose}>
      <div className="alert-modal" onClick={(e) => e.stopPropagation()}>
        <div className="alert-header">
          <div className={`alert-icon ${type}`}>
            {type === 'success' ? <FiCheckCircle /> : <FiXCircle />}
          </div>
          <button className="alert-close" onClick={onClose}>
            <FiX />
          </button>
        </div>
        
        <div className="alert-content">
          <h3 className="alert-title">{title}</h3>
          <p className="alert-message">{message}</p>
        </div>
        
        <div className="alert-actions">
          <button className="alert-button" onClick={onClose}>
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;