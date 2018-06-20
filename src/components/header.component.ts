import * as _ from 'lodash';

const TEXT = _.join(_.values({
        a: 'Hello',
        b: 'Header',
    }), ' ');

const Header: HTMLElement = document.createElement('div');

Header.innerHTML = TEXT;

export {
    Header,
};
