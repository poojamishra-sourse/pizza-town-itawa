import { ObjectId } from "../common/object-id";

export interface CartItem {
  id: ObjectId;
  cartId: ObjectId;
  itemId: ObjectId;

  quantity: number;
  price: number;

  options?: any;
}
