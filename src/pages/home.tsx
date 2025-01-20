import { Banner } from '@/sections/home/banner'
import { CardItems } from '@/sections/home/card-items'

const HomePage = () => (
  <div className="flex h-full w-full flex-col items-center justify-center space-y-10">
    <Banner />
    <CardItems />
  </div>
)

export default HomePage
