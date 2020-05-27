import { array } from '@storybook/addon-knobs';
import { MySecondLibComponent } from './my-second-lib.component';

export default {
  title: 'MySecondLibComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: MySecondLibComponent,
  props: {
    todos: array('todos', ['Book plane ticket', 'Enjoy the 🌅']),
  },
});
