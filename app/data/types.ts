export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}

export interface SkillGroup {
  group: string;
  items: string[];
}
