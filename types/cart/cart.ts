import { ObjectId } from "../common/object-id";
import { CartItem } from "./cart-item";

export interface Cart {
  id: ObjectId;
  userId: ObjectId;
  restaurantId: ObjectId;

  items?: CartItem[];
}
