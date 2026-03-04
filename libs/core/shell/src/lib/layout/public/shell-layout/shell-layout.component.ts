import { Component, OnInit } from '@angular/core';
import { ThemeApplierService } from '../../../theme/theme-applier.service';

@Component({
  selector: 'lib-shell-layout',
  templateUrl: './shell-layout.component.html',
  styleUrl: './shell-layout.component.scss',
})
export class ShellLayoutComponent implements OnInit {
  constructor(private readonly theme: ThemeApplierService) {}
  ngOnInit() {
    this.theme.apply();
  }
}