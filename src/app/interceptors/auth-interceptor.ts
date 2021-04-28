import { AlertController } from '@ionic/angular';

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Storage } from '@ionic/storage';
import { switchMap } from 'rxjs/operators';



@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    TOKEN_KEY = 'access_token';
    constructor(
        private storage: Storage,
    ) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.storage.get(this.TOKEN_KEY))
            .pipe(
                switchMap((token: string) => {
                    if (token) {
                        const cloned = req.clone({
                            headers: req.headers.set("Authorization", 'Bearer ' + token)
                        });
                        return next.handle(cloned)
                    }
                    return next.handle(req);
                })

            )

    }
}