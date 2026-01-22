export type BlockType = 'text' | 'code' | 'divider' | 'highlight';

export type TextAlign = 'left' | 'center' | 'justify';
export type FontSize = 'small' | 'medium' | 'large';

export interface TextStyle {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
}

export interface TextBlock {
  id: string;
  type: 'text';
  content: string;
  styles?: TextStyle;
  align?: TextAlign;
  fontSize?: FontSize;
}

export interface CodeBlock {
  id: string;
  type: 'code';
  content: string;
  language?: string;
}

export interface DividerBlock {
  id: string;
  type: 'divider';
}

export interface HighlightBlock {
  id: string;
  type: 'highlight';
  content: string;
}

export type Block = TextBlock | CodeBlock | DividerBlock | HighlightBlock;

export interface BlocksAnswer {
  blocks: Block[];
}