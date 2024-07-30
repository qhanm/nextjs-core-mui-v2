export type ObjectLiteral = {
  [key: string]: any
}

export type TErrorResponse = {
  errorCode: string
  errors: ObjectLiteral
  message: string
  status: string
}
