import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

interface Message {
    name: string;
    msg: string;
    date: number;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    messagesCol: AngularFirestoreCollection<Message>;
    messages: Observable<Message[]>;

    msg: string;
    name: string;

    constructor(private afs: AngularFirestore) {}

    ngOnInit() {
        this.messagesCol = this.afs.collection('messages', ref => ref
            .orderBy('date', 'desc')
            .limit(20));
        this.messages = this.messagesCol.valueChanges();
        this.name = localStorage.getItem('nickname');
    }

    addMsg() {
        this.afs.collection('messages').add({'name': this.name, 'msg': this.msg, 'date': Date.now()});
        (<HTMLInputElement>document.getElementById('msg')).value = '';
    }

    convertToEmoji() {
        const str = (<HTMLInputElement>document.getElementById('msg')).value;
        const lastTwoCharacters = str.substring(str.length - 2, str.length);
        if (lastTwoCharacters[0] === ':') {
            const sub = str.substring(0, str.length - 2);
            if (lastTwoCharacters[1] === 'D') {
                (<HTMLInputElement>document.getElementById('msg')).value = sub + String.fromCodePoint(0x1F604);
            } else if (lastTwoCharacters[1] === ')') {
                (<HTMLInputElement>document.getElementById('msg')).value = sub + String.fromCodePoint(0x1F60A);
            } else if (lastTwoCharacters[1] === '(') {
                (<HTMLInputElement>document.getElementById('msg')).value = sub + String.fromCodePoint(0x1F612);
            } else if (lastTwoCharacters[1] === '*') {
                (<HTMLInputElement>document.getElementById('msg')).value = sub + String.fromCodePoint(0x1F61A);
            }
        }
    }
}
