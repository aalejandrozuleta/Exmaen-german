class historialDto{
  private _id_user : any;

  constructor(
      id_user : any
  ){
      this._id_user  = id_user ;
  }

  // Getters
  get id_user (): any{
      return this._id_user ;
  }

  //Setters
  set id_user(id_user : any){
      this._id_user  = id_user ;
  }
}

export default historialDto;