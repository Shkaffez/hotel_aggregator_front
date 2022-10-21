import {$host, $authHost} from './index';

export const searchHotels = async (limit = 5, offset = 0) => { 
  console.log("searchHotels called")
  const {data} = await $host.get('hotels', {limit, offset});
  localStorage.setItem('access_token', data.access_token);
  return data;
}

export const addNewHotel = async (formData) => {
  console.log("addNewHotel called")
  const {data} = await $authHost.post('/admin/hotels/', formData);
  localStorage.setItem('access_token', data.access_token);
  return data;
}