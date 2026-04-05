import Navbar from '@/app/components/Navbar'
import MoodSwitchButton from '@/app/components/MoodSwitchButton'
import MobileMenu from '@/app/components/MobileMenu'
import LeftSideBar from '@/app/components/feed/LeftSideBar'
import MiddleLayout from '@/app/components/feed/MiddleLayout'
import RightSideBar from '@/app/components/feed/RightSideBar'
import Script from 'next/script'
import { getUser } from '@/app/services/getUser'
import { getAllPosts } from '@/app/services/post.service'

export default async function Feed() {
  const user = await getUser();

  const posts = await getAllPosts();

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
        <Navbar user={user}></Navbar>
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

              <MiddleLayout postsData={posts} user={user}></MiddleLayout>
              
              <RightSideBar></RightSideBar>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
