import crypto from 'crypto';

// essa classe vai emplementer comportamentos padrãoes entre todas as entidades
export abstract class Entity<T> {
  // protected porque eu quero o id seja acessivel somente nessa classe e nas
  // classes que estendem 
  protected _id: string;
  public props: T;

  get id() {
    return this._id;
  }
  
  constructor(props: T, id?: string) {
    this.props = props;
    this._id = id ?? crypto.randomUUID();
  }
}