import { ObjectId } from "../common/object-id";

export interface Review {
  id: ObjectId;
  userId: ObjectId;
  orderId: ObjectId;
  restaurantId: ObjectId;

  rating: number;
  comment?: string;
}
