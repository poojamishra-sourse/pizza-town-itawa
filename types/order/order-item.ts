import { ObjectId } from "../common/object-id";

export interface OrderItem {
  id: ObjectId;
  orderId: ObjectId;
  itemId?: ObjectId | null;

  nameSnap: string;
  price: number;
  quantity: number;

  optionsSnap?: any;
}
