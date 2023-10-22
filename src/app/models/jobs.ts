export interface JobsList {
    error_code: number;
    status_code: number;
    data: Data;
    errors: any[];
}

export interface Data {
    list: List[];
}

export interface List {
    name: string;
    description: string;
    requirements: string;
    tasks: string;
    documents: string;
    code: string;
}

export interface JobByCode {
    error_code: number
    status_code: number
    data: JobByCodeData
    errors: any[]
}

export interface JobByCodeData {
    id: number
    name: string
    description: string
    requirements: string
    tasks: string
    documents: string
    code: string
}

export interface JobIntroduce {
  jprequest_name: string
  jprequest_email: string
  jprequest_job_code: string
  jprequest_phone_number: string
  papers: string
}

