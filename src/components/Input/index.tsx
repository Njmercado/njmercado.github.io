interface InputProps {
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'textarea'
  placeholder: string
  name?: string
  id?: string
  validator?: (value: string) => boolean
}

export default function Input({
  type,
  placeholder,
  name,
  id
}: InputProps) {

  const baseClasses = 'w-full p-2 rounded-md border border-gray-300 focus:border-gray-500 focus:border-2 focus:outline-none hover:border-gray-400 hover:border-1'

  return (
    type === 'textarea' ?
      <textarea
        className={`${baseClasses} h-40`}
        placeholder={placeholder}
        name={name}
        id={id}
      />:
      <input
        className={`${baseClasses}`}
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
      />
  )
}