import ClientLayout from '@core/layouts/client'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home({ params }) {
  async function changeTheme(formData: FormData) {
    'use server'

    // cookies().set('lang', cookies().get('lang')?.value === COMMON.LANGUAGE.VI ? COMMON.LANGUAGE.EN : COMMON.LANGUAGE.VI)
    redirect('/vi')
  }

  return (
    <ClientLayout>
      <form action={changeTheme}>
        <input type='text' name='name' />
        <button type='submit'>Update User Name</button>
      </form>
    </ClientLayout>
  )
}
