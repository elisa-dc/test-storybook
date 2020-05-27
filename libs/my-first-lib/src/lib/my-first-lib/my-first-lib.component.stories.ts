import { MyFirstLibComponent } from './my-first-lib.component';

export default {
  title: 'MyFirstLibComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: MyFirstLibComponent,
  props: {
    title: 'Hello',
    content: '....',
  },
});
