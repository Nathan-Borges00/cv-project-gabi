import { Injectable } from '@angular/core';
import { Certificate } from '../interfaces/certificate';

@Injectable({
    providedIn: 'root',
})
export class CertificateService {
    certificates: Certificate[] = [
        {
            name: 'exemplo nome',
            image: '../assets/certifications/exemplo.png',
            pdfPath: '../assets/certifications/exemplo.pdf',
        },
    ];

    constructor() {}

    getCertificates(): Certificate[] {
        return this.certificates;
    }
}
