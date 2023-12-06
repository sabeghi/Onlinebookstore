import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  ServerRunningMessage(): string {
    return 'Server is running :)';
  }
}
