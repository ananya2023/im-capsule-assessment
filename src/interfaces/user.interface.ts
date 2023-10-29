export interface IUserAddressDetails {
  city: string;
  userName: string;
  coordinates: { lat: number; lng: number };
  country: string;
  state: string;
  street_adress: string;
  stree_name: string;
  zip_code: string;
}

export interface IUserCreditCardDetails {
  cc_number: string;
}

export interface IUserEmployement {
  title: string;
  key_skill: string;
}

export interface IUserSubscription {
  payment_method: string;
  plan: string;
  status: string;
  term: string;
}

export interface IBaseUserInterface {
  uid: string;
  username: string;
  phone_number: string;
  password: string;
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
  date_of_birth: string;
  avatar: string;
  social_insurance_number: string;
  address: IUserAddressDetails;
  credit_card: IUserCreditCardDetails;
  employment: IUserEmployement;
  subscription: IUserSubscription;
}

export interface IUserInterface extends IBaseUserInterface {
  id: string;
  createdAt?: string;
  updated?: string;
}
