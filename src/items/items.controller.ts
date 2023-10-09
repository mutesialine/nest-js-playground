import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}
  @Get()
  findAll(): Item[] {
    return this.itemService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id): Item {
    return this.itemService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return ` Name:${createItemDto.name}, Desc:${createItemDto.description}, quantity:${createItemDto.qty}`;
  }
  @Delete(':id')
  delete(@Param('id') id): string {
    return `delete ${id}`;
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateItemDto: CreateItemDto): string {
    return ` update ${id} name:${updateItemDto.name}`;
  }
}
