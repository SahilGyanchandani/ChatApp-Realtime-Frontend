export interface Message {
  messageID: string;
  content: string;
  userId: string;
  receiverID: string;
  id: string;
  timestamp: any;
}

export interface MessageSend {
  content: string;
  receiverID: string;
}




