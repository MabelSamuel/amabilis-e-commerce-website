import React from 'react'
import CoreValues from './CoreValues'
import BannerImages from './BannerImages'
import TeamMembers from './TeamMembers'

function AboutUs() {
  return (
    <section className=' pb-20 sm:text-sm  '>
        <div className=' flex flex-col items-center'>
            <h4 className=' text-lg font-medium '>Who are we</h4>
            <h2 className=' text-3xl pb-6 font-medium relative before:absolute before:bg-black before:content-[""] before:h-1 before:w-16 before:left-0 before:right-0 before:bottom-0 before:my-0 before:mx-auto '>Welcome to Amabilis</h2>
            <p className=' px-20 mt-12 text-center sm:px-4 '>At Amabilis, we are more than just a brand; we are a community of trendsetters, innovators, and dreamers. Our journey began with a simple idea: to create a space where fashion and technology coexist harmoniously. With a keen eye on the latest trends and a passion for quality, we handpick every item in our collection to ensure it meets our high standards of excellence. Our team is dedicated to providing you with the best products and customer service, making sure your experience with us is nothing short of extraordinary.</p>
        </div>
        <div className=' px-20 md:px-8 sm:px-4 '>
          <BannerImages/>
          <CoreValues/>
          <TeamMembers/>
        </div>
    </section>
  )
}

export default AboutUs