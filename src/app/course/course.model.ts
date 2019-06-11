
export class Course {
    id: string;
    name: string;
    category: string;
    teacherName: string;
    teacherEmail: string;
    description: string;
    language: string;
    img: string;
    overall: {
        one:number,
        two:number
        three:number
        four:number
        five:number
    };
    visible: boolean;
    creationDate: number;
    lastUpdate: number;

    constructor(
        id?: string,
        name?: string,
        category?: string,
        teacherName?: string,
        teacherEmail?: string,
        description?: string,
        language?: string,
        img?: string,
      overall?: {
            one:number,
            two:number
            three:number
            four:number
            five:number
        },
        visible?: boolean,
        creationDate?: number,
        lastUpdate?: number

    ) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.teacherName = teacherName;
        this.teacherEmail = teacherEmail;
        this.description = description;
        this.language = language;
        this.img = img;
        this.overall=overall;
        this.visible = visible;
        this.creationDate = creationDate;
        this.lastUpdate = lastUpdate;

    }
}
