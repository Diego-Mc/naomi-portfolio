import { Request } from 'firebase-functions/v2/https'

export interface RequestWithBody<T> extends Request {
  body: T
}
