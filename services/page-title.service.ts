import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment } from '../../../environments/environment';
import { LoggingService } from '../../../logger/logging.service';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  constructor(private logger: LoggingService, private titleService: Title) {
    this.logger.info(this, 'constructor');
  }

  setTitle(title: string): void {
    this.logger.info(this, `constructor(title: ${title})`);
    const env = environment.label;
    this.titleService.setTitle(`Qbridge Platform - ${env === 'prod' ? '' : `[${env.toUpperCase()}]`} ${title}`);
  }
}
