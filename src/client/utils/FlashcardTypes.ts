import { Block } from './EditorTypes';

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: FlashcardCategory;
  lessonUrl?: string;
  image?:string;
  answerBlocks?: Block[];
}

export type FlashcardCategory = 'security' | 'javascriptInterview' | 'css' | 'dom' | 'react' | 'typescript' | 'systemDesign' | 'databases' | 'networking' | 'ux' | 'docker' | 'nodejs'| 'testing';

export interface CategoryInfo {
  id: FlashcardCategory;
  name: string;
  icon: string;
  color: string;
}
