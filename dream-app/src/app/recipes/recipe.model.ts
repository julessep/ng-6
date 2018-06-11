// a model is just a blueprint for the objects we create
export class Recipe {
  public name: string; //:string adding type in TS
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}