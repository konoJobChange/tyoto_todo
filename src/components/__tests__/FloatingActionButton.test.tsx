import { shallow } from 'enzyme';
import InputDialog from 'src/components/InputDialog';

const fn = jest.fn();

test('InputDialogをチェックするーーーー', () => {
  const dialog = shallow(
    <InputDialog open={true} handleClose={fn} handleCreate={fn} />,
  );

  // Interaction demo
  // expect(dialog.text()).toEqual('Off');
  // expect(dialog.text()).toEqual('On');
  dialog.find('[data-testId]=create').simulate('click');
  fn.mock.calls;

  // Snapshot demo
  expect(dialog).toMatchSnapshot();
});
