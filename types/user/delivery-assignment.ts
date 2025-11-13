import { ObjectId } from "../common/object-id";
import { DeliveryStatus } from "../enums/delivery-status";

export interface DeliveryAssignment {
  id: ObjectId;
  orderId: ObjectId;
  deliveryId?: ObjectId | null;

  status: DeliveryStatus;

  distanceKm?: number;
  payAmount?: number;
  specialNote?: string;
}
