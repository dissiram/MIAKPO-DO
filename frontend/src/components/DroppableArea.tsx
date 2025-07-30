import React from 'react';
import { useDrop } from 'react-dnd';
import { Block } from 'type';
import { DraggableBlock } from '@/components/DraggableBlock';

interface DroppableAreaProps {
  blocks: Block[];
  onMoveBlock: (id: string, position: { x: number; y: number }) => void;
  selectedBlock: string | null;
  onSelectBlock: (id: string | null) => void;
  onUpdateContent: (id: string, content: string) => void;
  onResizeBlock: (id: string, size: { width: number; height: number }) => void;
}

export const DroppableArea: React.FC<DroppableAreaProps> = ({
  blocks,
  onMoveBlock,
  selectedBlock,
  onSelectBlock,
  onUpdateContent,
  onResizeBlock
}) => {
  const [, drop] = useDrop(() => ({
    accept: 'BLOCK',
    drop: (item: { id: string; position: { x: number; y: number } }, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      if (!delta) return;

      const left = Math.round(item.position.x + delta.x);
      const top = Math.round(item.position.y + delta.y);
      onMoveBlock(item.id, { x: left, y: top });
    },
  }));

  return (
    <div 
      ref={drop}
      className="relative w-full max-w-4xl min-h-[600px] bg-white rounded-lg shadow-sm border border-gray-200"
      onClick={() => onSelectBlock(null)}
    >
      {blocks.map((block) => (
        <DraggableBlock
          key={block.id}
          block={block}
          isSelected={selectedBlock === block.id}
          onSelect={onSelectBlock}
          onUpdateContent={onUpdateContent}
          onResizeBlock={onResizeBlock}
        />
      ))}
    </div>
  );
};