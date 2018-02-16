import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  burgerMenu: service(),
  classNames: ['main-header'],
  classNameBindings: ['burgerIsOpen'],
  burgerIsOpen: alias('burgerMenu.isOpen'),
  actions: {
    openBurger() {
      this.get('burgerMenu').open();
    },
    closeBurger() {
      this.get('burgerMenu').close();
    },
  }
});
