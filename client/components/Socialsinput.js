import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';

const Socialsinput= () => {
    return (
    <div className="mt-4">
     <h1 className="text-xl font-semibold mb-4">Socials</h1>
     <Formik
       initialValues={{ socials: ['asd'] }}
       onSubmit={values =>
         console.log(values)
       }
       render={({ values }) => (
         <Form>
           <FieldArray
             name="socials"
             render={arrayHelpers => (
               <div>
                 {values.socials && values.socials.length > 0 ? (
                   values.socials.map((friend, index) => (
                     <div key={index} className="flex gap-2 items-center">
                       <Field name={`socials.${index}`} placeholder="Add link"
                        className=" my-2 py-4 rounded-md w-4/5 px-4" />
                       <button
                        className=" bg-red-500 text-white px-4 py-2 rounded-full focus:outline-none"
                         type="button"
                         onClick={() => arrayHelpers.remove(index)}
                       >
                         Remove
                       </button>
                     </div>
                   ))
                 ) : ''}
                 <button className="mt-2 bg-blue-400 text-white px-5 py-1.5 rounded-full focus:outline-none" 
                    type="button" onClick={() => arrayHelpers.push('')}>
                     ADD
                   </button>
                 <div>
                   <button 
                    className="mt-4 bg-green-400 px-6 text-white py-2.5 rounded-full focus:outline-none"
                    type="submit" >Update Socials</button>
                 </div>
               </div>
             )}
           />
         </Form>
       )}
     />
   </div>
    )
}

export default Socialsinput
