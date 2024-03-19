import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as TaskListStories from './TaskList.stories';

const { WithPinnedTasks } = composeStories(TaskListStories);

it('renders pinned tasks at the start of the list', () => {
    const { container } = render(<WithPinnedTasks />);
  
    expect(
      container.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]')
    ).not.toBe(null);  
    //  querySelector를 이용해 뽑아낸 태그가 null이 아닐 때 테스트 통과
    //  .not = toBe의 값이 아닐때~
  });