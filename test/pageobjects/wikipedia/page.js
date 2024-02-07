const { $ } = require('@wdio/globals')
const Utils = require('./utils');

class Page extends Utils {
    get expandSearch () {
        return $('.mw-ui-icon-search');
    }
    get inputSearch () {
        return $('.cdx-text-input__input');
    }

    get buttonSearch () {
        return $('.cdx-search-input__end-button');
    }

    get buttonHome () {
        return $('.mw-logo-icon');
    }

    get title () {
        return $('.mw-page-title-main')
    }

    get burgerMenu () {
        return $('#vector-main-menu-dropdown-checkbox')
    }

    get randomLink () {
        return $('#n-randompage')
    }

    async open (text) {
        await super.open();
    }

    async search (text) {
        await this.expandSearch.click();
        await this.inputSearch.setValue(text);
        await this.buttonSearch.click();
    }

    async goRandomArticle (text) {
        await this.burgerMenu.click();
        await this.randomLink.click();
    }

    async goHome (text) {
        await this.buttonHome.click();
    }
}

module.exports = new Page();
