export interface Countries {
  error_code: number;
  status_code: number;
  data: Data;
  errors: any[];
}

export interface Data {
  list: List[];
}

export interface List {
  country_id: number;
  country_name: string;
  country_phone_code: number;
}
