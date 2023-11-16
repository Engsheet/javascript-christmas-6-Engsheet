import ReserveService from './ReserveService.js';

class App {
  constructor() {
    this.reserveService = new ReserveService();
  }

  async run() {
    await this.reserveService.useReserveService();
  }
}

export default App;
