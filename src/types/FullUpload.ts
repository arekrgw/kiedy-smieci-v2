export interface UploadOutDate {
  date: String;
  type: String;
}

export interface UploadOutRegion {
  regionName: String;
  postalCode?: String;
  hours?: String;
}

export interface UploadOutCity {
  cityName: String;
  province?: String;
}

export interface UploadObject {
  city: UploadOutCity;
  region: UploadOutRegion;
  dates: Array<UploadOutDate>;
}
