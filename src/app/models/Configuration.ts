export class Configuration {
  automaticSaving: boolean = false;
  savingIntervalInSeconds: number = 20;

  shufflingUseWebWorker: boolean = false;
  maximumNumberOfDeals: number = 100;
  maximumNumberOfAttempts: number = 1000000


  constructor(automaticSaving: boolean, savingIntervalInSeconds: number, shufflingUseWebWorker: boolean, maximumNumberOfDeals: number, maximumNumberOfAttempts: number) {
    this.automaticSaving = automaticSaving;
    this.savingIntervalInSeconds = savingIntervalInSeconds;
    this.shufflingUseWebWorker = shufflingUseWebWorker;
    this.maximumNumberOfDeals = maximumNumberOfDeals;
    this.maximumNumberOfAttempts = maximumNumberOfAttempts;
  }
}
