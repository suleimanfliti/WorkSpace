export interface Project {
  id?: number;
  managert_id?: number;
  previous_managert_id?: number;
  created_by?: number;
  color?: string;
  title?: string;
  description?: string;
  start_date?: Date;
  estimated_date?: Date;
  actual_date?: Date;
  skilles?: string;
  datafile_type?: string;
  datafile_name?: string;
  valid_to?: Date;
  status?: number;
  deleted_at?: Date;
  updated_at?: Date;
  created_at?: Date;
}
