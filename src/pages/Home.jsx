import React from 'react'

const Home = () => {
  return (
    <section className='flex h-full'>
      {/* Hero & Headline */}
      <div className='flex-grow border'>
        <h3 className='leading-none'>Home Page</h3>
        <p></p>
      </div>
      {/* Suggestions */}
      <div className='flex flex-col gap-3 border h-full overflow-y-auto p-3 w-full max-w-[21rem] custom-scrollbar'>
        <div className='w-full h-24 border'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus et, tempora unde numquam deserunt necessitatibus ullam ea impedit quibusdam vel dolores velit pariatur minima praesentium, quod mollitia ipsam quo veritatis.
        </div>
        <div className='w-full h-24 border'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus et, tempora unde numquam deserunt necessitatibus ullam ea impedit quibusdam vel dolores velit pariatur minima praesentium, quod mollitia ipsam quo veritatis.
        </div>
        <div className='w-full h-24 border'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus et, tempora unde numquam deserunt necessitatibus ullam ea impedit quibusdam vel dolores velit pariatur minima praesentium, quod mollitia ipsam quo veritatis.
        </div>
        <div className='w-full h-24 border'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus et, tempora unde numquam deserunt necessitatibus ullam ea impedit quibusdam vel dolores velit pariatur minima praesentium, quod mollitia ipsam quo veritatis.
        </div>
        <div className='w-full h-24 border'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus et, tempora unde numquam deserunt necessitatibus ullam ea impedit quibusdam vel dolores velit pariatur minima praesentium, quod mollitia ipsam quo veritatis.
        </div>
      </div>
    </section>
  )
}

export default Home
