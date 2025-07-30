import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Sidebar from "@/components/Sidebar";
import { Block, BlockType } from "type";
import { DroppableArea } from "@/components/DroppableArea";
import { Toolbar } from "@/components/Toolbar";

const CvEdit: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);

  const addBlock = (type: BlockType) => {
    const newBlock: Block = {
      id: `block-${Date.now()}`,
      type,
      content: '',
      position: { x: 50, y: 50 + blocks.length * 10 },
      size: { width: 200, height: type === 'header' ? 100 : 150 }
    };
    setBlocks([...blocks, newBlock]);
    setSelectedBlock(newBlock.id);
  };

  const moveBlock = (id: string, position: { x: number; y: number }) => {
    setBlocks(blocks.map(block => 
      block.id === id ? { ...block, position } : block
    ));
  };

  const updateBlockContent = (id: string, content: string) => {
    setBlocks(blocks.map(block => 
      block.id === id ? { ...block, content } : block
    ));
  };

  const deleteBlock = (id: string) => {
    setBlocks(blocks.filter(block => block.id !== id));
    if (selectedBlock === id) setSelectedBlock(null);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar onAddBlock={addBlock} />
        <main className="flex-1 p-8 flex flex-col items-center relative">
          <DroppableArea 
            blocks={blocks}
            onMoveBlock={moveBlock}
            selectedBlock={selectedBlock}
            onSelectBlock={setSelectedBlock}
            onUpdateContent={updateBlockContent}
          />
          <Toolbar 
            onAddBlock={addBlock} 
            onDeleteBlock={() => selectedBlock && deleteBlock(selectedBlock)}
          />
        </main>
      </div>
    </DndProvider>
  );
};

export default CvEdit;