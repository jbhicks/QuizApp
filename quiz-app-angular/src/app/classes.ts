export class Option {
  id: number;
  name: string;
  isAnswer: boolean;
  isSelected: boolean;
  constructor(id, name, isanswer) {
    this.id = id;
    this.name = name;
    this.isAnswer = isanswer;
    this.isSelected = false;
  }
}

export class Question {
  id: number;
  version: string;
  name: string;
  options: Option[];
  isCorrect: boolean;
  constructor(id, name, Options) {
    this.id = id;
    this.name = name;
    this.options = Options;
    this.isCorrect = false;
  }
}

export class Quiz {
  Id: number;
  description: string;
  name: string;
  questions: Array<Question>;
  constructor(Id, description, name, questions) {
    this.Id = Id;
    this.description = description;
    this.name = name;
    this.questions = questions;
  }
}
