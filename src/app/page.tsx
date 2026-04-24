import HeroSection from '@/components/sections/HeroSection'
import HousesSection from '@/components/sections/HousesSection'
import LocationsSection from '@/components/sections/LocationsSection'
import PromotionsSection from '@/components/sections/PromotionsSection'
import AmenitiesSection from '@/components/sections/AmenitiesSection'
import GallerySection from '@/components/sections/GallerySection'
import BookingCalendar from '@/components/sections/BookingCalendar'
import BookingSection from '@/components/sections/BookingSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <HousesSection />
      <LocationsSection />
      <PromotionsSection />
      <AmenitiesSection />
      <GallerySection />
      <BookingCalendar />
      <BookingSection />
    </>
  )
}
