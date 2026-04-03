import Navbar from '@/app/components/Navbar'
import MoodSwitchButton from '@/app/components/MoodSwitchButton'
import MobileMenu from '@/app/components/MobileMenu'
import LeftSideBar from '@/app/components/feed/LeftSideBar'
import MiddleLayout from '@/app/components/feed/MiddleLayout'
import RightSideBar from '@/app/components/feed/RightSideBar'
import Script from 'next/script'

export default function Feed() {
  return (
    <div className="_layout _layout_main_wrapper">
      <Script
        src="/assets/js/custom.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/js/bootstrap.bundle.min.js"
        strategy="lazyOnload"
      />
      <MoodSwitchButton></MoodSwitchButton>
      <div className='_main_layout'>

        {/* Desktop Menu Start */}
        <Navbar></Navbar>
        {/* Desktop Menu End */}

        {/* Mobile Menu Start */}
        <MobileMenu></MobileMenu>
        {/* Mobile Menu End */}

        {/* Main Layout Structure */}
        <div className='container _custom_container'>
          <div className='_layout_inner_wrap'>
            <div className="row">
              {/* Left Sidebar */}
              <LeftSideBar></LeftSideBar>

              <MiddleLayout></MiddleLayout>
              
              <RightSideBar></RightSideBar>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
