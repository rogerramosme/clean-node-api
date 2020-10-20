import { Express } from 'express'
import { bodyParser } from '../midlewares/body-parser'

export default (app: Express): void => {
  app.use(bodyParser)
}
