class catalogue{
  private _id_product: any;
  private _name_product: any;
  private _description_product: any;
  private _price_product: any;
  private _image_product: any;
  constructor(
      id_product: any, name_product: any,
      description_product: any, price_product: any,
      image_product: any
  ){
      
      this._id_product = id_product,
      this._name_product = name_product,
      this._description_product = description_product,
      this._price_product = price_product,
      this._image_product = image_product
  }

  get id_product(): any{
      return this._id_product;
  }

  get name_product(): any{
      return this._name_product;
  }

  get description_product(): any{
      return this._description_product;
  }

  get price_product(): any{
      return this._price_product;
  }

  get image_product(): any{
      return this._image_product;
  }

  set id_product(id_product: any){
      this._id_product = id_product;
  }

  set name_product(name_product: any){
      this._name_product = name_product;
  }

  set description_product(description_product: any){
      this._description_product= description_product;
  }

  set price_product(price_product: any){
      this._price_product= price_product;
  }

  set image_product(image_product: any){
      this._image_product= image_product;
  }
}

export default catalogue;