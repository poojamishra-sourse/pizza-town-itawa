import { ObjectId } from "../common/object-id";

export interface Address {
  id: ObjectId;
  userId: ObjectId;

  label?: string;
  line1: string;
  line2?: string;
  landmark?: string;
  city: string;
  state: string;
  pincode: string;
  location?: any;
  isDefault: boolean;

  createdAt: Date;
}
