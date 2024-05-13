export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  gender: Gender;
};

export enum UserRole {
  admin = "admin",
  moderator = "moderator",
  user = "user",
}

export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

export enum Race {
  NONE = "none",
  MAHILA = "mahila",
  JANAJATI = "janajati",
  ADIWASHI = "adiwashi",
  DALIT = "dalit",
}

export enum BloodType {
  A = "A",
  B = "B",
  AB = "AB",
  O = "O",
}

export enum RhFactor {
  POSITIVE = "positive",
  NEGATIVE = "negative",
}

export enum Caste {
  BRAHMIN = "brahmin",
  CHHETRI = "chhetri",
  MAGAR = "magar",
  NEWAR = "newar",
  RAI = "rai",
  LIMBU = "limbu",
}

export enum Religion {
  HINDU = "hindu",
  CHRISTIAN = "christian",
  ISLAM = "islam",
  BUDDHIST = "buddhist",
  OTHER = "other",
}

export enum DonationType {
  INDIVIDUAL = "individual",
  ORGANIZATION = "organization",
}
