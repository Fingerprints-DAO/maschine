import { Box, Container, Text } from '@chakra-ui/react'
import Footer from '@ui/components/organisms/footer'
import Header from '@ui/components/organisms/header'
import Head from 'next/head'

const questions = [
  {
    question: 'How will the Maschine auction work?',
    answer:
      'The collection will be sold in its entirety thourgh a live Dutch Auction. A Dutch auction is a type of auction where the price of an item is gradually lowered over time until a buyer is found. In the context of NFTs, this means that the price of an NFT will decrease over time during the auction period, and collectors will be able to acquire their pieces when the price reaches whatever level they\'re happy buying at. Collectors will also be entitled to a rebate if the price they paid is larger than the final auction price.',
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
    answer:
      'Yes, after purchasing an NFT through the Dutch auction selling method, you can sell it to other users on the secondary market.',
  },
  {
    question: 'Are there any fees associated with participating in a Dutch auction NFT sale?',
    answer:
      'Yes, there will be gas fees for transaction interactions with the project\'s smart contracts.',
  },
]

const FaqPage = () => {
  return (
    <>
      <Head>
        <title>FAQ</title>
      </Head>
      <Box as="main">
        <Header />
        <Box as="section" pt={10} pb={200}>
          <Container>
            <Text as="h1" fontSize="5xl" fontWeight="bold" mb={4}>
              FAQ
            </Text>
            <Text fontSize="lg" fontWeight="light" lineHeight="7" mb="72px">
              Here you can find common questions about the project.
            </Text>
            <Box>
              {questions.map((item, index) => {
                const isLastChild = questions.length - 1 === index

                return (
                  <Box
                    mb={!isLastChild ? 8 : 0}
                    pb={!isLastChild ? 8 : 0}
                    borderBottomColor="gray.700"
                    borderBottomWidth={!isLastChild ? 1 : 0}
                    key={index}
                  >
                    <Text as="strong" fontSize="2xl" display="block" mb={4} color="gray.100">
                      {item.question}
                    </Text>
                    <Text color="gray.300">{item.answer}</Text>
                  </Box>
                )
              })}
            </Box>
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  )
}

export default FaqPage
