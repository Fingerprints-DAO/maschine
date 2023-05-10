import { Box, Container, Text } from '@chakra-ui/react'
import Footer from '@ui/components/organisms/footer'
import Header from '@ui/components/organisms/header'
import Head from 'next/head'

const questions = [
  {
    question: 'What is a Dutch auction selling method, and how does it work with NFTs?',
    answer:
      'A Dutch auction is a type of auction where the price of an item is gradually lowered over time until a buyer is found. In the context of NFTs, this means that the price of an NFT will decrease over time during the auction period.',
  },
  {
    question: 'How does the rebate mechanics work in relation to the Dutch auction selling method?',
    answer:
      'At the end of the auction, buyers who paid more than the last sell price can claim cashback based on the difference between their purchase price and the last sell price.',
  },
  {
    question: `Can I participate in the Dutch auction selling method if I don't have a cryptocurrency wallet?`,
    answer: 'No, you must have a cryptocurrency wallet to participate in the auction.',
  },
  {
    question: 'Is there a limit to the number of NFTs I can purchase using the Dutch auction selling method if there is a total amount limit?',
    answer:
      'Yes, if there is a total amount limit of USD 10,000 for the NFT sale, there may also be a limit on the number of NFTs you can purchase. The specific limit will depend on the price of the NFTs and the total amount available for the sale. ',
  },
  {
    question: 'What is the advantage of using a Dutch auction selling method for NFTs?',
    answer:
      'The advantage of using a Dutch auction selling method for NFTs is that it allows buyers to potentially purchase NFTs at a lower price than they would in a traditional fixed-price sale.',
  },
  {
    question: 'How is the cashback amount calculated for buyers who pay more than the last sell?',
    answer: `The cashback amount is calculated based on the difference between the buyer's purchase price and the last sell price.`,
  },
  {
    question: 'Is the cashback amount automatically refunded to my cryptocurrency wallet?',
    answer: 'After the auction has ended, you will need to claim your cashback amount by following the instructions provided by the project.',
  },
  {
    question: 'Can I sell the NFTs I purchase through the Dutch auction selling method to other users?',
    answer:
      'Yes, after purchasing an NFT through the Dutch auction selling method, you can sell it to other users if the project allows for secondary market transactions. However, please note that the project may have specific guidelines or restrictions on selling NFTs.',
  },
  {
    question: 'Are there any fees associated with participating in a Dutch auction NFT sale?',
    answer:
      'Yes, there may be transaction fees associated with participating in a Dutch auction NFT sale. These fees will vary depending on the cryptocurrency used for the transaction.',
  },
]

const FAQ = () => {
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
                    mb={!isLastChild ? 7 : 0}
                    pb={!isLastChild ? 7 : 0}
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

export default FAQ
