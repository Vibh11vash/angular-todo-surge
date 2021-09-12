export class UserFormat{
    constructor(){
        this.data = Array<userData>()
    }
    page : any;
    total_pages : any;
    data : userData[] | undefined
}
export class userData{
    id:any;
    email:any;
    first_name:any;
    last_name:any;
    avatar:any;
}
