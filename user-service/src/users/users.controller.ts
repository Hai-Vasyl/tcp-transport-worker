import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

interface UserDTO {
  email: string;
  password: string;
}

interface RegisterUserResponseDTO {
  message: string;
  user: UserDTO;
}

@Controller()
export class UsersCOntroller {
  @MessagePattern('register-user')
  async registerUser(user: UserDTO): Promise<RegisterUserResponseDTO> {
    return { message: 'User registered', user };
  }
}
