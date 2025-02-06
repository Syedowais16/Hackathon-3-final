import React, { useState, useEffect } from "react";

const Toast = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // Toast will disappear after 3 seconds

        return () => clearTimeout(timer); // Cleanup on unmount
    }, [message, onClose]);

    return (
        <div
            className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg text-white transition-opacity duration-300 ${type === "success" ? "bg-green-500" : "bg-red-500"}`}
            style={{ opacity: message ? 1 : 0 }}
        >
            {message}
        </div>
    );
};

export default Toast;
