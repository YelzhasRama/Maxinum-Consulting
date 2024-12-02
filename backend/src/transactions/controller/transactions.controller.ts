import { Controller, Get, Post, Body } from '@nestjs/common';
import { TransactionsService } from '../service/transactions.service';
import { Transaction } from '../entity/transactions.entity';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(@Body() transaction: Partial<Transaction>) {
    return this.transactionsService.create(transaction);
  }

  @Get()
  findAll() {
    return this.transactionsService.findAll();
  }
}
