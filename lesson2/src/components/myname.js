import './myname.scss'

export default class MyName {
    constructor(fName, sName) {
        this.fName = fName;
        this.sName = sName;
    }

    sayName() {
        return alert(this.fName + this.sName);
    }

    Name(){
        return this.fName + this.sName
    }


}