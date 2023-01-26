class Man {
    private _name;
    private _age;

    constructor (name, age) {
        this._name = name;
        this._age = age;
    }

    //создадим метод для полиморфной работы

    public greeting {
        console.log('Привет я человек и меня зовут ${this._firstName}');
    }

}

class Worker extends Man{
    private _inn;
    private _snils;

    constructor (name, age, inn, snils) {
        super(name, age)
        this._inn = inn;
        this._snils = snils;
    }

    public greeting {
        console.log('Привет я работник и меня зовут ${this._firstName}');
    }

}