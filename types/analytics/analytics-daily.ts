import { ObjectId } from "../common/object-id";

export interface AnalyticsDaily {
  id: ObjectId;
  restaurantId: ObjectId;

  date: Date;
  ordersCount: number;
  revenue: number;
  topItems?: any;
}
