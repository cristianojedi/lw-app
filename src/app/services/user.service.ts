import { Injectable } from '@angular/core';

import { User } from '../models/user';

@Injectable()
export class UserService {
    public users: User[] = [];

    constructor(
    ) { }

    save() {
        const data = JSON.stringify(this.users);
        localStorage.setItem('users', data);
    }

    list(): User[] {
        const data = localStorage.getItem('users');
        if (data) {
            this.users = JSON.parse(data);
        } else {
            this.users = [];
        }

        return this.users;
    }

    insert(user: User) {
        this.users.push(user);
        this.save();
    }

    delete(user: User) {
        const index = this.users.indexOf(user);
        if (index !== -1) {
            this.users.splice(index, 1);
        }

        this.save();
    }
}
