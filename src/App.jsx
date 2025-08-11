import { useState, useEffect, useRef } from 'react';
import { Button, Flex, Form, Input } from "antd";
import './APP.css';
import CatFriends from './components/CatFriends';
// import useOnlineStatus from './hooks/useOnlineStatus';
// import useFormInput from './hooks/useFormInput';
import ValidatedInput from './components/validatedInput';
// function Status() {
//   const isOnline = useOnlineStatus();
//   return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
// }

// function SaveButton() {
//   const isOnline = useOnlineStatus();

//   function handleSaveClick() {
//     console.log('✅ Progress saved');
//   }

//   return (
//     <Button disabled={!isOnline} onClick={handleSaveClick}>
//       {isOnline ? 'Save progress' : 'Reconnecting...'}
//     </Button>
//   );
// }

export default function StatusBar() {

  // const firstNameProps = useFormInput('firstName');
  // const lastNameProps = useFormInput('lastName');

  const inputRef = useRef();

  const submitForm = () => {
    if (inputRef.current.validate()) {
      console.log(inputRef.current.getValue());
    }
  }

  return (
    // <Flex
    //   className='container'
    //   align='center'
    //   justify='center'
    //   vertical>
    //   {/* <Status />
    //   <SaveButton /> */}
    // </Flex>
    // <>
    //   <label>
    //     First name:
    //     <input {...firstNameProps} />
    //   </label>
    //   <label>
    //     Last name:
    //     <input {...lastNameProps} />
    //   </label>
    //   <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
    // </>

    // <>
    //   <form>
    //     <ValidatedInput ref={inputRef} validate={val => val > 0} />
    //     <Button type='primary' onClick={submitForm}>
    //       Submit
    //     </Button>
    //   </form>
    // </>
    <Flex
      className='container'
      align='center'
      justify='center'
      vertical>
      <CatFriends />
    </Flex>
  )
}