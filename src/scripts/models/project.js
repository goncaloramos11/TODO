

export class Project {
    constructor(title){
        this.id = crypto.randomUUID();
        this.title = title;
    }
}