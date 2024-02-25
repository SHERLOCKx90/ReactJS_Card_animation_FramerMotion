import React from 'react'
import Card from './Card'

const SquishyCard = () => {
  return (
    <div>
      <section className='grid h-screen place-content-center bg-neutral-900 px-4'>
        <div className='mx-auto w-fit flex gap-5 items-center justify-center'>
          <Card price="$349/" plan="Month" tagline="unlock the benefits of the premium package for one-month hassle free." bgColor="indigo-500"/>
          <Card price="$1099/" plan="Year" tagline="Saver Pack! Try the Annual Plan to ace your workflow with the premium features for a year!" bgColor="orange-500" />
        </div>
      </section>
    </div>
  )
}

export default SquishyCard
