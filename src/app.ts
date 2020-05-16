import tmiClient from '../tmiClient';
import agenda from './agenda';

const startServer = async () => {
  const tmiClientInstance = await tmiClient();
  const agendaInstance = await agenda(tmiClientInstance);

  tmiClientInstance.connect();
  agendaInstance.start();
};

startServer();
