class User {

    //Назначение типов данных

    private _username;
    private _password;
    private _id;

    //Объявление свойств и методов класса

    constructor (username, password) {
        this._username = username;
        this._password = password;
        this._id = generateRandomId();
    }

    //В случае приватных данных необходимо создать getter and setter

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    // setter _id не нужен, так как id как правило неизменен для объектов

    get id() {
        return this._id;
    }
}


const user = new User("Pet", '123')
// user.id = '123'; - Ошибка
user.username = 'San' 



