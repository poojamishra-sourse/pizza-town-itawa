import { ObjectId } from "../common/object-id";
import { ItemOptionGroup } from "./item-option-group";
import { OrderItem } from "../order/order-item";
import { CartItem } from "../cart/cart-item";

export interface Item {
  id: ObjectId;
  restaurantId: ObjectId;
  categoryId: ObjectId;

  name: string;
  description?: string;
  price: number;
  image?: string;
  isVeg: boolean;
  active: boolean;

  tags: string[];
  spicyLevel?: number;

  optionGroups?: ItemOptionGroup[];
  orderItems?: OrderItem[];
  cartItems?: CartItem[];

  createdAt: Date;
  updatedAt: Date;
}
