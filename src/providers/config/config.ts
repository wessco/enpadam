import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
    export class ConfigProvider {
        url: string;
        constructor(public http: HttpClient) {
        this.url="https://emailforjobs.com/app/"
        console.log('ConfigProvider Started');
    }
}