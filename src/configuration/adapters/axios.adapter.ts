import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { HttpAdapater } from 'src/common/interface';

@Injectable()
export class AxiosAdapter implements HttpAdapater {
  constructor(private readonly configService: ConfigService) {}

  private axios: AxiosInstance = axios;

  async get<T>(url: string, dataPass: any): Promise<T> {
    try {
      const response = await this.axios.get(url, {
        headers: {
          Authorization: `Basic ${btoa(
            `${this.configService.get('USER_OLIMPIA')}:${this.configService.get('PASSWORD_OLIMPIA')}`,
          )}`,
          'user-key': this.configService.get('USER_KEY'),
        },
        data: dataPass ? dataPass : undefined,
      });

      const { data } = response;

      return data.socio;
    } catch (error) {
      this.handleExceptions(error.response);
    }
  }
  post<T>(url: string, body: any): Promise<T> {
    throw new Error('Method not implemented.');
  }
  delete<T>(url: string): Promise<T> {
    throw new Error('Method not implemented.');
  }

  private handleExceptions(error: any) {
    if (error.data.codRetorno === '990') {
      throw new BadRequestException(error.data.desRetorno);
    }

    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
