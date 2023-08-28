import React from 'react';

const Contact = () => {
  return (
    <div className='contact'>

        <main>
            <h1>Contact Us</h1>

            <form>
                <div>
                    <lable className="lab">Name</lable>
                    <input type="text" required placeholder='Abc' />
                </div>

                <div>
                    <lable className="lab">Email</lable>
                    <input type="email" required placeholder='Abc@xyz.com' />
                </div>

                <div>
                    <lable className="lab">Message</lable>
                    <input type="text" required placeholder='Tell Us about your query...' />
                </div>

                <button type='Submit'>Send</button>
            </form>

        </main>
    </div>
  )
}

export default Contact;