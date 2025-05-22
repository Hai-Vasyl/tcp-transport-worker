import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

interface CreateOrderDTO {
  name: 'Test order';
  productId: 'test_id';
}

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject('ORDER_SERVICE') private readonly orderServiceClient: ClientProxy,
  ) {}

  @Post('create')
  async createOrder(@Body() order: CreateOrderDTO) {
    return this.orderServiceClient.send({ cmd: 'create-order' }, order);
  }
}
