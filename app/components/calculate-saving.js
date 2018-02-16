import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  summaryBox: service(),
  classNames: ['calculate-saving', 'calculate'],
  stateAidEnabled: true,
  taxEnabled: true,
  paymentsEnabled: true,
  stateAid: 14000,
  interest: 8686.5,
  interestBonus: 8442,
  tax: -2568,
  premie: 0,
  payments: -10520,
  totalSaved: 594030.8,
  effectiveRate: 1.01,
  actions: {
    openSummary() {
      this.get('summaryBox').open();
    },
    closeSummary() {
      this.get('summaryBox').close();
    }
  }
});
