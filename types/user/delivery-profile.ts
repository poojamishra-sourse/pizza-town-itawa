import { ObjectId } from "../common/object-id";
import { DeliveryAssignment } from "./delivery-assignment";

export interface DeliveryProfile {
  id: ObjectId;
  userId: ObjectId;

  isOnline: boolean;
  vehicleType?: string;
  earnings: number;

  assignments?: DeliveryAssignment[];
}
