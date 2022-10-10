import {$host, $authHost} from './index';

export const searchHotels = async (limit = 5, offset = 0) => { 
  const {data} = await $host.get('hotels', {limit, offset});
  return data;
}