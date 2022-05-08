import { HttpClient } from "@angular/common/http";

export class membersService{
    constructor(private http : HttpClient){}
    getmembers(id : number){
        return this.http.get('http://localhost:8000/api/profiles/get-all', );
    }
}