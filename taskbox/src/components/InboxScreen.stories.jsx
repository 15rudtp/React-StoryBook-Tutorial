import React from 'react';

import InboxScreen from './InboxScreen';
import store from '../lib/store';

import { rest } from 'msw'; // 모의 API라이브러리 세팅
import { MockedState } from './TaskList.stories';

import { Provider } from 'react-redux';

import {
    fireEvent,
    within,
    waitFor,
    waitForElementToBeRemoved
   } from '@storybook/testing-library';
  

export default {
    component : InboxScreen,
    title: 'InboxScreen',
    decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

const Template = () => <InboxScreen /> //props를 받겠다는 뜻 당연히 InboxScreen 컴포넌트도 props를 받을 준비가 되어 있어야 함.

export const Default = Template.bind({});
 Default.parameters = {
   msw: {
     handlers: [
       rest.get(
         'https://jsonplaceholder.typicode.com/todos?userId=1',
         (req, res, ctx) => {
           return res(ctx.json(MockedState.tasks));
         }
       ),
     ],
   },
 };




export const Error = Template.bind({});
 Error.parameters = {
   msw: {
     handlers: [
       rest.get(
         'https://jsonplaceholder.typicode.com/todos?userId=1',
         (req, res, ctx) => {
           return res(ctx.status(403));
         }
       ),
     ],
   },
 };
