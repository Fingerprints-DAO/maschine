import { Box, Container, Text } from '@chakra-ui/react'
import Footer from '@ui/components/organisms/footer'
import Header from '@ui/components/organisms/header'
import Head from 'next/head'

const blocks = [
  {
    title: '1.1 Rules',
    content:
      "The collection will be sold in its entirety thourgh a live Dutch Auction. A Dutch auction is a type of auction where the price of an item is gradually lowered over time until a buyer is found. In the context of NFTs, this means that the price of an NFT will decrease over time during the auction period, and collectors will be able to acquire their pieces when the price reaches whatever level they're happy buying at. Collectors will also be entitled to a rebate if the price they paid is larger than the final auction price.",
  },
  {
    question: 'How does the rebate mechanics work in relation to the Dutch auction selling method?',
    answer:
      'At the end of the auction, buyers who paid more than the last sell price can claim a refund equal to the difference between their purchase price and the last sell price. This process is done trustlessly using the auction contract.',
  },
  {
    question: `Can I participate in the Dutch auction selling method if I don't have a cryptocurrency wallet?`,
    answer: 'No, you must have a cryptocurrency wallet to participate in the auction.',
  },
  {
    question: 'Is there a limit to the number of NFTs I can purchase?',
    answer:
      'Yes, if there is a total amount limit of US$10,000 for the NFT sale, thus there will also be a limit on the number of NFTs you can purchase. The specific limit will depend on the latest price of the auction and the total quantity of NFTs still available for the sale.',
  },
  {
    question: 'Is the rebate automatically refunded to my cryptocurrency wallet?',
    answer: 'After the auction has ended, you will need to claim your rebate by following the instructions provided in the minting page.',
  },
  {
    question: 'Can I sell the NFTs I purchase through the Dutch auction selling method to other users?',
    answer: 'Yes, after purchasing an NFT through the Dutch auction selling method, you can sell it to other users on the secondary market.',
  },
  {
    question: 'Are there any fees associated with participating in a Dutch auction NFT sale?',
    answer: "Yes, there will be gas fees for transaction interactions with the project's smart contracts.",
  },
]

const TermsAndConditionsPage = () => {
  return (
    <>
      <Head>
        <title>Terms and conditions</title>
      </Head>
      <Box as="main">
        <Header />
        <Box as="section" pt={14} pb="132px">
          <Container>
            <Text as="h1" fontSize="5xl" fontWeight="bold" mb={['72px']} lineHeight={['55px']}>
              Terms & conditions
            </Text>
            <Box mb={8}>
              <Text as="strong" fontSize="2xl" display="block" mb={4} color="gray.100">
                1.1 Rules
              </Text>
              <Text color="gray.300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel mi elementum, pretium odio sit amet, mollis augue. Fusce eget mattis
                elit. Ut elementum rhoncus justo. Quisque venenatis magna vitae elit placerat faucibus. Pellentesque sagittis pulvinar ante, ut
                volutpat nisi suscipit dignissim. Mauris mollis scelerisque libero non aliquam. Pellentesque feugiat vel tellus non suscipit. Etiam
                consequat magna quis dui pretium luctus eget eu velit. Suspendisse sed euismod nisi, quis pharetra felis. Phasellus sed enim eget leo
                sagittis gravida. Sed eget magna quis metus finibus tristique. Morbi ex diam, dictum nec augue et, molestie pulvinar orci. Donec sit
                amet justo ut ex mollis tempus. Quisque ultricies velit at massa malesuada scelerisque a ut odio. Duis id euismod ipsum. Donec auctor
                ligula sit amet viverra ultricies. Sed non mi vitae lectus tristique ultrices. Ut sollicitudin quis ex ac congue. Quisque lectus urna,
                condimentum et lorem nec, posuere facilisis erat. Vivamus pulvinar diam aliquam vehicula lacinia. Nunc congue felis vitae fringilla
                suscipit. Sed blandit enim lectus, tempor cursus turpis scelerisque in. Ut suscipit feugiat finibus. Maecenas vitae semper augue,
                vehicula porttitor velit. Nulla facilisi.
              </Text>
            </Box>
            <Box>
              <Text as="strong" fontSize="2xl" display="block" mb={4} color="gray.100">
                1.2 Rules
              </Text>
              <Text color="gray.300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel mi elementum, pretium odio sit amet, mollis augue. Fusce eget mattis
                elit. Ut elementum rhoncus justo. Quisque venenatis magna vitae elit placerat faucibus. Pellentesque sagittis pulvinar ante, ut
                volutpat nisi suscipit dignissim. Mauris mollis scelerisque libero non aliquam. Pellentesque feugiat vel tellus non suscipit. Etiam
                consequat magna quis dui pretium luctus eget eu velit. Suspendisse sed euismod nisi, quis pharetra felis. Phasellus sed enim eget leo
                sagittis gravida. Sed eget magna quis metus finibus tristique. Morbi ex diam, dictum nec augue et, molestie pulvinar orci. Donec sit
                amet justo ut ex mollis tempus. Quisque ultricies velit at massa malesuada scelerisque a ut odio. Duis id euismod ipsum. Donec auctor
                ligula sit amet viverra ultricies. Sed non mi vitae lectus tristique ultrices. Ut sollicitudin quis ex ac congue. Quisque lectus urna,
                condimentum et lorem nec, posuere facilisis erat. Vivamus pulvinar diam aliquam vehicula lacinia. Nunc congue felis vitae fringilla
                suscipit. Sed blandit enim lectus, tempor cursus turpis scelerisque in. Ut suscipit feugiat finibus. Maecenas vitae semper augue,
                vehicula porttitor velit. Nulla facilisi.
              </Text>
            </Box>
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  )
}

export default TermsAndConditionsPage
