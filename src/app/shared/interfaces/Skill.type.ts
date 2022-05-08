export interface Skill {
  id?: number;
  name: string;
  description: string;
  last_use?: Date;
  level: number;
  publish_name?: boolean;
  created_at?: Date;
  updated_at?: Date;
}
