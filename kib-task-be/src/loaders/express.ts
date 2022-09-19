import { Express, json, urlencoded } from 'express';
import cors from 'cors';
import postRoute from '../routes/post.route';
import { errorHandler } from '../errors/errorHandler';

const expressLoader = (app: Express) => {
  // Body parser, reading data from body into req.body
  app.use(json({ limit: '10kb' }));
  app.use(urlencoded({ extended: true, limit: '10kb' }));
  app.use(cors());

  // adding routes as middleware here
  app.use('/api/v1/posts', postRoute);

  // error middleware should be the last middleware
  app.use(errorHandler);

  return app;
};

export default expressLoader;
