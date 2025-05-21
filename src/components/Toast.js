import React from "react";
import { PiCheck } from "react-icons/pi";

import ToastPortal from './ToastPortal';

const Toast = ({ message, open }) => {
  if (!open) return null;

  return (
    <ToastPortal>
      <aside id="toast" role="status" aria-live="polite" style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        padding: 'var(--space-xs) var(--space-sm)',
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        animation: 'fadeIn 0.3s, fadeOut 0.3s 1.7s',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-xs)',
        fontSize: 'var(--font-size-small)',
      }}>
        <PiCheck size={16} />
        {message && message}
      </aside>
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, 20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        
        @keyframes fadeOut {
          from { opacity: 1; transform: translate(-50%, 0); }
          to { opacity: 0; transform: translate(-50%, 20px); }
        }
      `}
      </style>
    </ToastPortal>
  )
}

export default Toast;
