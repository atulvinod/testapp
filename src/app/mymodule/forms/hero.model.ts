export class Hero {
  id: number;
  name: string = '';
  alterEgoName: string = '';
  heroPower: string = '';
  constructor(
    id: number,
    name: string,
    alterEgoName: string,
    heroPower: string
  ) {
    this.id = id;
    this.alterEgoName = alterEgoName;
    this.name = name;
    this.heroPower = heroPower;
  }
}
