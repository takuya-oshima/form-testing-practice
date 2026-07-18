import { useState } from 'react';

export function SignupForm({ onSubmit }: { onSubmit: (email: string) => void }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return setError('メールアドレスを入力してください')
    if (!/\S+@\S+\.\S+/.test(email)) return setError('メールアドレスの形式が正しくありません')
    setError('')
    onSubmit(email)
  }

  return(
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="email">メールアドレス</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? 'email-error' : undefined}
      />
      {error && <p id="email-error" role="alert">{error}</p>}
      <button type="submit">登録</button>
    </form>
  )
}
