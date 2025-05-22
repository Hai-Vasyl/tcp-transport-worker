import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

interface OrderDTO {
  name: 'Test order';
  productId: 'test_id';
}

interface CreateOrderReponseDTO {
  message: string;
  order: OrderDTO;
}

@Controller()
export class OrdersController {
  @MessagePattern({ cmd: 'create-order' })
  async createOrder(order: OrderDTO): Promise<CreateOrderReponseDTO> {
    console.log('ORDER WAS CREATED', order);
    return { message: 'Order created', order };
  }
}
