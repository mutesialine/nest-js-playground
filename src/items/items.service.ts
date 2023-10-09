import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private itemModel: Model<Item>) {}

  async findAll() {
    return this.itemModel.find();
  }

  async findOne(id: string) {
    return this.itemModel.findOne({ id });
  }
}
