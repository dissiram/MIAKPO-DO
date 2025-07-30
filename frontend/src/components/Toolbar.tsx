import React from 'react';
import { FaLink, FaImage, FaVideo, FaTextHeight, FaIdBadge, FaDownload, FaTrash } from 'react-icons/fa';
import { BlockType } from 'type';

interface ToolbarProps {
  onAddBlock: (type: BlockType) => void;
  onDeleteBlock: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({ onAddBlock, onDeleteBlock }) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center bg-gray-900 rounded-2xl px-4 py-3 gap-2 shadow-lg">
        <button 
          onClick={() => onAddBlock('text')} 
          className="bg-white rounded-lg p-2 mx-1 hover:bg-gray-100"
          title="Ajouter du texte"
        >
          <FaTextHeight size={20} />
        </button>
        <button 
          onClick={() => onAddBlock('image')} 
          className="bg-white rounded-lg p-2 mx-1 hover:bg-gray-100"
          title="Ajouter une image"
        >
          <FaImage size={20} />
        </button>
        <button 
          onClick={() => onAddBlock('links')} 
          className="bg-white rounded-lg p-2 mx-1 hover:bg-gray-100"
          title="Ajouter des liens"
        >
          <FaLink size={20} />
        </button>
        <button 
          onClick={onDeleteBlock} 
          className="bg-red-500 text-white rounded-lg p-2 mx-1 hover:bg-red-600"
          title="Supprimer l'élément sélectionné"
        >
          <FaTrash size={20} />
        </button>
        <button className="bg-blue-600 text-white rounded-lg px-4 py-2 ml-2 font-semibold hover:bg-blue-700 transition">
          Partager mon CV
        </button>
      </div>
    </div>
  );
};