import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import Todo from './Todo'

describe('Todo', () => {
  it('renders the todo text and calls deleteTodo when Delete is clicked', () => {
    const todo = { _id: '1', text: 'Learn containers', done: false }
    const deleteTodo = vi.fn()

    render(<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={vi.fn()} />)

    expect(screen.getByText('Learn containers')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: /delete/i }))

    expect(deleteTodo).toHaveBeenCalledWith(todo)
  })
})
