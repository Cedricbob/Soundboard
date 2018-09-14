import { Component, OnInit } from '@angular/core';
import { ElectronService } from "../../providers/electron.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public window = this.electron.window;
  public isMaximized;
  
  constructor(private electron:ElectronService) { }

  ngOnInit() {
  }
  
  exit(){
    this.window.close();
  }
  toggleMaximize(){
    if (this.window.isMaximized()){
      this.window.unmaximize();
    } else {
      this.window.maximize();
    }
  }
  minimize(){
    this.window.minimize();
  }
}
