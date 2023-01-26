class Man {
    private _name;
    private _age;

    constructor (name, age) {
        this._name = name;
        this._age = age;
    }
}

class Worker {
    private _inn;
    private _snils;

    constructor (name, age, inn, snils) {
        super(name, age)
        this._inn = inn;
        this._snils = snils;
    }
}