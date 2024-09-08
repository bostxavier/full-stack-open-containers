import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders content', () => {
  const todo = {
    text: 'Learn about Docker',
    done: false
  }

  render(<Todo todo={todo} />)

  const element = screen.getByText('Learn about Docker')
  expect(element).toBeDefined()
})