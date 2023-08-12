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
  id: number
  name: string
}
