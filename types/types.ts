import { UUID } from "crypto";

export type StatusType = "active" | "inactive" | "banned" | "deleted";

export interface UserInterface {
  id: UUID;
  username: string;
  email: string;
  status: StatusType;
}

export interface ProfilInterface {
  id: UUID;
  bio: string;
  photo: string | null;
  user: UUID;
}
