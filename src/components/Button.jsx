

const Button = ({ backgroundColor, text }) => {
  return (
    <button
      className='rounded-md px-8 py-2 text-white'
      style={{ backgroundColor: backgroundColor }}
    >
      {text}
    </button>
  )
}

export default Button