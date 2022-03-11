import { fireEvent, render, screen, cleanup } from "@testing-library/react";
//import { shallow } from 'enzyme';
import Register from './organism-register'

describe('<Register />', () => {

    const onSubmit = jest.fn();

    afterEach(cleanup);
    render(<Register onSuccess={onSubmit} beforeSubmit={onSubmit}/>);

    it('should have a FORM', () => {

      //TODO add all other inputs
      const emailInput = screen.getByTestId('email');
      const submit = screen.getByTestId('submit')

      expect(emailInput).toHaveValue('');

      fireEvent.change(emailInput, {target: {value: 'test@test.com'}});
      expect(emailInput).toHaveValue('test@test.com');

      fireEvent.click(submit);
      //

    });

});