export interface Branches {
  error_code: number
  status_code: number
  data: Data
  errors: any[]
}

export interface Data {
  list: List[]
}

export interface List {
  branch_id: number
  branch_name: string
}
