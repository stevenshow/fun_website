const Prompt = (props) => {
  return (
    <span className='line'>
      <span className='command valid'>{`${props.prevCommand}`}</span>
      <br></br>
      <span className='after-line'>current line</span>
    </span>
  )
}

export default Prompt
