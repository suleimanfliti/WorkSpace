export interface Files {
  fileable_id?: number;
  fileable_type: string;
  profile_id: number;
  type: 'pdf' | 'doc' | 'xls' | 'ppt' | 'txt' | 'folder' | 'image';
  url?: string;
  name?: string;
  deleted_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}
