import React from 'react';

import InboxScreen from './InboxScreen';
import store from '../lib/store';

import { Provider } from 'react-redux';

export default {
    component : InboxScreen,
    title: 'InboxScreen',
    decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

const Template = (args) => <InboxScreen {...args}/> //props를 받겠다는 뜻 당연히 InboxScreen 컴포넌트도 props를 받을 준비가 되어 있어야 함.

export const Default = Template.bind({});
export const Error = Template.bind({});
    // 예상 프롭스 전달
    Error.args = {
        error : "error"
    }

// 금요일은 이거 이해하는데 시간을 할애하세요