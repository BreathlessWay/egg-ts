import { Controller } from 'egg';

enum NumList {
  UP = 'UP', DOWN = 'DOWN', LEFT = 'LEFT', RIGHT = 'RIGHT'
}

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

const c: Circle = {
  kind: ShapeKind.Circle,
  //    ~~~~~~~~~~~~~~~~ Error!
  radius: 100
};

export default class BaseController extends Controller {
  static get baseController () {
    console.log(NumList.UP);
    console.log(c);
    return 'baseController';
  }

  notFound (msg: string) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}
