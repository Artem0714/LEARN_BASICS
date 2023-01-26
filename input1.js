class Database {

    private _url;
    private _port;
    private _username;
    private _password;
    private _tables;
    
    constructor(url, port, username, password, tables) {
        this._url = url;
        this._port = port;
        this._username = username;
        this._password = password;
        this._tables = [];
    }

    // необходимо создать всем свойствам getter

    get url() {
        return this._url;
    }

    get port() {
        return this._port;
    }

    get username() {
        return this._username;
    }

    get password() {
        return this._password;
    }

    get tables() {
        return this._tables;
    }

    // учим таблицу отдельно принимать новые данные создавая специальный метод, 
    //т.е. переопределять массив tables нельзя, можно вносить элементы в массив при необходимости

    public createNewTable(table) {
        this._tables.push(table)
    }
}