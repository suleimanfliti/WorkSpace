export enum Gender {
  Male = 'mail',
  Femail = 'Femail',
}
export interface Profile {
  id?: number;
  user_id?: number;
  grade?: number;
  gender?: number;
  birthdate?: Date;
  country_id?: number;
  city: string;
  weekly_hours: number;
  website: string;
  github: string;
  gitlab: string;
  social_media: string;
  contacts?: string;
  picture: string;
  cover: string;
  status?: number;
  created_at?: Date;
  updated_at?: Date;
}
