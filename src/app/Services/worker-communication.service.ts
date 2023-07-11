import {Injectable} from '@angular/core';
import {IProduct} from "../CoreModule/model/iproduct";
import {ICategory} from "../CoreModule/model/icategory";

@Injectable({
  providedIn: 'root'
})
export class WorkerCommunicationService {
  private readonly worker = new Worker(new URL('../SharedModule/Workers/stealthy.worker.ts', import.meta.url));
  private _categories: Array<{ id: number; name: string }> = [];

  constructor() {
  }

  get categories(): Array<ICategory> {
    return this._categories;
  }

  async processData(data: IProduct[]): Promise<void> {
    this._categories = await new Promise<ICategory[]>((resolve, reject) => {
      this.worker.onmessage = (event) => {
        resolve(event.data);
      };

      this.worker.onerror = (error) => {
        reject(error);
      };

      this.worker.postMessage(data);
    });
  }
}
