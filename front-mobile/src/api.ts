import axios from "axios";

const API_URL = 'https://humberto-dsdeliver.herokuapp.com';

export function fetchOrders() {
  return axios(`${API_URL}/orders`);
}

export function confirmDelvery(orderId: number) {
  return axios.put(`${API_URL}/orders/${orderId}/delivered`);

}