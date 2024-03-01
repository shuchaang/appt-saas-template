import { Injectable } from '@nestjs/common';

@Injectable()
export class ScService {
  getAll(): any {
    return {
      code: 0,
      data: ['a', 'b', 'c'],
    };
  }

  addOne() {
    return {
      code: 200,
      data: { id: 1, name: 'sc', age: 22 },
    };
  }
}
