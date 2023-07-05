import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  videoList: any[] = [
    { title: 'Langchain Video 1', Vid: 'nAKhxQ3hcMA' },
    { title: 'Langchain Video 2', Vid: 'VG9KYCS0-8E' },
    { title: 'Langchain Video 3', Vid: 'cVA1RPsGQcw' },
    { title: 'Langchain Video 4', Vid: '5NG8mefEsCU' }
  ];
  public safeURL!: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {}

  getVideoUrl(Vid: string) {
    const videoId = Vid;
    this.safeURL=this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
    return this.safeURL;
  }

}
