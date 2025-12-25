export interface Situation {
  id: string;
  name: string;
  category: string;
}

export interface Level {
  id: string;
  name: string;
}

export interface Difficulty {
  id: string;
  name: string;
}

export interface Style {
  id: string;
  name: string;
}

export interface PromptSelection {
  situation: Situation | null;
  level: Level | null;
  difficulty: Difficulty | null;
  style: Style | null;
}
