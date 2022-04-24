import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss';
import { signIn } from 'next-auth/react'

export function SignInButton () {
  
  const isUserLoggedIn = false;
 
  return isUserLoggedIn ? (
    <button 
      type='button'
      className={styles.signInButton}>
      <FaGithub color="#04e361"/>
      Username
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button 
      type='button'
      className={styles.signInButton}
      onClick = {()=>{signIn('github')}}
      >
      <FaGithub color="#eba417"/>
      Sign in with Github
    </button>
  );
}