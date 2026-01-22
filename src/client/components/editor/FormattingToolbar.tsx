import { useState, useEffect, useRef } from 'react';
import { 
  Bold, 
  Italic, 
  Underline, 
  Code, 
  AlignLeft, 
  AlignCenter, 
  AlignJustify,
  Type
} from 'lucide-react';
import { FontSize, TextAlign, TextStyle } from '../../utils/EditorTypes';

export interface FormattingToolbarProps {
  position: { top: number; left: number } | null;
  onFormat: (format: keyof TextStyle) => void;
  onAlign: (align: TextAlign) => void;
  onFontSize: (size: FontSize) => void;
  currentStyles?: TextStyle;
  currentAlign?: TextAlign;
  currentFontSize?: FontSize;
}

export function FormattingToolbar({
  position,
  onFormat,
  onAlign,
  onFontSize,
  currentStyles = {},
  currentAlign = 'left',
  currentFontSize = 'medium'
}: FormattingToolbarProps) {
  const [showFontSize, setShowFontSize] = useState(false);
  const [showAlign, setShowAlign] = useState(false);
  const toolbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (toolbarRef.current && !toolbarRef.current.contains(e.target as Node)) {
        setShowFontSize(false);
        setShowAlign(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!position) return null;

  return (
    <div
      ref={toolbarRef}
      className="fixed bg-neutral-800/95 backdrop-blur-sm border border-neutral-700 rounded-lg shadow-xl px-2 py-1.5 flex items-center gap-1 z-50"
      style={{
        top: position.top - 50,
        left: position.left,
        transform: 'translateX(-50%)'
      }}
    >
      <button
        onClick={() => onFormat('bold')}
        className={`p-1.5 rounded hover:bg-neutral-700 transition-colors ${
          currentStyles.bold ? 'bg-neutral-700 text-blue-400' : 'text-neutral-300'
        }`}
        title="Bold"
      >
        <Bold className="w-4 h-4" />
      </button>

      <button
        onClick={() => onFormat('italic')}
        className={`p-1.5 rounded hover:bg-neutral-700 transition-colors ${
          currentStyles.italic ? 'bg-neutral-700 text-blue-400' : 'text-neutral-300'
        }`}
        title="Italic"
      >
        <Italic className="w-4 h-4" />
      </button>

      <button
        onClick={() => onFormat('underline')}
        className={`p-1.5 rounded hover:bg-neutral-700 transition-colors ${
          currentStyles.underline ? 'bg-neutral-700 text-blue-400' : 'text-neutral-300'
        }`}
        title="Underline"
      >
        <Underline className="w-4 h-4" />
      </button>

      <button
        onClick={() => onFormat('code')}
        className={`p-1.5 rounded hover:bg-neutral-700 transition-colors ${
          currentStyles.code ? 'bg-neutral-700 text-blue-400' : 'text-neutral-300'
        }`}
        title="Inline Code"
      >
        <Code className="w-4 h-4" />
      </button>

      <div className="w-px h-5 bg-neutral-700 mx-1" />

      <div className="relative">
        <button
          onClick={() => {
            setShowAlign(!showAlign);
            setShowFontSize(false);
          }}
          className="p-1.5 rounded hover:bg-neutral-700 transition-colors text-neutral-300"
          title="Text Align"
        >
          {currentAlign === 'center' ? <AlignCenter className="w-4 h-4" /> :
           currentAlign === 'justify' ? <AlignJustify className="w-4 h-4" /> :
           <AlignLeft className="w-4 h-4" />}
        </button>

        {showAlign && (
          <div className="absolute top-full mt-1 bg-neutral-800 border border-neutral-700 rounded-lg shadow-xl p-1 flex gap-1">
            <button
              onClick={() => { onAlign('left'); setShowAlign(false); }}
              className={`p-1.5 rounded hover:bg-neutral-700 ${currentAlign === 'left' ? 'bg-neutral-700' : ''}`}
            >
              <AlignLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => { onAlign('center'); setShowAlign(false); }}
              className={`p-1.5 rounded hover:bg-neutral-700 ${currentAlign === 'center' ? 'bg-neutral-700' : ''}`}
            >
              <AlignCenter className="w-4 h-4" />
            </button>
            <button
              onClick={() => { onAlign('justify'); setShowAlign(false); }}
              className={`p-1.5 rounded hover:bg-neutral-700 ${currentAlign === 'justify' ? 'bg-neutral-700' : ''}`}
            >
              <AlignJustify className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <div className="relative">
        <button
          onClick={() => {
            setShowFontSize(!showFontSize);
            setShowAlign(false);
          }}
          className="p-1.5 rounded hover:bg-neutral-700 transition-colors text-neutral-300"
          title="Font Size"
        >
          <Type className="w-4 h-4" />
        </button>

        {showFontSize && (
          <div className="absolute top-full mt-1 bg-neutral-800 border border-neutral-700 rounded-lg shadow-xl p-1 flex gap-1 whitespace-nowrap">
            <button
              onClick={() => { onFontSize('small'); setShowFontSize(false); }}
              className={`px-2 py-1 rounded hover:bg-neutral-700 text-xs ${currentFontSize === 'small' ? 'bg-neutral-700' : ''}`}
            >
              S
            </button>
            <button
              onClick={() => { onFontSize('medium'); setShowFontSize(false); }}
              className={`px-2 py-1 rounded hover:bg-neutral-700 text-sm ${currentFontSize === 'medium' ? 'bg-neutral-700' : ''}`}
            >
              M
            </button>
            <button
              onClick={() => { onFontSize('large'); setShowFontSize(false); }}
              className={`px-2 py-1 rounded hover:bg-neutral-700 text-base ${currentFontSize === 'large' ? 'bg-neutral-700' : ''}`}
            >
              L
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
