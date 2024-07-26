import COMMON from 'configs/common'
import ClientLayout from 'layouts/client'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getDictionary } from './about/dictionaries'

export default async function Home({ params }) {
  async function changeTheme(formData: FormData) {
    'use server'

    cookies().set('lang', cookies().get('lang')?.value === COMMON.LANGUAGE.VI ? COMMON.LANGUAGE.EN : COMMON.LANGUAGE.VI)
    redirect('/vi')
  }

  const dist = await getDictionary(params.lang)

  return (
    <ClientLayout>
      {dist.home.title}
      <form action={changeTheme}>
        <input type='text' name='name' />
        <button type='submit'>Update User Name</button>
      </form>
    </ClientLayout>
  )
}
