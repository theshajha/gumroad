/* eslint-disable complexity */
import { get } from './network';
import URL from '../constants/Network';



export async function apiGetProducts(params: Record<string, string>) {
  return get(URL.products, params);
}
export async function apiGetRecommendedProducts(params: Record<string, string>) {
  return get(URL.recommendedProducts, params);
}
export async function apiGetStaffPickProducts(params: Record<string, string>) {
  return get(URL.staffProducts, params);
}
export async function apiGetCategories(params: Record<string, string>) {
  return get(URL.categories, params);
}
