import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'get all item';
  }
  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return ` Name:${createItemDto.name}, Desc:${createItemDto.description}, quantity:${createItemDto.qty}`;
  }
}
