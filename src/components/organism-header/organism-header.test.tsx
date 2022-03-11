import { fireEvent, render, screen  } from "@testing-library/react";
import Header from './organism-header'

describe('<Header />', () =>  {

    render(<Header menuItems={[]}/>);

    it('should have render with menu and toggle button', () => {

        const openClass = 'header--active'
        const closedClass = 'header--closed';

        const header = screen.getByTestId('header');
        const burger = screen.getByRole('button');
        const ul = screen.getByTestId('menu-ul');

        expect(ul).toBeEmptyDOMElement();

        expect(header.classList).toContain(closedClass);
        fireEvent.click(burger);
        expect(header.classList).toContain(openClass);

    });


});