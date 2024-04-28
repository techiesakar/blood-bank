export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

export enum UserRole {
  admin = "admin",
  moderator = "moderator",
  user = "user",
}
