export interface iLoginFields {
  login: string;
  password: string;
}

export interface iUser {
  id: string;
  collectionId: string;
  collectionName: string;
  username: string;
  verified: boolean;
  emailVisibility: boolean;
  email: string;
  created: string;
  updated: string;
  name: string;
  avatar: string;
}

export interface iJunFields {
  picture: string;
  name: string;
  skills: string[];
}

export interface iSkill {
  id: string;
  collectionId: string;
  collectionName: 'skills';
  created: string;
  updated: string;
  name: string;
}

export interface iPic {
  collectionId: string;
  collectionName: 'pictures';
  created: string;
  id: string;
  picture: string;
  updated: string;
}
