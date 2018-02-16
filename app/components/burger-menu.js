import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  classNames: ['burger-menu'],
  burgerMenu: service(),
  classNameBindings: ['isOpen'],
  isOpen: alias('burgerMenu.isOpen'),
  actions: {
    open() {
      this.get('burgerMenu').open();
    },
    close() {
      this.get('burgerMenu').close();
    }
  }
});
