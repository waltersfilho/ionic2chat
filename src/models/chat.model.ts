export class Chat{
    public $key: string;

    constructor (
        public lastMessage: string,
        public timestamp: number,
        public title: string,
        public photo: string,
    ){}
}