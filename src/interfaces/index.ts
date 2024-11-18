interface IGeo {
  lat: string;
  lng: string;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IComment {
  postId?: number;
  id?: number;
  name: string;
  email: string;
  body: string;
}

export interface ICommentFormData {
  name: string;
  email: string;
  body: string;
}
