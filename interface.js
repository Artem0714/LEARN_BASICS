//интерфейс можно переиспользовать в разных классах

interface Repository<T> {
    create: (obj: T) => T;
    get: () => T;
    delete: (obj: T) => T;
}

class User {
    number: String;
    age: number;
}

class UserRepo implements Repository{
        create(obj: User): User {
            return undefined
        }

        get(): User {
            return undefined
        }

        delete(obj: User): User {
            return undefined
        }
    }
}