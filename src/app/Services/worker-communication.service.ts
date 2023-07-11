import {Injectable} from '@angular/core';
import {IProduct} from "../CoreModule/model/iproduct";

@Injectable({
  providedIn: 'root'
})
export class WorkerCommunicationService {
  private readonly worker = new Worker(new URL('../SharedModule/Workers/stealthy.worker.ts', import.meta.url));

  constructor() {
  }

  sendDataToWorker(data: IProduct[]) {
      this.worker.postMessage([data]);
  }

  getDataFromWorker(): Array<{ id: number; name: string }> {
      this.worker.onmessage = ({data}) => {
        return data;
      };
    return [];
  }
}
