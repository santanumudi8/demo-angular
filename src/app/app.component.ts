import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  song = new Audio();
  vSong = new RTCEncodedVideoFrame();
  songs=[
    {
      url:'./assets/Song1.mp3',
      name:'Song Name'
    },
    {
      url:'./assets/Song1.mp3',
      name:'Song Name 2'
    }
  ]

  openSong(song:any){
    this.song.src = song;
    this.song.load();
    this.song.play();
  }

  playSong(){
    this.song.play();
  }
  pauseSong(){
    this.song.pause();
  }
  stopSong(){
    this.song.pause();
    this.song.currentTime = 0;
  }
  vol(vl:any){
    this.song.volume=vl.target.value;
  }
  progress(prog:any){
    this.song.currentTime=prog.target.value;
  }

}
