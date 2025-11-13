import { ObjectId } from "../common/object-id";
import { OrderStatus } from "../enums/order-status";
import { PaymentStatus } from "../enums/payment-status";
import { OrderItem } from "./order-item";
import { Payment } from "./payment";
import { DeliveryAssignment } from "../user/delivery-assignment";
import { Review } from "../review/review";

export interface Order {
  id: ObjectId;
  userId: ObjectId;
  restaurantId: ObjectId;

  status: OrderStatus;
  paymentStatus: PaymentStatus;

  items?: OrderItem[];

  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;

  addressSnap?: any;
  instructions?: string;
  deliveryInstructions?: string;

  timeline?: any[];

  payment?: Payment;
  deliveryTask?: DeliveryAssignment;
  review?: Review;

  createdAt: Date;
  updatedAt: Date;
}
