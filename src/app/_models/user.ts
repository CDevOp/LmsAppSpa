import { Photo } from './photo';

export interface User {
  id: number;
  userName: string;
  knownAs: string;
  age: number;
  gender: string;
  created: Date;
  lastActive: any;
  photoUrl: string;
  city: string;
  country: string;
  interests?: string;
  introduction?: string;
  photos?: Photo[];
  roles?: string[];
}
