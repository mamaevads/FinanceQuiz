import { Option } from './option';

export class Question {
  id: number;
  text: string;
  options: Option[];
  solution: string;
  chosed:string;
}