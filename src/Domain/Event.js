import CONSTANTS from '../constants/Constants.js';

class Event {
  #isEventParticipant(reservation) {
    return reservation.getTotalPrice() >= CONSTANTS.minEventParticipationAmount;
  }

  applyEvent(reservation) {
    this.#isEventParticipant(reservation);
  }
}

export default Event;
