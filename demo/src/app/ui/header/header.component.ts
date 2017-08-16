import { Component } from '@angular/core'

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = '@ngx-plus/ngx-alerts'
  description = 'Advanced Angular Form Development'
}