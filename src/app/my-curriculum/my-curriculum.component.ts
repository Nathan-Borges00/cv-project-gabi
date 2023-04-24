import { Component, OnInit } from '@angular/core';
import { Certificate } from './interfaces/certificate';
import { CertificateService } from './services/certificate.service';

@Component({
    selector: 'app-my-curriculum',
    templateUrl: './my-curriculum.component.html',
    styleUrls: ['./my-curriculum.component.scss'],
})
export class MyCurriculumComponent implements OnInit {
    certificates: Certificate[] = [];

    constructor(private certificateService: CertificateService) {}

    ngOnInit() {
        this.certificates = this.certificateService.getCertificates();
    }

    // openPdf(pdfPath: string): void {
    //     window.open(pdfPath, '_blank');
    // }
}
