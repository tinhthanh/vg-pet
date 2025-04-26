import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { STATS_INFO_DEFAULT } from '../consts/stats-info.const';
import { IStatsInfo } from '../interfaces/stats.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationStatsService {
  private statsSubject$ = new BehaviorSubject<any>({});
  configurationStats = signal(STATS_INFO_DEFAULT);

  getConfigurationStats(): Observable<{ data: Array<IStatsInfo> }> {
    return of({
      data: this.getStatsStorage(),
    });
  }
  
  setConfigurationStats(statsList: Array<IStatsInfo>) {
    this.setStatsStorage(statsList);
  }

  setConfigurationStatsDefault() {
    this.setStatsStorage(STATS_INFO_DEFAULT);
  }

  setConfigurationStatsItem(stats: IStatsInfo, index: number) {
    const petList = this.getStatsStorage();
    const statsUpdate = petList.map((item: IStatsInfo, indexItem: number) => {
      if (indexItem === index) {
        return stats;
      }
      return item;
    });
    this.setStatsStorage(statsUpdate);
  }

  get stats$(): Observable<Array<IStatsInfo>> {
    return of(this.configurationStats());
  }

  initialConfigurationStats() {
    const petList = this.getStatsStorage();
    this.statsSubject$.next(this.configurationStats());
    if (petList) {
      this.statsSubject$.next(petList);
    }
    this.setStatsStorage(this.statsSubject$.getValue(), true);
  }

  setStatsStorage(payload: any, initial: boolean = false) {
    try {
      localStorage.setItem("configuration-stats", JSON.stringify(payload));
      if (!initial) {
        this.initialConfigurationStats();
      }
    } catch (error) {
      console.error("Error saving configuration stats to local storage:", error);
    }
  }

  getStatsStorage(): any {
    try {
      const petList = localStorage.getItem("configuration-stats");
      const configurationParse = petList
        ? JSON.parse(petList)
        : null;
      return configurationParse ?? null;
    } catch (error) {
      console.error("Error reading configuration stats from local storage:", error);
      return null;
    }
  }
}
