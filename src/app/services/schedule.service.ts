import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISchedule, IScheduleList } from '../interfaces/schedule.interface';
import { Schedule } from '../models/schedule.model';
import { v4 as uuidV4 } from 'uuid';
import { FrequencyEnum, NumberOfRepetitionsEnum } from '../enums/common.enum';
import { addDays, addMonths, addYears, format, isBefore, parse, parseISO } from 'date-fns';
import { FORMAT_DATE } from '../consts/format-date.const';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private scheduleSubject$ = new BehaviorSubject<IScheduleList>({});
  private schedule = signal<IScheduleList>({});

  initialScheduleStats() {
    const scheduleData = this.getScheduleStorage();
    this.scheduleSubject$.next(this.schedule());
    if (scheduleData) {
      this.scheduleSubject$.next(scheduleData);
    }
    this.setScheduleStorage(this.scheduleSubject$.getValue(), true);
  }

  setScheduleStorage(payload: any, initial: boolean = false) {
    try {
      localStorage.setItem("schedule", JSON.stringify(payload));
      if (!initial) {
        this.initialScheduleStats();
      }
    } catch (error) {
      console.error("Error saving configuration stats to local storage:", error);
    }
  }

  getScheduleStorage(): any {
    try {
      const scheduleData = localStorage.getItem("schedule");
      const ScheduleParse = scheduleData
        ? JSON.parse(scheduleData)
        : null;
      return ScheduleParse ?? null;
    } catch (error) {
      console.error("Error reading Schedule stats from local storage:", error);
      return null;
    }
  }

  get scheduleSubject() {
    return this.scheduleSubject$;
  }

  set scheduleSubject(value: any) {
    this.scheduleSubject$.next(value);
  }

  addSchedule(schedule: Schedule) {
    const scheduleData = this.getScheduleData(schedule);
    const scheduleDate = this.calculateSchedule(scheduleData);
    let scheduleResult: IScheduleList = this.getScheduleStorage();

    scheduleDate.forEach((date) => {
      const key = this.convertDateToString(date) || '';
      if(scheduleResult[key]) {
        scheduleResult[key].push(scheduleData);
      } else {
        scheduleResult[key] = [scheduleData];
      }
    })

    this.setScheduleStorage(scheduleResult);
    
    return this.scheduleSubject$.asObservable();
  }

  getPetDetailFromSchedule(schedule: Schedule) {
    return schedule.petList.filter((_, index) => schedule.checkedPets[index])[0]
  }

  getScheduleData(schedule: Schedule): ISchedule {
    return {
      id: uuidV4(),
      petInfo: this.getPetDetailFromSchedule(schedule),
      behavior: schedule.scheduleBehavior,
      description: schedule.scheduleDesc,
      event: schedule.scheduleEvent,
      remindType: schedule.scheduleRemind,
      type: schedule.scheduleType
    };
  }

  calculateSchedule(schedule: ISchedule): Date[] {
    const { behavior } = schedule;
    const { startDateTime, numberOfRepetitions } = behavior;

    if(startDateTime) {
      const startDate = typeof startDateTime === 'string' ? new Date(startDateTime) : startDateTime;

      if (numberOfRepetitions === NumberOfRepetitionsEnum.ONCE) {
        return [startDateTime];
      }
      
      if (numberOfRepetitions === NumberOfRepetitionsEnum.REPEAT) {
        const { frequencyNumber, frequencyUnit, endDateTime } = behavior;

        if(endDateTime && frequencyNumber) {
          const dates: Date[] = [];
          let currentDate = startDate;
          const endDate = typeof endDateTime === 'string' ? new Date(endDateTime) : endDateTime;

          while (isBefore(currentDate, endDate) || currentDate.getTime() === endDate.getTime()) {
            dates.push(currentDate);

            switch (frequencyUnit) {
              case FrequencyEnum.HOURS:
              case FrequencyEnum.DAYS:
                currentDate = addDays(currentDate, frequencyNumber);
                break;
              case FrequencyEnum.MONTHS:
                currentDate = addMonths(currentDate, frequencyNumber);
                break;
              case FrequencyEnum.YEARS:
                currentDate = addYears(currentDate, frequencyNumber);
                break;
              default:
                throw new Error(`Unsupported frequency unit: ${frequencyUnit}`);
            }
          }

          return dates;
        }

        return [startDateTime];
      }
    }

    return [];
  }

  convertDateToString(date: Date, formatStr: string = FORMAT_DATE.DEFAULT): string {
    return format(date, formatStr);
  }

  convertStringToDate(dateString: string, formatStr: string = FORMAT_DATE.DEFAULT): Date {
    return parse(dateString, formatStr, new Date());
  }
}
