import { useCallback, useState } from 'react';

export const DraggableBlock: React.FC<DraggableBlockProps> = ({ 
  block, 
  isSelected,
  onSelect,
  onUpdateContent,
  onResizeBlock // Ajoutez cette prop
}) => {
  const [resizing, setResizing] = useState(false);

  const handleResizeStart = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setResizing(true);
    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', handleResizeEnd);
  }, []);

  const handleResize = useCallback((e: MouseEvent) => {
    if (!resizing) return;
    
    const newWidth = Math.max(
      block.minSize?.width || 100,
      block.size.width + e.movementX
    );
    
    const newHeight = Math.max(
      block.minSize?.height || 100,
      block.size.height + e.movementY
    );
    
    onResizeBlock(block.id, { 
      width: newWidth, 
      height: newHeight 
    });
  }, [resizing, block, onResizeBlock]);

  const handleResizeEnd = useCallback(() => {
    setResizing(false);
    document.removeEventListener('mousemove', handleResize);
    document.removeEventListener('mouseup', handleResizeEnd);
  }, [handleResize]);

  // Ajoutez ceci dans le JSX retourné
  return (
    <div style={{ /* ... */ }}>
      {/* ... contenu existant ... */}
      {isSelected && (
        <div 
          className="resize-handle"
          onMouseDown={handleResizeStart}
        />
      )}
    </div>
  );
};