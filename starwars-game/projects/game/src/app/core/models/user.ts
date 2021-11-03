export class User {
  public weaponType !: string;
  constructor(public surname: string, public pictureUrl: string = '') {

  }
}

// Ici l'objet est une classe (User)
const user = new User('')
user.weaponType = ''

// Ici l'objet est un type ayant le même contrat que User
// Il n'y a pas de constructeur, donc pas de dépendances,
// Pas de getter ou de setter,...
const user2: User = {
  pictureUrl: '',
  surname: '',
  weaponType: ''
}

const user3 = {
  pictureUrl: '',
  surname: '',
  weaponType: ''
}

// Ne peut pas être implémenté par une classe
export declare type UserLike = {
  pictureUrl: string,
  surname: string,
  weaponType: string
}

const user5: UserLike = {
  pictureUrl: '',
  surname: '',
  weaponType: ''
}

// Peut être implémenté par une classe
export interface UserBis {
  pictureUrl: string;
  surname: string;
  weaponType: string;
}

const user4: UserBis = {
  pictureUrl: '',
  surname: '',
  weaponType: ''
}

function display(user: User) {
  console.info(user)
}

display(user)
display(user2)
display(user3)
display(user4)
