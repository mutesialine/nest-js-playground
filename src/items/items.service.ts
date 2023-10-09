import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '12353645',
      name: 'item one',
      qty: 50,
      description: 'this the first description',
    },
    {
      id: '1235shjaes3645',
      name: 'item two',
      qty: 50,
      description: 'this the second description',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
