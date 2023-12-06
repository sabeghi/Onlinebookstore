import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty({ example: 'username', description: 'User username' })
  username: string;

  @ApiProperty({ example: 'email', description: 'User email' })
  email: string;

  @ApiProperty({ example: 'password', description: 'User password' })
  password: string;

  @ApiProperty({ example: 'user | admin', description: 'User Role : user | admin' })
  roles: string[];
}

export class LoginDTO{
  @ApiProperty({ example: 'username', description: 'User username' })
  username: string;
  
  @ApiProperty({ example: 'password', description: 'User password' })
  password: string;

}