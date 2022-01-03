
function LoginForm(props) {
  let email = '';
  let password = '';
  function handleSubmit(e) {
    e.preventDefault();
    if (email.length === 0 || password.length === 0){

      alert('Пожалуйста заполните поля')
      return
    }
    console.log({email, password});
  }

  function changeInput(e) {
    const value = e.target.value.trim()

    switch (e.target.name){
      case 'email':
        email = value
        break;
      case 'password':
        password = value
        break;
      default:
        console.log('Add name input')
    }
  }
  
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-field'>
        <input type='text' placeholder='E-Mail' onChange={changeInput} name='email'/>
      </div>
      <div className='form-field'>
        <input type='password' placeholder='Пароль' onChange={changeInput}  name='password'/>
      </div>
      <div className='buttons'>
        <button>Войти</button>
      </div>
    </form>
  );
}

export default LoginForm;
