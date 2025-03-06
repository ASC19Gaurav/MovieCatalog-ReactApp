export class Issue{
    constructor(
        public id:string,
        public title:string,
        
        public priorty:string,
        public status:string,
        public assignee:string,
        public date:Date,
        public description:string,
    ){

    }
}