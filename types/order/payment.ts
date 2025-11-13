import { ObjectId } from "../common/object-id";
import { PaymentMethod } from "../enums/payment-method";
import { PaymentStatus } from "../enums/payment-status";

export interface Payment {
  id: ObjectId;
  orderId: ObjectId;

  method: PaymentMethod;
  status: PaymentStatus;

  amount: number;
  gatewayInfo?: any;
}
