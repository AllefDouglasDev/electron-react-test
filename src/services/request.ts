/* eslint-disable import/prefer-default-export */
import { ipcRenderer } from 'electron';

const TIMEOUT = 30000;

export function send<T = any>(to: string, data?: any): Promise<T> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('Timeout'));
    }, TIMEOUT);

    ipcRenderer.send(to, data);

    ipcRenderer.on(to, (_, response) => {
      if (response.success) {
        resolve(response.data);
      } else {
        reject(response.error || new Error('Unknown error'));
      }
      clearTimeout(timeoutId);
    });
  });
}
