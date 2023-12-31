import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message, MessageSend } from '../Models/message.model';
import { HubConnection } from '@aspnet/signalr';
import { ApiLog } from '../Models/Apilog.model';


@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {


  constructor(private http: HttpClient) { }

  searchConversation(query: string): Observable<any> {
    return this.http.get<any>(`https://localhost:7277/api/Message/search?query=${query}`);
  }

  onSubmit(obj: any): Observable<any> {
    return this.http.post<any>('https://localhost:7277/api/UserLogin/Login', obj);
  }

  onReg(userData: any): Observable<any> {
    return this.http.post<any>('https://localhost:7277/api/UserReg/Register', userData);
  }

  onUserList(): Observable<any> {
    return this.http.get<any>('https://localhost:7277/api/UserReg/Users');
  }

  onMsgHistory(userid: any): Observable<any> {
    return this.http.get<any>(`https://localhost:7277/api/Message?userId=${userid}`);
  }
  loadOlderMessages(receiverId: string, beforeTimestamp: Date): Observable<any[]> {
    // Make an HTTP GET request to your API to load older messages
    return this.http.get<any[]>(`https://localhost:7277/api/Message?userId=${receiverId}&before=${beforeTimestamp}&count=20&sort=asc`);
  }

  sendMessage(message: MessageSend): Observable<any> {
    return this.http.post<any>(`https://localhost:7277/api/Message`, message);
  }

  updateMessage(id: string, content: string): Observable<Message> {
    const url = `https://localhost:7277/api/Message/${id}`;
    const body = { content }; // Assuming your backend API expects the content in the request body
    return this.http.put<Message>(url, body);
  }

  deleteMessage(id: string): Observable<any> {
    return this.http.delete<any>(`https://localhost:7277/api/Message/${id}`);
  }

  // Fetches API logs from the server
  getApiLogs(): Observable<ApiLog[]> {
    return this.http.get<ApiLog[]>(`https://localhost:7277/api/ApiLogs`);
  }


}

