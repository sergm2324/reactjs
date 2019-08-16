import './user.scss'
export default class Human {
    constructor(fName, sName){
        this.fName = fName;
        this.sName = sName;
    }

    sayHi () {
        return alert('Hi');
    }


}