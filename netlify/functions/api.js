import serverless from 'serverless-http';
import express from 'express';
import cors from 'cors';
import { createApp } from '../../server/app.js';

const app = createApp({ serveStatic: false }, express, cors);

export const handler = serverless(app);
