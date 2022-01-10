import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})

export class ChatPage implements OnInit {
  // TODO: In der Angular Doku nachlesen, was ViewChild macht und basierend auf deinem HTML XXXXX ersetzen
  @ViewChild('newmessage', {static: false}) messageInput;
  @ViewChild('scrollMe', {static: false}) private myScrollContainer: ElementRef;

  message: string;
  messageForm: FormGroup;
  showSpinnerIcon = false;
  showDates = false;
  chatList: Observable<ChatMessage[]>;
  chatListRef: AngularFireList<ChatMessage>;
  groupNumber = 'G2';
  currentUser = 'Fabian';

  constructor(private alertCtrl: AlertController, afDb: AngularFireDatabase) {
    this.chatListRef = afDb.list('/chats/' + this.groupNumber);
    this.chatList = this.chatListRef.valueChanges();
  }

  ngOnInit() {
    this.messageForm = new FormGroup({
      messagefield: new FormControl('', )
    });
    this.scrollToBottom();
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  swipeEvent(swipe) {
    // 2  = Right to left swipe
    // 4  = Left to right swipe
    if (swipe.direction === 2 || swipe.direction === 4) {
      // TODO: Datum ein resp. ausblenden
    }
  }

  sendMessage() {
    this.message = this.messageForm.get('messagefield').value;
    console.log(this.message);
    if (this.message !== '') {
      this.showSpinnerIcon = true;
      const formattedDate = new Date().toLocaleString();
      this.chatListRef.push({username: this.currentUser , text: this.message, date: formattedDate });
      // TODO: Cleanup: Nachricht löschen und Spinner ausblenden
      this.showSpinnerIcon = false;
    }
  }
}
interface ChatMessage {
  username: string;
  text: string;
  date: any;
}
