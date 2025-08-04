import { defineStore } from "pinia";

import type { Order } from "@/types/order";
import { ordersData } from "@/data/orders";

export const useOrdersStore = defineStore("orders", () => {
  const orders = ordersData;

  const getOrders = (filters?: { vin?: string; startDate?: string; endDate?: string; }): Order[] => {
    if (!filters) return orders;

    return orders.filter((order) => {
      const date = new Date(order.fecha);
      
      return (
        (!filters.vin || order.vin.toLowerCase().includes(filters.vin.toLowerCase())) &&
        (!filters.startDate || date >= new Date(filters.startDate)) &&
        (!filters.endDate || date <= new Date(filters.endDate))
      );
    });
  };

  return { getOrders };
});
