import { ObjectId } from "../common/object-id";

export interface Notification {
  id: ObjectId;
  userId?: ObjectId | null;
  title: string;
  message?: string;
  data?: any;
  readAt?: Date | null;
}
