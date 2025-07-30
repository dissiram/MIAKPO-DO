// types.ts
export type BlockType = 'header' | 'text' | 'image' | 'video' | 'links' | 'experience';

export interface Block {
  id: string;
  type: BlockType;
  content: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  minSize?: { width: number; height: number };
}