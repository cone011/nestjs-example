import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosAdapter } from 'src/configuration/adapters/axios.adapter';
import { OlimpiaMemberApi, OlimpiaMember } from './interface';

@Injectable()
export class OlimpiaIntegrationService {
  constructor(
    private readonly http: AxiosAdapter,

    private readonly configService: ConfigService,
  ) {}

  testing() {
    return {
      ok: true,
      message: 'hola mundo',
    };
  }

  async consultDocumentMembership(document: string) {
    try {
      const dataMember: OlimpiaMemberApi = await this.http.get(
        `${this.configService.get('URL_OLIMPIA_PROD')}/portal/consulta/ticketea`,
        {
          LicTradNum: document,
        },
      );

      if (!dataMember) {
        throw new BadRequestException(
          `El documento ingresado ${document} no existe`,
        );
      }

      const dataPartner: OlimpiaMember = {
        name: dataMember.nombre,
        category: dataMember.categoria,
        membershipNumber: dataMember.nroSocio,
        relatives: dataMember.familiares,
        debtor: dataMember.mora,
      };

      return dataPartner;
    } catch (error) {
      throw error;
    }
  }
}
