import { Log } from '../../Logging_Middleware/log';

export const logEvent = async (event) => {
  await Log("frontend", "info", "component", event);
};