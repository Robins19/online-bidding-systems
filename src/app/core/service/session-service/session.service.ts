import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {


    setToLocalStorage(key, value): void {
        localStorage.setItem(key, value);
    }

    remove(key): void {
        localStorage.removeItem(key);
    }

    removeAll(): void {
        localStorage.clear();
    }
}
