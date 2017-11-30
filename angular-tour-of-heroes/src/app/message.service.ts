import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
 messages = ["Messages Go Here"];

 add(message: string) {
   this.messages.push(message);
 }

 clear() {
   this.messages = [];
 }
}
