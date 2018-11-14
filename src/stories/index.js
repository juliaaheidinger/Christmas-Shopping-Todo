import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'
import ProgressBar from '../ProgressBar'
import ListItem from '../ListItem'
import Todo from '../Todo'
import Delete from '../Delete'
import Input from '../Input'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))

storiesOf('ProgressBar', module)
  .add('at 10%', () => <ProgressBar width={0.1} />)
  .add('at 50%', () => <ProgressBar width={0.5} />)
  .add('at 100%', () => <ProgressBar width={1} />)

storiesOf('Todo', module)
  .add('undone', () => (
    <ListItem>
      <Todo text={'undone Todo'} done={false} onClick={action('toggleDone')} />
      <Delete onClick={action('deleteListItem')} />
    </ListItem>
  ))
  .add('done', () => (
    <ListItem>
      <Todo text={'done Todo'} done={true} onClick={action('toggleDone')} />
      <Delete onClick={action('deleteListItem')} />
    </ListItem>
  ))

storiesOf('Input', module).add('with text', () => (
  <Input onEnter={action('show input')} />
))
