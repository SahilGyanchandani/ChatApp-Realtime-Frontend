export interface Message {
  content: string;
  userId: string;
  id: string;
}

export interface MessageSend {
  content: string;
  receiverID: string;
}

export interface RtMsgSend {
  id: any;
  content: string;
  receiverID: any;
}

// export interface RealMsg {
//   content: string;
//   receiverID: string;
//   id: string;
//   timestamp: string;
//   messageID: string;


// }
