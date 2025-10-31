import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input() appTooltip: string = '';
  @Input() tooltipPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  
  private tooltipElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    if (!this.appTooltip) return;

    this.tooltipElement = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltipElement, 'custom-tooltip');
    this.renderer.addClass(this.tooltipElement, `tooltip-${this.tooltipPosition}`);
    
    const text = this.renderer.createText(this.appTooltip);
    this.renderer.appendChild(this.tooltipElement, text);
    
    this.renderer.appendChild(document.body, this.tooltipElement);
    
    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltipElement.getBoundingClientRect();
    
    let top, left;
    
    switch (this.tooltipPosition) {
      case 'top':
        top = hostPos.top - tooltipPos.height - 5;
        left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
        break;
      case 'bottom':
        top = hostPos.bottom + 5;
        left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
        break;
      case 'left':
        top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
        left = hostPos.left - tooltipPos.width - 5;
        break;
      case 'right':
        top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
        left = hostPos.right + 5;
        break;
    }
    
    this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
  }

  private hideTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}
