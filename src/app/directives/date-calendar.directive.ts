import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';
import { ScheduleService } from '../services/schedule.service';
import { IScheduleList } from '../interfaces/schedule.interface';

@Directive({
  selector: '[appDateCalendar]',
  standalone: true
})
export class DateCalendarDirective {
  @Input() date!: Date;
  @Input() negated: boolean = false;

  constructor(
    private scheduleService: ScheduleService,
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['date']) {
      this.updateVisibility();
    }
  }

  private updateVisibility(): void {
    const dateKey = this.scheduleService.convertDateToString(this.date);
    if(this.negated) {
      if (this.scheduleList.hasOwnProperty(dateKey)) {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
      } else {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
      }
    } else {
      if (this.scheduleList.hasOwnProperty(dateKey)) {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
      } else {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
      }
    }
  }


  get scheduleList(): IScheduleList {
    return this.scheduleService.getScheduleStorage();
  }
}
