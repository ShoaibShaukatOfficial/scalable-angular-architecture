import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RuntimeConfig } from './runtime-config';
import { Subject } from 'rxjs';

@Injectable()
export class RuntimeConfigLoaderService {
    private configUrl = './assets/config.json';
    private configObject: { [x: string]: any; };
    public configSubject: Subject<any> = new Subject<any>();

    constructor(private http: HttpClient, @Optional() config: RuntimeConfig) {
        if (config) {
            this.configUrl = config.configUrl;
        }
    }

    loadConfig(): Promise<any> {
        return this.http
            .get(this.configUrl)
            .toPromise()
            .then((configData: any) => {
                this.configObject = configData;
                this.configSubject.next(this.configObject);
            })
            .catch((err: any) => {
                this.configObject = null;
                this.configSubject.next(this.configObject);
            });
    }

    getConfig() {
        return this.configObject;
    }

    getConfigObjectKey(key: string) {
        return this.configObject ? this.configObject[key] : null;
    }
}
