export type User = {
  userId?: number;
  name: string;
};

export type Message = {
  chatId: string;
  messageId: string;
  userId: string;
  timeStamp: string;
  read: boolean;
  content: string;
};
