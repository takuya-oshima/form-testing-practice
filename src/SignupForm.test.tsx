import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { SignupForm } from './SignupForm'

describe('SignupForm', () => {
  it('空のまま送信するとエラーが表示される', async () => {
    // Arrange(準備):コンポーネントを描画する
    const user = userEvent.setup()
    render(<SignupForm onSubmit={vi.fn()} />)

    // Act(実行):ユーザーの操作をシュミレート
    await user.click(screen.getByRole('button', { name: '登録'}))

    // Assert(検証):期待する結果と照合
    expect(screen.getByRole('alert')).toHaveTextContent('メールアドレスを入力してください')
  })

  it('不正な形式だと形式エラーが表示され、onSubmitは呼ばれない', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<SignupForm onSubmit={onSubmit} />)

    await user.type(screen.getByLabelText('メールアドレス'), 'aaa')
    await user.click(screen.getByRole('button', { name: '登録' }))

    expect(screen.getByRole('alert')).toHaveTextContent('形式が正しくありません')
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('正しい入力で送信するとonSubmitが呼ばれ、エラーが消える', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<SignupForm onSubmit={onSubmit} />)

    await user.type(screen.getByLabelText('メールアドレス'), 'a@b.com')
    await user.click(screen.getByRole('button', { name: '登録' }))

    expect(onSubmit).toHaveBeenCalledWith('a@b.com')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
