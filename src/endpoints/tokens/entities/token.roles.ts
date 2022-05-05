import { ApiProperty } from '@nestjs/swagger';
export class TokenRoles {
  @ApiProperty({ type: String })
  address: string = '';

  @ApiProperty({ type: Boolean, default: false })
  canMint: boolean = false;

  @ApiProperty({ type: Boolean, default: false })
  canBurn: boolean = false;

  @ApiProperty({ type: [String] })
  roles: string[] = [];
}