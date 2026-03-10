import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lib-ui-loader',
  templateUrl: './ui-loader.component.html',
  styleUrl: './ui-loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiLoaderComponent  {
  @Input() label = 'Carregando...';
  @Input() mode: 'inline' | 'overlay' = 'inline';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}
