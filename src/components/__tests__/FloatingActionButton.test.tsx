import { shallow } from 'enzyme';
import InputDialog from 'src/components/InputDialog';

const fn = jest.fn();

test('InputDialogをチェックするーーーー', () => {
  const dialog = shallow(
    <InputDialog open={true} handleClose={fn} handleCreate={fn} />,
  );

  // Interaction
  dialog.find('#title').simulate('change', { target: { value: 'ブス' } });
  dialog
    .find('#detail')
    .simulate('change', { target: { value: 'ブスには価値がない' } });

  dialog.find('[data-testId="create"]').simulate('click');
  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenCalledWith('ブス', 'ブスには価値がない');

  // Snapshot demo
  expect(dialog).toMatchSnapshot();
});
