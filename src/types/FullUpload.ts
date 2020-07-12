export interface UploadOutDate {
  date: string;
  type: string;
}

export interface UploadOutRegion {
  regionName: string;
  postalCode?: string;
  hours?: string;
}

export interface UploadOutCity {
  cityName: string;
  province?: string;
}

export interface UploadObject {
  city: UploadOutCity;
  region: UploadOutRegion;
  dates: Array<UploadOutDate>;
}
