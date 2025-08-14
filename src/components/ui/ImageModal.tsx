import React from "react";

type ImageModalProps = {
  src: string;
  onClose: () => void;
};

export const ImageModal: React.FC<ImageModalProps> = ({ src, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative">
        <img src={src} alt="Imagem ampliada" className="max-w-full max-h-screen rounded-lg" />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-600"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
