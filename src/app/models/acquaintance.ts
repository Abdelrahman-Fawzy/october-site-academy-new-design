export interface Acquaintance {
  error_code: number
  status_code: number
  data: Data
  errors: any[]
}

export interface Data {
  list: List[]
}

export interface List {
  qualification_id: number
  acquaintance_name: string
}
