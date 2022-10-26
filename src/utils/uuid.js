import crypto from 'crypto-browserify';

// генерируем какой-то идентификатор для запуска
// eslint-disable-next-line import/prefer-default-export
export const UUID = crypto.randomUUID();
