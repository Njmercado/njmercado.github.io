import Button from "../Button/Button"
import Input from "../Input"
import { sendEmail } from '../../api/mail'


export default function ContactForm() {

  async function handleOnSubmit(data: any) {
    const response = await sendEmail(data.get('name'), data.get('email'), data.get('message'))

    if (response) {
      alert('Email sent successfully')
      // TODO: clear form
    }
  }

  return (
    <article>
      <form action={handleOnSubmit} className='flex flex-col w-full gap-2'>
        <section className="flex flex-row gap-2">
          <Input type="text" placeholder='Name' name='name' id='name' />
          <Input type="text" placeholder='Email' name='email' id='email' />
        </section>
        <Input type="textarea" placeholder='Wassup tree, what do you wanna know about? just shoot :)' name='message' id='message' />
        <Button submit={true} value='Send email!!!' className="h-12" />
      </form>
    </article>
  )
}