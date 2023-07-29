export interface Message {
  content: string;
  userId: string;
  id: string;
  timestamp: any;
  isActive: any;

}

export interface MessageSend {
  content: string;
  receiverID: string;
}


