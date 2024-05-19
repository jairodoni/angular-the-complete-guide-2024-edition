import { Component } from '@angular/core';

@Component({
  selector: 'AppServers',
//   template: `
//   <app-server></app-server>
// <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false
  serverCreationStatus = 'No server was created!'
  serverName = 'Testserver'
  serverCreated = false

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit() {
    
  }

  onCreateServer() {
    this.serverCreated = true
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
