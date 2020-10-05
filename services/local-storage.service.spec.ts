import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { LoggingService } from '../../../logger/logging.service';
import { MockLoggingService } from '../../../utilities/tests/mock-logging.service';
import { LocalStorageService } from './local-storage.service';


describe('LocalStorageService', () => {
    beforeEach(() => {
        const store = {};

        const mockLocalStorage = {
            getItem: (key: string): string => {
                return key in store ? store[key] : null;
            },
            setItem: (key: string, value: string) => {
                store[key] = `${value}`;
            },
            removeItem: (key: string) => {
                delete store[key];
            }
        };
        spyOn(localStorage, 'getItem')
            .and.callFake(mockLocalStorage.getItem);
        spyOn(localStorage, 'setItem')
            .and.callFake(mockLocalStorage.setItem);
        spyOn(localStorage, 'removeItem')
            .and.callFake(mockLocalStorage.removeItem);

        TestBed.configureTestingModule({
            providers: [
                { provide: LoggingService, useValue: new MockLoggingService() }
            ],
            imports: [
                HttpClientTestingModule
            ],
        });
    });

    it('should create', inject([LocalStorageService], (service: LocalStorageService) => {
        expect(service).toBeTruthy();
    }));

    it('should add an item to local storage and retrieve it',

        // Arrange
        inject([LocalStorageService, HttpTestingController], (service: LocalStorageService) => {
            const key = 'key';
            const data = 'data';

            // Act
            service.set(key, data);

            // Assert
            expect(localStorage.getItem(key)).toEqual(`"data"`);
        }));


    it('should remove an item from local storage',

        // Arrange
        inject([LocalStorageService, HttpTestingController], (service: LocalStorageService) => {
            const key = 'key';
            const data = 'data';
            service.set(key, data);

            // Act
            service.remove(key);

            // Assert
            expect(localStorage.getItem(key)).toBeNull();
        }));
});
