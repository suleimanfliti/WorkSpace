export interface User {
  id?: number;
  email?: string;
  name?: string;
  phone?: string;
  password?: string;
  confirm_password?: string;
  status?: number;
  created_at?: Date;
  updated_at?: Date;
  token?: string;
  // zip?: string;
}
// export class User {
//   constructor(
//     public id: number,
//     public email: string,
//     public name: string,
//     public phone: string,
//     private password: string,
//     private confirm_password: string,
//     public status: boolean,
//     public created_at: Date,
//     public updated_at: Date
//   ) {}
