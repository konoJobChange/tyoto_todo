import { shallow } from 'enzyme';
import FloatingActionButton from 'src/components/FloatingActionButton';

test('CheckboxWithLabel changes the text after click', () => {
  const button = shallow(<FloatingActionButton />);

  // Interaction demo
  expect(button.text()).toEqual('Off');
  button.find('input').simulate('change');
  expect(button.text()).toEqual('On');

  // Snapshot demo
  expect(button).toMatchSnapshot();
});
