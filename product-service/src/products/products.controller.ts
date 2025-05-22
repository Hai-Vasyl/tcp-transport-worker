import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

interface ProductDTO {
  name: 'Product name';
}

interface CreateProductReponseDTO {
  message: string;
  product: ProductDTO;
}

@Controller()
export class ProductsController {
  @MessagePattern({ cmd: 'create-product' })
  async createProduct(product: ProductDTO): Promise<CreateProductReponseDTO> {
    return { message: 'Product created', product };
  }
}
