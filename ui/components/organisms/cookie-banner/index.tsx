import { Box, Container, Link, SlideFade, Text } from '@chakra-ui/react'
import Banner from '@ui/components/molecules/banner'
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'

type CookieBannerProps = {
  isInternalPage: boolean
}

const CookieBanner = ({ isInternalPage }: CookieBannerProps) => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if the cookie exists
    const cookieExists = Cookies.get('hideCookieBanner')
    setShowBanner(!cookieExists)
  }, [])

  const handleClose = () => {
    // Set the cookie when the user closes the banner
    Cookies.set('hideCookieBanner', 'true', { expires: 7 })
    setShowBanner(false)
  }

  return (
    <SlideFade in={showBanner} offsetY={'0'} unmountOnExit>
      {/* Show the banner only if the "showBanner" state is true */}
      <Box pb={{ base: isInternalPage ? '200px' : '150px', sm: isInternalPage ? '150px' : '100px', md: isInternalPage ? '80px' : '40px' }}>
        <Banner buttonText="Close" onClose={handleClose} reverseBg={isInternalPage}>
          <Text fontWeight="medium">We use our own and third-party cookies to personalize content.</Text>
          <Text color="muted">
            Read our <Link>Tems &amp; Conditions</Link>
          </Text>
        </Banner>
      </Box>
    </SlideFade>
  )
}

export default CookieBanner
