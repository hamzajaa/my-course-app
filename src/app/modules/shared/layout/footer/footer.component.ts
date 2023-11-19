import {Component, OnInit} from '@angular/core';
import {VersionService} from "../../../../services/version.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  version: string | undefined;

  constructor(private versionService: VersionService) {
  }

  ngOnInit(): void {
    console.log("ngOnInit is called in footer!");
    this.version = this.versionService.getVersion();
  }

}
