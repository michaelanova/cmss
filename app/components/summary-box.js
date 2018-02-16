import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';


export default Component.extend({
  summaryBox: service(),
  classNames: ['summary-box'],
  classNameBindings: ['isOpen'],
  isOpen: alias('summaryBox.isOpen'),
  labelFirst: '',
  labelSecond: '',
  valueFirst: '',
  valueSecond: '',
  actions: {
    open() {
      this.get('summaryBox').open();
    },
    close() {
      this.get('summaryBox').close();
    },
  }
});
