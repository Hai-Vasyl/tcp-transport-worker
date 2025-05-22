import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDER_SERVICE',
        transport: Transport.TCP,
        options: { port: 4001 },
      },
    ]),
  ],
  controllers: [OrdersController],
  providers: [],
})
export class OrdersModule {}
