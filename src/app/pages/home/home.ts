
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  @ViewChild('audio') audio!: ElementRef<HTMLAudioElement>;

  isPlaying = false;
  areSocialsVisible = false;

  showSocials(): void {
    this.areSocialsVisible = true;
  }

  hideSocials(): void {
    this.areSocialsVisible = false;
  }

  async toggleAudio(): Promise<void> {
    const audioElement = this.audio.nativeElement;

    if (!audioElement.paused) {
      audioElement.pause();
      this.isPlaying = false;
    } else {
      audioElement.volume = 0.7;

      try {
        await audioElement.play();
        this.isPlaying = !audioElement.paused;
        console.log('Playing:', this.isPlaying);
      } catch (error) {
        console.error('Could not play audio:', error);
      }
    }
  }
}
