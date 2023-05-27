export interface Governorates {
  error_code: number
  status_code: number
  data: Data
  errors: any[]
}

export interface Data {
  list: List[]
}

export interface List {
  governorate_id: number
  governorate_name: string
}
