import ReserveService from './ReserveService.js';

class App {
  constructor() {
    this.reserveService = new ReserveService();
  }

  async run() {
    await this.reserveService.getReservation();
  }
}

export default App;
