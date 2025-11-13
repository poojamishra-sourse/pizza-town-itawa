import { ObjectId } from "../common/object-id";
import { UserRole } from "../enums/user-role";
import { Address } from "./address";
import { Cart } from "../cart/cart";
import { Order } from "../order/order";
import { Review } from "../review/review";
import { Notification } from "../notification/notification";
import { DeliveryProfile } from "./delivery-profile";

export interface User {
  id: ObjectId;
  role: UserRole;
  name?: string;
  email?: string;
  phone?: string;
  passwordHash?: string;
  avatarUrl?: string;
  defaultAddressId?: ObjectId;

  dob?: Date;
  gender?: string;
  additionalInfo?: any;

  addresses?: Address[];
  carts?: Cart[];
  orders?: Order[];
  reviews?: Review[];
  notifications?: Notification[];
  deliveryProfile?: DeliveryProfile | null;

  createdAt: Date;
  updatedAt: Date;
}
