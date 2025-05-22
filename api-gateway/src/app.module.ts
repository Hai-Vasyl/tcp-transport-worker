import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ClientsModule.register([
      // {
      //   name: 'ORDER_SERVICE',
      //   transport: Transport.TCP,
      //   options: { port: 4001 },
      // },
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.TCP,
        options: { port: 4002 },
      },
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: { port: 4003 },
      },
    ]),
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
