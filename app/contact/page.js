import { form } from 'sanity/structure';

export default function ContactPage() {
  return (
    <main className='px-10 my-20 flex flex-col items-center'>
      <h1 className='text-6xl text-center font-medium uppercase mb-20'>
        Contact Us
      </h1>
      <form
        data-netlify='true'
        name='contact'
        method='POST'
        action='/'
        className='lg:w-[600px] w-[400px]'>
        <input type='hidden' name='form-name' value='contact' />
        <p>
          <label className='block w-full mb-2' htmlFor='name'>
            Name
          </label>
          <input
            className='w-full mb-2 border-2 border-black/20 p-2'
            type='text'
            name='name'
            id='name'
          />
        </p>
        <p>
          <label className='block w-full mb-2' htmlFor='email'>
            Email
          </label>
          <input
            className='w-full mb-2 border-2 border-black/20 p-2'
            type='text'
            name='email'
            id='email'
          />
        </p>
        <p>
          <label className='block w-full' htmlFor='msg'>
            Message
          </label>
          <textarea
            className='w-full mb-6 border-2 border-black/20 p-2'
            name='msg'
            id='msg'
          />
        </p>
        <button
          type='submit'
          className='bg-black hover:bg-gray-800 transition-all text-slate-50 py-4 px-12'>
          Submit
        </button>
      </form>
    </main>
  );
}
