import { makeAutoObservable } from "mobx";

export default class HotelStore {
  constructor() {
    this._hotels = [];
    makeAutoObservable(this);
  }

  setHotels(hotels) {
    this._hotels = hotels;
  }

  get hotels() {
    return this._hotels;
  }
}