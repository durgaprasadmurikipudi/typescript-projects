export interface Locatable {
  location: {
    lat: number;
    long: number;
  };
  markerContent(): string;
};