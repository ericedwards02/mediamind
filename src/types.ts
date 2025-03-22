export interface Entry {
  id: string;
  title: string;
  mediaType: string;
  date: Date;

  // optional blocks
  review?: string;
  quickThought?: string;
  quote?: string;
  rating?: number;
  lists?: string[];
  related?: string[];
}
