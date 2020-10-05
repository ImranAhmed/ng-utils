import { Injectable } from '@angular/core';

import { LoggingService } from '../../../logger/logging.service';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    protected localStorage = localStorage;

    constructor(private logger: LoggingService) {
        this.logger.info(this, 'constructor');
    }

    // Gets an item from local storage
    get(key: string): JSON | null {
        this.logger.info(this, `get(key: ${key})`);
        const item = localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        }
        return null;
    }

    // Updates an item in local storage
    set(key: string, data: any): void {
        this.logger.info(this, `set(key: ${key}, data: ${data})`);
        this.localStorage.setItem(key, JSON.stringify(data));
    }

    // Sets an item in local storage
    remove(key: string): void {
        this.logger.info(this, `remove(key: ${key})`);
        this.localStorage.removeItem(key);
    }
}

