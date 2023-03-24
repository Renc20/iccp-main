import { EnMembershipForm } from '@/locales/en-US';
import { EsMembershipForm } from '@/locales/es';

export default function MembershipForm({
  variant = 'en',
}: {
  variant?: 'en' | 'es';
}) {
  const content = variant === 'es' ? EsMembershipForm : EnMembershipForm;
  const actionUrl = variant === 'es' ? '/es/gracias' : '/success';

  return (
    <form
      name='membershipForm'
      id='membershipForm'
      className='flex flex-col items-stretch gap-4'
      method='POST'
      action={actionUrl}
      data-netlify='true'
    >
      <input type='hidden' name='form-name' value='membershipForm' />

      <h3 className='text-bold'>{content.section1}</h3>

      <div className='flex gap-8'>
        <div className='w-1/2'>
          <label htmlFor='membershipFormName'>{content.name}</label>
          <input
            type='text'
            name='membershipFormName'
            id='membershipFormName'
            placeholder='Full Name'
            className='focus:shadow-outline w-full appearance-none rounded border border-stone-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
            required
          />
        </div>
        <div className='w-1/2'>
          <label htmlFor='membershipFormPhone'>{content.phone}</label>
          <input
            type='tel'
            name='membershipFormPhone'
            id='membershipFormPhone'
            placeholder='Phone Number'
            className='focus:shadow-outline w-full appearance-none rounded border border-stone-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
            required
          />
        </div>
      </div>

      <div className='flex gap-8'>
        <div className='w-1/2'>
          <label htmlFor='membershipFormDOB'>{content.dob}</label>
          <input
            type='date'
            name='membershipFormDOB'
            id='membershipFormDOB'
            className='focus:shadow-outline w-full appearance-none rounded border border-stone-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
          />
        </div>
        <div className='w-1/2'>
          <label htmlFor='membershipFormEmail'>{content.email}</label>
          <input
            type='email'
            name='membershipFormEmail'
            id='membershipFormEmail'
            placeholder={content.email}
            className='focus:shadow-outline w-full appearance-none rounded border border-stone-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
            required
          />
        </div>
      </div>

      <div className='flex gap-8'>
        <div className='w-1/2'>
          <label htmlFor='membershipFormGender'>{content.gender}</label>
          <input
            type='text'
            name='membershipFormGender'
            id='membershipFormGender'
            placeholder='Gender'
            className='focus:shadow-outline w-full appearance-none rounded border border-stone-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
          />
        </div>
        <div className='w-1/2'>
          <label htmlFor='membershipFormAddress'>
            {content.mailingAddress}
          </label>
          <input
            type='text'
            name='membershipFormAddress'
            id='membershipFormAddress'
            placeholder={content.mailingAddress}
            className='focus:shadow-outline w-full appearance-none rounded border border-stone-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
          />
        </div>
      </div>

      <div>
        <label htmlFor='membershipFormDenomination'>
          {content.denomination}
        </label>
        <input
          type='text'
          name='membershipFormDenomination'
          id='membershipFormDenomination'
          placeholder={content.denomination}
          className='focus:shadow-outline w-full appearance-none rounded border border-stone-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
        />
      </div>

      <h3 className='text-bold mt-4'>{content.churchInformation}</h3>
      <input
        type='text'
        name='membershipFormChurchName'
        id='membershipFormChurchName'
        placeholder={content.churchName}
        className='focus:shadow-outline w-full appearance-none rounded border border-stone-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
      />
      <input
        type='text'
        name='membershipFormChurchAddress'
        id='membershipFormChurchAddress'
        placeholder={content.churchMailingAddress}
        className='focus:shadow-outline w-full appearance-none rounded border border-stone-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
      />

      <h3 className='text-bold mt-4'>{content.experience}</h3>
      <textarea
        name='membershipFormExperience1'
        id='membershipFormExperience1'
        rows={4}
        placeholder={content.experienceQ1}
        className='focus:shadow-outline w-full appearance-none rounded border border-stone-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
      />
      <textarea
        name='membershipFormExperience2'
        id='membershipFormExperience2'
        rows={4}
        placeholder={content.experienceQ2}
        className='focus:shadow-outline w-full appearance-none rounded border border-stone-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
      />
      <textarea
        name='membershipFormExperience3'
        id='membershipFormExperience3'
        rows={4}
        placeholder={content.experienceQ3}
        className='focus:shadow-outline w-full appearance-none rounded border border-stone-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
      />

      <h3 className='text-bold mt-4'>{content.beliefs}</h3>
      <textarea
        name='membershipFormBeliefs1'
        id='membershipFormBeliefs1'
        rows={4}
        placeholder={content.beliefsQ1}
        className='focus:shadow-outline w-full appearance-none rounded border border-stone-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
      />
      <textarea
        name='membershipFormBeliefs2'
        id='membershipFormBeliefs2'
        rows={4}
        placeholder={content.beliefsQ2}
        className='focus:shadow-outline w-full appearance-none rounded border border-stone-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
      />

      <h3 className='text-bold mt-4'>{content.expectations}</h3>
      <textarea
        name='membershipFormExpectations1'
        id='membershipFormExpectations1'
        rows={4}
        placeholder={content.expectationsQ1}
        className='focus:shadow-outline w-full appearance-none rounded border border-stone-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
      />
      <textarea
        name='membershipFormExpectations2'
        id='membershipFormExpectations2'
        rows={4}
        placeholder={content.expectationsQ2}
        className='focus:shadow-outline w-full appearance-none rounded border border-stone-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
      />
      <textarea
        name='membershipFormExpectations3'
        id='membershipFormExpectations3'
        rows={4}
        placeholder={content.expectationsQ3}
        className='focus:shadow-outline w-full appearance-none rounded border border-stone-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
      />

      <h3 className='text-bold mt-4'>{content.references}</h3>
      <textarea
        name='membershipFormReferences1'
        id='membershipFormReferences1'
        rows={4}
        placeholder={content.referencesQ1}
        className='focus:shadow-outline w-full appearance-none rounded border border-stone-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
      />

      <h3 className='text-bold mt-4'>{content.commitment}</h3>
      <textarea
        name='membershipFormCommitment1'
        id='membershipFormCommitment1'
        rows={4}
        placeholder={content.commitmentQ1}
        className='focus:shadow-outline w-full appearance-none rounded border border-stone-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
      />
      <textarea
        name='membershipFormCommitment2'
        id='membershipFormCommitment2'
        rows={4}
        placeholder={content.commitmentQ2}
        className='focus:shadow-outline w-full appearance-none rounded border border-stone-300 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
      />

      <button
        type='submit'
        form='membershipForm'
        className='inline-flex items-center justify-center rounded-lg border border-primary-600 bg-primary-500 px-3 py-2 text-center font-medium text-white shadow-sm transition-colors duration-75 hover:bg-primary-600 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary-500 active:bg-primary-700 disabled:bg-primary-700'
      >
        {content.submit}
      </button>
    </form>
  );
}
