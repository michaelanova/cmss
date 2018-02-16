import Service from '@ember/service';
import $ from 'jquery';

export default Service.extend({
  isOpen: false,
  open() {
    this.set('isOpen', true);
    $('body').addClass('no-scroll');
  },
  close() {
    this.set('isOpen', false);
    $('body').removeClass('no-scroll');
  }
});
