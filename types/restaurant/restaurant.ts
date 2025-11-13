import { ObjectId } from "../common/object-id";
import { Category } from "./category";
import { Item } from "./item";
import { Order } from "../order/order";
import { Review } from "../review/review";
import { Cart } from "../cart/cart";
import { AnalyticsDaily } from "../analytics/analytics-daily";

export interface Restaurant {
  id: ObjectId;
  name: string;
  slug: string;
  phone?: string;
  address?: string;
  active: boolean;

  categories?: Category[];
  items?: Item[];
  orders?: Order[];
  analytics?: AnalyticsDaily[];
  reviews?: Review[];
  carts?: Cart[];

  createdAt: Date;
}
