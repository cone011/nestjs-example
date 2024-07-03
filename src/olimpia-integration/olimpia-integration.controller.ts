import { Controller, Get, Param } from '@nestjs/common';
import { OlimpiaIntegrationService } from './olimpia-integration.service';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces';

@Controller('olimpia-integration')
export class OlimpiaIntegrationController {
  constructor(
    private readonly olimpiaIntegrationService: OlimpiaIntegrationService,
  ) {}

  @Get()
  testing() {
    return this.olimpiaIntegrationService.testing();
  }

  @Get(':document')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  findOne(@Param('document') document: string) {
    return this.olimpiaIntegrationService.consultDocumentMembership(document);
  }
}
