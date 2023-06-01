import { Box, Container, Text } from '@chakra-ui/react'
import Header from '@ui/components/organisms/header'
import Head from 'next/head'
import { Heading } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import Footer from '@ui/components/organisms/footer'
import { Center } from '@chakra-ui/react'

const TermsAndConditionsPage = () => {
  return (
    <>
      <Head>
        <title>Maschine | Terms and conditions</title>
      </Head>
      <Box as="main">
        <Header />
        <Box as="section" pt={14}>
          <Container>
            <Box mb={8}>
              <Text as="strong" fontSize="2xl" display="block" mb={4}>
                Terms of Use
              </Text>
              <Stack color="gray.300" fontSize="sm" px={[0, 0, 6]} spacing={2}>
                <br />
                <Heading as="h1" fontSize="lg" fontFamily={'helvetica'}>
                  § 1 — Scope and Definitions
                </Heading>
                <br />

                <Text>
                  <span>
                    1.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  Fingerprints Foundation, Cricket Square, Hutchins Drive, P.O. Box 2681, Grand Cayman KY1-1111, Cayman Islands,
                  contact@fingerprintsdao.xyz, ("FP") operates a platform for the primary sale of Artworks and related NFTs (" NFT Platform") under
                  the domain www.fingerprintsdao.xyz. FP does not facilitate secondary trading of Artworks or NFTs.
                </Text>

                <Text>
                  <span>
                    1.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  For purposes of the following Terms of Use, unless the context otherwise requires, capitalized terms shall have the meanings set
                  forth below:
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  <Text as={'strong'}>Artwork</Text> means a unique, indivisible digital content, stored in a decentralized filing system owned or
                  licensed by FP to which an NFT inseparably relates and in which the NFT Owner acquires a license in accordance with these Terms of
                  Use.
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  <Text as={'strong'}>Gas Fees</Text> means a fee to cover the cost of processing of transactions on the Ethereum blockchain for the
                  creation and transfer of NFTs, which is dependent on the complexity and priority of the transaction as well as the current traffic
                  on the blockchain to be paid by the User in accordance with these Terms of Use.
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  <Text as={'strong'}>Mint</Text> means a time-limited sales process of a pre-defined number of NFTs carried out by FP, where the NFTs
                  are created and minted in accordance with the relevant NFT purchase by a User.
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  <Text as={'strong'}>NFT</Text> means non-fungible token, a unique, indivisible, irreplaceable, digital unit that is stored and
                  transferred via Ethereum blockchain, is interlinked to an Artwork as its reference object accessible via an URL, cannot be converted
                  into other crypto assets and is sold via the NFT Platform by FP as primary seller.{' '}
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  <Text as={'strong'}>NFT Owner</Text> means any User to the extent and for as long as one or more NFTs are verifiably assigned to his
                  or her Wallet by way of a corresponding entry on the blockchain in fulfillment of a purchase agreement concluded in accordance with
                  these Terms of Use.
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  <Text as={'strong'}>Secondary Marketplace</Text> means all digital marketplaces on which Users can trade and/or transfer NFTs after
                  a primary purchase of NFTs from FP.
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  <Text as={'strong'}>Smart Contract</Text> means an automated computer instruction defined on the Ethereum blockchain and linked to
                  the NFT.
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  <Text as={'strong'}>User</Text> means any natural or legal person who uses the NFT Platform in accordance with these Terms of Use.
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  <Text as={'strong'}>Wallet</Text> means a software application for storing, sending and receiving cryptocurrencies and tokens, which
                  is provided to the User by a third-party provider and for which the User is solely responsible.
                </Text>

                <Text>
                  <span>
                    1.3<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  These Terms of Use apply to the use of the NFT Platform by the Users under an agreement between FP and the Users on their use of the
                  NFT Platform (“Platform Usage Agreement”) as well as to the primary purchase of NFTs by the Users from FP. Such purchase agreements
                  will be concluded in the English language. The text of the agreements will be stored on the NFT Platform; however it will not remain
                  available to the User.
                </Text>

                <Text>
                  <span>
                    1.4<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  Use of the full functionality of the NFT Platform and the ability to purchase NFTs from FP on the NFT Platform requires that a User
                  holds a Wallet with one of the following third-party providers :
                </Text>
                <Text>
                  -<span>&nbsp;&nbsp;</span> Metamask
                </Text>
                <Text>
                  -<span>&nbsp;&nbsp; </span>
                  Coinbase
                </Text>

                <br />
                <Heading as="h1" fontSize="lg" fontFamily={'helvetica'}>
                  § 2 — Use of the NFT Platform by the User
                </Heading>
                <br />

                <Text>
                  <span>
                    2.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  A prerequisite for the use of the NFT Platform by the User is the technical linking of his or her Wallet with the NFT Platform. This
                  is done by clicking on the "<i>Connect Wallet</i>" button, specifying the Wallet address, and granting access rights to the public
                  key of the Wallet. FP has no access to and does not store or manage Users' private cryptographic keys or NFTs.
                </Text>

                <Text>
                  <span>
                    2.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  The Platform Usage Agreement comes into effect by a contract offer of the User through clicking on the “Collect Wallet” button and
                  its acceptance by FP through confirming the successful linking of the Wallet.
                </Text>

                <Text>
                  <span>
                    2.3<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  The User may temporarily unlink his or her Wallet from the NFT Platform by clicking “Disconnect Wallet” on the NFT Platform. For a
                  permanent termination of the access rights of the NFT Platform to the public key of the linked Wallet of the User, the User must
                  cancel these access rights at his or her third-party wallet provider.
                </Text>

                <Text>
                  <span>
                    2.4<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  FP is entitled to completely or partially dissolve the link of a User's Wallet to the NFT Platform and to block the relevant Wallet
                  address and/or to suspend the provision of services in accordance with these Terms of Use for the benefit of the User of the
                  relevant Wallet address, if facts suggest that a violation of these Terms of Use by the User has occurred or such blocking is
                  required due to legal requirements.
                </Text>

                <Text>
                  <span>
                    2.5<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  The User is aware that the Wallet linked by him or her to the NFT Platform is provided to him or her by a third-party wallet
                  provider. FP therefore does not assume any responsibility for the functionality or security of the Wallet, private cryptographic
                  keys or NFTs.
                </Text>

                <Text>
                  <span>
                    2.6<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  The validity of all acts of use on the NFT Platform as well as all NFT purchases concluded on the NFT Platform using a linked Wallet
                  shall be independent of the person initiating the act.{' '}
                </Text>

                <Text>
                  <span>
                    2.7<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  The User shall be solely responsible for ensuring that no unauthorized third parties use the NFT Platform using the Wallet linked by
                  him or her to the NFT Platform and shall take appropriate measures to protect his or her Wallet and the access to the NFT Platform
                  from access by third parties. FP is not responsible for the accessibility and usability of the Wallet by the User and is not able to
                  restore NFTs if the User has lost access to his or her Wallet.
                </Text>

                <Text>
                  <span>
                    2.8<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>{' '}
                  Furthermore, the User is obliged to refrain from all actions that could endanger the security and stability of the NFT Platform, in
                  particular not to retrieve information or data without authorization, not to interfere with the software of the NFT Platform, not to
                  penetrate data networks of FP or its subcontractors and not to transmit viruses, Trojans or other malware.
                </Text>

                <Text>
                  <span>
                    2.9<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  The User shall be responsible to FP to the same extent as for its own acts or omissions for all acts and omissions of third parties
                  acting on its behalf as well as of third parties to whom the User enables the use of the NFT Platform. In particular, the User shall
                  be fully responsible for ensuring that third parties to whom the User enables the use of the NFT Platform also fully comply with
                  these Terms of Use.
                </Text>

                <Text>
                  <span>
                    2.10<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  The User acknowledges that FP, its subcontractors and licensors are fully entitled to all trademark and other identification rights,
                  other intellectual property rights and copyrights to the NFT Platform as well as content and information provided by FP on the NFT
                  Platform. The User warrants to comply with all applicable laws, including, without limitation, trademark, copyright and data
                  protection laws, when using the NFT Platform and when using any other services provided to the User in this context.
                </Text>

                <br />
                <Heading as="h1" fontSize="lg" fontFamily={'helvetica'}>
                  § 3 — Provision of the NFT Platform by FP
                </Heading>
                <br />

                <Text>
                  <span>
                    3.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  FP shall use commercially reasonable efforts to provide access to the NFT Platform to the User with its then-current
                  functionalities.{' '}
                </Text>

                <Text>
                  <span>
                    3.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  FP operates the NFT Platform as a standard service for a large number of Users and therefore makes it available to the User in its
                  respective generally provided version.{' '}
                </Text>

                <Text>
                  <span>
                    3.3<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>{' '}
                  Unless expressly agreed otherwise or unless a different contractual classification is required by mandatory law, FP shall provide
                  all its services to the User as services.
                </Text>

                <Text>
                  <span>
                    3.4<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>{' '}
                  FP may use its affiliates and any other subcontractors in the performance of its services under or in connection with these Terms of
                  Use.
                </Text>

                <br />
                <Heading as="h1" fontSize="lg" fontFamily={'helvetica'}>
                  § 4 — Purchase of NFTs via the NFT Platform{' '}
                </Heading>
                <br />

                <Text>
                  <span>
                    4.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  Users can purchase NFTs on the NFT Platform on the basis of contracts to be concluded separately with FP against payment of a
                  purchase price in the cryptocurrency Ethereum (ETH).
                </Text>

                <Text>
                  <span>
                    4.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  The NFT sale takes place only within selected time slots during the Mints. During a Mint, a predefined number of NFTs is sold.{' '}
                </Text>

                <Text>
                  <span>
                    4.3<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  The price at which NFTs of a Mint can be purchased, decreases from a pre-defined starting price until all NFTs are sold out ("
                  Clearance Price") or a pre-defined final price ("End Price") is reached before. The time intervals until the next price reduction
                  and the amount of the price reduction are linear and are displayed to the User within the respective Mint. The Clearance Price or
                  End Price, respectively,
                  <span>&nbsp;</span>
                  in ETH is inclusive of all applicable taxes, but exclusive of any displayed Gas Fees applicable to the transaction and to be paid by
                  the User.
                </Text>

                <Text>
                  <span>
                    4.4<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  By pressing the "Buy now" button and selecting the desired number of NFTs, the User submits an offer to purchase one or more NFTs at
                  the purchase price per NFT valid at the time of his or her offer at maximum (“Purchase Price”). For clarification: the Purchase
                  Price may be slightly lower than the price displayed at the time the User submits the offer.
                </Text>

                <Text>
                  <span>
                    4.5<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  Per Wallet linked to the NFT Platform, a maximum of $10,000.00 (ten thousand U.S. Dollars) in NFTs can be purchased, to be
                  calculated based on the number of purchased NFTs, the Purchase Price in ETH and the USD/ETH exchange rate.
                </Text>

                <Text>
                  <span>
                    4.6<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  The User must subsequently confirm the Purchase Price including the applicable Gas Fees, which is to be paid be User, to his or her
                  third-part Wallet provider within an external pop-up window. The User is aware that he or she must pay the Gas Fees in addition to
                  the applicable Purchase Price and that the amount of the Gas Fees to be paid by the User depends on various factors, such as the
                  traffic on the Ethereum blockchain, and is therefore subject to fluctuations.
                </Text>

                <Text>
                  <span>
                    4.7<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  The User is aware and acknowledges that his or her offer relates to one or more NFTs from the respective Mint which are not
                  specified at this point in time and that he or she cannot select a specific Artwork associated with an NFT in advance.
                </Text>

                <Text>
                  <span>
                    4.8<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  FP will accept the User’s purchase offer subject to the condition that the User holds a sufficient amount of ETH in his or her
                  Wallet covering the Purchase Price including the accruing Gas Fees to be paid by the User.
                </Text>

                <Text>
                  <span>
                    4.9<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  FP will inform the User without undue delay via the NFT Platform about receipt of a purchase order and whether FP accepts the
                  purchase order. Following FP’s acceptance of a purchase order, FP will perform the minting and transfer the NFT within 12 hours to
                  the User's Wallet. The NFT is directly credited to the User's wallet without being stored by FP on another crypto wallet beforehand.
                </Text>

                <Text>
                  <span>
                    4.10<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  Regardless of the Purchase Price, all buyers of an NFT Mint shall receive their NFTs at the same price. If and to the extent that
                  the User has not concluded his or her purchase at the Clearance Price or End Price, respectively, FP offers to refund the User the
                  difference to the Purchase Price paid by the User. In order to do so, the User shall request the refund by pressing ”Claim Rebate”
                  after the Mint is completed. The difference will be refunded to the User within the completion of the blockchain transaction, net of
                  network transaction fees.
                </Text>

                <br />
                <Heading as="h1" fontSize="lg" fontFamily={'helvetica'}>
                  § 5 — Function and Value of NFTs
                </Heading>
                <br />

                <Text>
                  <span>
                    5.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  Each NFT is unique, irreplaceable, and inextricably linked to the particular Artwork that the NFT references in its metadata stored
                  on the blockchain.
                </Text>

                <Text>
                  <span>
                    5.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  The User acknowledges that the NFTs serve only as digital documentation of a limited ownership of rights with respect to the
                  respective referenced Artwork and thus have only a digital documentation function. In particular, the NFTs do not represent a
                  currency, any means of payment, claims, shares, rights of use or any other benefits in or towards FP, its affiliates or any third
                  party. The NFTs must not be used as a means of payment and/or settlement or for staking.
                </Text>

                <Text>
                  <span>
                    5.3<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  Furthermore, the User is aware that the Artworks linked to the NFTs do not become his or her property through the acquisition of
                  NFTs but remains fully with FP and its licensors.{' '}
                </Text>

                <Text>
                  <span>
                    5.4<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  Nevertheless, FP grants the User, who has become NFT Owner by transferring the NFT to his or her Wallet in accordance with
                  §&nbsp;4.9, the rights set forth in §&nbsp;6.1 to the Artwork referenced by the respective NFT.
                </Text>

                <br />
                <Heading as="h1" fontSize="lg" fontFamily={'helvetica'}>
                  § 6 — Rights and Restrictions
                </Heading>
                <br />

                <Text>
                  <span>
                    6.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  To the extent and for as long as the User is NFT Owner after full payment of the Purchase Price and transfer of the NFT to his or
                  her Wallet in accordance with §&nbsp; 4.9 and to the extent the User complies with these Terms of Use, FP grants the User the
                  worldwide, non-exclusive, revocable, non-sublicensable and non-relicensable right to use the Artwork referenced by the NFT only for:
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  private, non-commercial purposes, such as for display on private end devices; and{' '}
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  the purpose of promotion and sale on a Secondary Marketplace.
                </Text>

                <Text>
                  <span>
                    6.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  In particular, the User is prohibited, even beyond the duration of the license, to:{' '}
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  modify the NFTs or the linked Artworks in any way, including deleting, removing, or obscuring any commercial designations,
                  copyrights, trademarks, or other intellectual property rights incorporated or affixed to the NFTs or the linked Artworks;
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  to reverse engineer, decompile, disassemble, or otherwise attempt to derive the structure of the NFTs or the linked Artworks;{' '}
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  use the NFTs or the linked Artworks for commercial purposes, including advertising or promoting any product or service;
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  attempt to register the Artworks for the purchased NFTs as trademarks or copyrights or otherwise acquiring additional intellectual
                  property rights in the Artworks;
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  mint additional NFTs using/in connection with the Artworks;
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  use the Artworks in a manner that could damage the reputation of FP, its affiliates or licensors; and
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  use the NFTs or the Artworks in connection with any illegal activity, including but not limited to money laundering or fraud.
                </Text>

                <Text>
                  <span>
                    6.3<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  The license shall terminate, and all the rights set forth in §&nbsp;6.1 to the respective Artwork shall immediately revert to FP:
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  as soon as the User is no longer the NFT Owner, i.e. the NFT is no longer assigned to the User's Wallet by way of a corresponding
                  entry on the Ethereum blockchain, in particular in the event of the sale of the NFT on a Secondary Marketplace in accordance with
                  the provisions of § 7; and/or
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  as soon as the User violates these Terms of Use, in particular by exceeding the rights of use granted to him or her in respect of
                  the Artworks or by violating the Restrictions pursuant to §&nbsp;6.2.
                </Text>

                <br />
                <Heading as="h1" fontSize="lg" fontFamily={'helvetica'}>
                  § 7 — Resale on Secondary Marketplaces
                </Heading>
                <br />

                <Text>
                  <span>
                    7.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  FP is the issuer and primary seller of the NFTs and distributes them in its own name and for its own account. FP expressly does not
                  engage in redemption, repurchase or secondary trading of the NFT on Secondary Marketplaces and does not facilitate any such
                  activities.
                </Text>

                <Text>
                  <span>
                    7.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  Nevertheless, to the extent and for as long as the User is the NFT Owner and has the rights and obligations set forth in §&nbsp;6.1
                  upon acquisition of the NFT, the User shall be entitled to resell the NFT on a Secondary Marketplace.{' '}
                </Text>

                <Text>
                  <span>
                    7.3<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  The User acknowledges and agrees that if the NFTs are transferred on a Secondary Marketplace, FP will receive a revenue share of the
                  NFT selling price realized by the User ("Resale Fee"). The Resale Fee shall be 8.5% of the NFT selling price realized by the User.
                  It is specified in the respective Smart Contract, so that upon any sale of the NFT on a Secondary Marketplace an automatic transfer
                  of the Resale Fee takes place directly to FP also in case of any further subsequent sales of the NFT between other parties.
                </Text>

                <Text>
                  <span>
                    7.4<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  If the User resells an NFT via a Secondary Marketplace, the User shall:
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  comply with all laws and regulations in force at the time of the sale;
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  comply with the terms and conditions applicable on the respective Secondary Marketplace; and
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  make the purchaser aware of the "End User License" attached to these Terms of Use as <u>Exhibit 1</u> and also available at this
                  link: https://maschine.fingerprintsdao.xyz/terms-and-conditions, and to effectively incorporate it into the purchase agreement with
                  the purchaser by linking or by other provision, to ensure that, in accordance with the End User License, the purchaser will:
                </Text>

                <Text>
                  <span>
                    –<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  become the new holder of a license to the Artwork referenced by the NFT;
                </Text>

                <Text>
                  <span>
                    –<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  agree to the transfer of the Resale Fee to FP upon a further resale of the NFT by the purchaser to a third party; and
                </Text>

                <Text>
                  <span>
                    –<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  be obliged to incorporate the End User License in his or her purchase agreement in case of a further resale of the NFT.
                </Text>

                <br />
                <Heading as="h1" fontSize="lg" fontFamily={'helvetica'}>
                  § 8 — Liability and Warranty
                </Heading>
                <br />

                <Text>
                  <span>
                    8.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  FP shall not be liable for and in connection with the use of the NFT Platform by the User as well as the sale of NFTs to the User
                  for simple negligence, unless there is a br/each of contractual obligations, the fulfillment of which makes the proper execution of
                  the contract possible in the first place and on the compliance with which the contractual partner regularly relies and may rely
                  (cardinal obligations). In this case, FP's liability is limited to the damage foreseeable and typical for the contract at the time
                  of agreement of these Terms of Use.
                </Text>

                <Text>
                  <span>
                    8.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  The limitation of liability and the exclusion of liability from §&nbsp;8.1 shall not apply (i) to claims under the German Product
                  Liability Act (<i>Produkthaftungsgesetz</i>), (ii) in the event of intent or gross negligence, (iii) in the event of damage to
                  health, life and limb caused by simple negligence, (iv) in the event of fraudulent intent and (v) in the event of non-compliance
                  with an agreed warranty.
                </Text>

                <Text>
                  <span>
                    8.3<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>{' '}
                  None of FP 's obligations under the Platform Usage Agreement as well as under the NFT purchase agreements shall constitute a
                  warranted characteristic or otherwise guarantee. FP excludes any strict liability for defects already existing at the time of
                  conclusion of the Platform Usage Agreement and NFT purchase agreements.
                </Text>

                <Text>
                  <span>
                    8.4<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>{' '}
                  All the terms and conditions set forth in this § 8 shall also apply in favor of affiliated companies, management boards, executives,
                  employees, agents, subcontractors and other auxiliary persons of FP.
                </Text>

                <Text>
                  <span>
                    8.5<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  In the event of a defect in digital products, the User shall be entitled to the statutory warranty claims.
                </Text>

                <br />
                <Heading as="h1" fontSize="lg" fontFamily={'helvetica'}>
                  § 9 — Termination
                </Heading>
                <br />

                <Text>
                  <span>
                    9.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  Both the User and FP may terminate the Platform Usage Agreement at any time with immediate effect.{' '}
                </Text>

                <Text>
                  <span>
                    9.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  Termination by the User shall be deemed declared and effective if and as soon as he or she permanently cancels the access rights of
                  the NFT Platform to the public key of his or her Wallet at his or her third-party wallet provider according to §&nbsp;2.3.{' '}
                </Text>

                <Text>
                  <span>
                    9.3<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  Termination by FP shall be deemed declared and effective if and as soon FP dissolves the link of the User's Wallet to the NFT
                  Platform pursuant to §&nbsp;2.4.
                </Text>

                <br />
                <Heading as="h1" fontSize="lg" fontFamily={'helvetica'}>
                  § 10 — Changes to the Terms of Use
                </Heading>
                <br />

                <Text>
                  <span>
                    10.1<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  FP is entitled to amend these Terms of Use at any time. The amendment shall be made by means of an express consent of the User, as
                  follows: FP shall notify the User of the amended Terms of Use by providing an appropriate notice of the amendments on the NFT
                  Platform once the User links or re-links his or her Wallet to the NFT Platform and shall give the User the opportunity to consent to
                  the amendments. If the User consents to the amendments, they shall take effect immediately. If the User rejects the amendments, the
                  User shall no longer be entitled to use the Platform and both parties reserve the right to terminate the Platform Usage Agreement in
                  accordance with § 9.
                </Text>

                <br />
                <Heading as="h1" fontSize="lg" fontFamily={'helvetica'}>
                  § 11 — Regulatory Requirements
                </Heading>
                <br />

                <Text>
                  FP reserves the right to modify or terminate any activities or services under or in relation with the Platform Usage Agreement,
                  including the sale of Artworks and NFTs, if required by mandatory law, including any requirements under financial regulatory law, or
                  as requested by public authorities. The User acknowledges that the legal framework for NFTs and related services may be subject to
                  changes of applicable law and/or administrative practice as applied by public authorities.
                </Text>

                <br />
                <Heading as="h1" fontSize="lg" fontFamily={'helvetica'}>
                  § 12 — Privacy and Personal Data
                </Heading>
                <br />

                <Text>
                  The processing of personal data through the use of the NFT Platform is described in detail in the Privacy Policy
                  (https://maschine.fingerprintsdao.xyz/terms-and-conditions).
                </Text>

                <br />
                <Heading as="h1" fontSize="lg" fontFamily={'helvetica'}>
                  § 13 — Links to External Websites
                </Heading>
                <br />

                <Text>
                  Neither the availability nor the content of external websites linked to this website www.fingerprintsdao.xyz is under the control of
                  FP. FP does not endorse the content of these external websites and assumes no responsibility for their accuracy, completeness or
                  timeliness. In particular, FP is not involved in any legal transactions related to Mercedes Benz, FP or other purchase offers and
                  services offered or procured on external websites. In addition, FP does not warrant that external websites will be uninterrupted,
                  error-free, virus-free or secure, or that content from external websites will be safe to download.
                </Text>

                <br />
                <Heading as="h1" fontSize="lg" fontFamily={'helvetica'}>
                  § 14 — Right of Withdrawal
                </Heading>
                <br />

                <Text>
                  If the User is a consumer within the meaning of §&nbsp;13 German Civil Code (<i>Bürgerliches Gesetzbuch</i>, “BGB”), the User shall
                  have a right of withdrawal of fourteen days in the event of the conclusion of a contract. A consumer within the meaning of § 13 BGB
                  is any natural person who enters into a legal transaction for purposes that are predominantly neither commercial nor self-employed.
                  In the following, the User is informed about his or her right of withdrawal from the Platform Usage Agreement as well as all NFTs
                  purchased on the NFT Platform:
                </Text>
                <br />

                <Box border={'1px'} p={5} m={5}>
                  <Center as="strong">Instructions on Withdrawal</Center>
                  <Text my={2}>Right of Withdrawal</Text>
                  <Text>You have the right to withdraw from this contract within fourteen days without giving any reason.</Text>
                  <Text>The withdrawal period will expire after fourteen days from the day of the conclusion of the contract.</Text>
                  <Text>
                    To exercise the right of withdrawal, you must inform us (FP, Fingerprints Foundation, Cricket Square, Hutchins Drive, P.O. Box
                    2681, Grand Cayman KY1-1111, Cayman Islands, contact@fingerprintsdao.xyz ) of your decision to withdraw from this contract by an
                    unequivocal statement (e.g., a letter sent by post or e-mail). You may use the attached model withdrawal form, but it is not
                    obligatory.
                  </Text>
                  <Text>
                    To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of the right of
                    withdrawal before the withdrawal period has expired.
                  </Text>
                  <Text my={2}>Effects of Withdrawal</Text>
                  <Text>
                    If you withdraw from this contract, we shall reimburse to you all payments received from you, including the costs of delivery
                    (with the exception of the supplementary costs resulting from your choice of a type of delivery other than the least expensive
                    type of standard delivery offered by us), without undue delay and in any event not later than fourteen days from the day on which
                    we are informed about your decision to withdraw from this contract. We will carry out such reimbursement using the same means of
                    payment as you used for the initial transaction, unless you have expressly agreed otherwise; in any event, you will not incur any
                    fees as a result of such reimbursement. If you have requested that services begin during the withdrawal period, you must pay us a
                    reasonable amount corresponding to the proportion of the services already provided up to the time you notify us of the exercise of
                    the right of withdrawal in respect of this contract compared to the total scope of the services provided for in the contract.
                  </Text>
                  <Text my={2}>Information on the Early Expiry of the Right of Withdrawal</Text>
                  <Text>
                    <span>
                      The right of withdrawal expires in the case of a contract for the provision of services when we have fully performed the service
                      and when the contract obliges you to pay if we have only started to perform the service after you have given your express
                      consent to this and at the same time confirmed your knowledge that you lose your right of withdrawal when we have fully
                      performed the contract. The right of withdrawal will also expire in the case of a contract for the supply of digital content
                      which is not on a tangible medium if we have begun performance of the contract and, if the contract obliges you to pay, after
                      you have given your express consent for us to begin performance of the contract before the expiry of the withdrawal period and
                      at the same time confirmed your knowledge that by giving your consent you lose your right of withdrawal when performance of the
                      contract begins and we have sent you confirmation of the contract concluded.
                    </span>
                  </Text>
                </Box>

                <Text>
                  <span>&nbsp;</span>
                </Text>

                <Box border={'1px'} p={5} m={5}>
                  <Center as="strong">Model Withdrawal Form</Center>
                  <Text my={4}>(Complete and return this form if only you wish to withdraw from the contract.)</Text>
                  <Text>
                    – To FP ( Fingerprints Foundation, Cricket Square, Hutchins Drive, P.O. Box 2681, Grand Cayman KY1-1111, Cayman Islands,
                    contact@fingerprintsdao.xyz)
                  </Text>
                  <Text>
                    – I/we (*) hereby give notice that I/we (*) withdraw from my/our (*) contract of sale of the following goods (*)/for the provision
                    of the following service
                  </Text>
                  <Text>– Ordered on (*)/received on (*)</Text>
                  <Text>– Name of customer(s)</Text>
                  <Text>– Address of customer(s)</Text>
                  <Text>– Signature of customer(s) (only if this form is sent as a hard copy)</Text>
                  <Text>– Date</Text>
                  <Text>__________</Text>
                  <Text>(*) Delete as appropriate.</Text>
                </Box>

                <Text>&nbsp;</Text>

                <br />
                <Heading as="h1" fontSize="lg" fontFamily={'helvetica'}>
                  § 15 — Final Provisions
                </Heading>
                <br />

                <Text>
                  <span>
                    15.1<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  Should individual provisions of these Terms of Use be invalid or unenforceable in whole or in part, this shall not affect the
                  validity of the remainder of the contract. The invalid or unenforceable provisions shall be replaced by the statutory provisions, if
                  any.{' '}
                </Text>

                <Text>
                  <span>
                    15.2<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  In the event of any conflict between these Terms of Use and mandatory applicable provisions of the User's country of residence, in
                  particular regarding consumer protection laws, the latter shall prevail.
                </Text>

                <Text>
                  <span>
                    15.3<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  These Terms of Use and the business relationship arising between FP and the User in connection with the use of the NFT Platform as
                  well as the use by the User of other services provided to the User in this context shall be governed exclusively by the material
                  laws of the Federal Republic of Germany (including EU law), to the exclusion of German conflict of laws provisions and to the
                  exclusion of all international and supranational (contractual) legal systems. The statutory provisions on the restriction of the
                  choice of law and on the applicability of mandatory provisions, in particular of the country in which the User has his or her
                  habitual residence as a consumer, shall remain unaffected.
                </Text>

                <Text>
                  <span>
                    15.4<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  If the User is a merchant, a legal entity under public law or a special fund under public law, the exclusive place of jurisdiction
                  for all disputes arising out of or in connection with these Terms of Use and/or with regard to the validity of these Terms of Use
                  shall be Düsseldorf.
                </Text>

                <Text>
                  <span>
                    15.5<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  The European Commission provides a platform for online dispute resolution at http://ec.europa.eu/consumers/odr/. FP is not obliged
                  or willing to participate in dispute resolution proceedings before a consumer arbitration board.
                </Text>

                <Text>&nbsp;</Text>

                <Text as="strong" fontSize="2xl" display="block" mb={4} color="gray.100">
                  End User License
                </Text>

                <br />
                <Heading as="h1" fontSize="lg" fontFamily={'helvetica'}>
                  § 1 — Definitions
                </Heading>
                <br />

                <Text>
                  1.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <Text as="strong">Artwork</Text> means a unique, indivisible digital content, stored in a decentralized filing system owned or
                  licensed by Fingerprints Foundation (“FP”) to which an NFT inseparably relates.
                </Text>

                <Text>
                  1.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <Text as="strong">End User</Text> means any natural or legal person who has acquired an NFT based on a valid, lawful and fully paid
                  transaction, as long as the NFT is verifiably assigned to his or her Wallet by way of corresponding entry on the Ethereum
                  blockchain.
                </Text>

                <Text>
                  1.3<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <Text as="strong">NFT</Text> means non-fungible token, a unique, indivisible, irreplaceable, digital unit that is stored and
                  transferred via Ethereum blockchain, is linked to an Artwork as its reference object accessible via an URL, cannot be converted into
                  other crypto assets and has originally been minted and sold by FP as primary seller.
                </Text>

                <Text>
                  1.4<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <Text as="strong">Secondary Marketplace</Text> means all digital marketplaces on which NFTs can be traded and/or transferred.
                </Text>

                <br />
                <Heading as="h1" fontSize="lg" fontFamily={'helvetica'}>
                  § 2 — Ownership
                </Heading>
                <br />

                <Text>
                  <span>
                    2.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  You understand that the NFT serves only as digital documentation of a limited ownership of rights with respect to the particular
                  referenced Artwork, and thus has only a digital documentation function. In particular: (i) the NFT does not represent any means of
                  payment, claims, participations, rights of use or other benefits in or towards FP or any other company; (ii) cannot be converted
                  into other crypto assets; and (iii) must not be used as a means of payment, settlement and/or for staking.
                </Text>

                <Text>
                  <span>
                    2.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  You are also aware that the Artwork referenced by the NFT does not become your property through the purchase of the NFT, but remains
                  in its entirety with FP and its licensors.{' '}
                </Text>

                <Text>
                  <span>
                    2.3<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  Nevertheless, FP grants you, in accordance with §&nbsp;3.1 End User License the rights of use conclusively listed therein to the
                  Artwork referenced by the NFT.
                </Text>

                <br />
                <Heading as="h1" fontSize="lg" fontFamily={'helvetica'}>
                  § 3 — Rights and Restrictions{' '}
                </Heading>
                <br />

                <Text>
                  <span>
                    3.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  To the extent and for as long as you are an End User and to the extent and for as long as you comply with this End User License, FP
                  grants you a worldwide, non-exclusive, revocable non-sublicensable and non-relicensable right to use the Artwork referenced by the
                  NFT only for:{' '}
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  private, non-commercial purposes, such as for display on private end devices; and{' '}
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  the purpose of promotion and sale on a Secondary Marketplace.
                </Text>

                <Text>
                  <span>
                    3.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  In particular, you are prohibited, even beyond the duration of the license, to :{' '}
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  modify the NFTs or the linked Artworks in any way, including deleting, removing, or obscuring any commercial designations,
                  copyrights, trademarks, or other intellectual property rights incorporated or affixed to the NFT or the linked Artworks;
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  to reverse engineer, decompile, disassemble, or otherwise attempt to derive the structure of the NFTs or the linked Artworks;{' '}
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  use the NFTs or the linked Artworks for commercial purposes, including advertising or promoting any product or service;
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  attempt to register the Artworks for the purchased NFTs as trademarks or copyrights or otherwise acquiring additional intellectual
                  property rights in the Artworks;
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  mint additional NFTs using/in connection with the Artworks;
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  use the Artworks in a manner that could damage the reputation of FP, its affiliates or licensors; and
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  use the NFTs or the Artworks in connection with any illegal activity, including but not limited to money laundering or fraud.
                </Text>

                <Text>
                  <span>
                    3.3<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  End User License of the respective Artwork immediately revert to FP:{' '}
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  as soon as you are no longer an End User, i.e. the NFT is no longer assigned to your Wallet by corresponding entry on the Ethereum
                  blockchain, in particular in the event of a transfer of the NFT in accordance with § 4 End User License; and/or
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  as soon as you violate this End User License, in particular by exceeding the rights of use granted to you for the Artwork linked to
                  the NFT or by violating the restrictions according to §&nbsp;3.2 End User License.
                </Text>

                <br />
                <Heading as="h1" fontSize="lg" fontFamily={'helvetica'}>
                  § 4 — Transfer of NFT
                </Heading>
                <br />

                <Text>
                  <span>
                    4.1<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>{' '}
                  As an End User, you are entitled to resell the NFT on Secondary Marketplaces.
                </Text>

                <Text>
                  <span>
                    4.2<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  You acknowledge and agree that if you transfer the NFT on a Secondary Marketplace, FP will receive a revenue share of the NFT
                  selling price you realized by you ("Resale Fee"). The Resale Fee shall be 8.5% of the NFT selling realized by you. It is specified
                  in the respective Smart Contract, so that upon any sale of the NFT on a Secondary Marketplace an automatic transfer of the Resale
                  Fee takes place directly to FP also in case of any further subsequent sales of the NFT between other parties.
                </Text>

                <Text>
                  <span>
                    4.3<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  If you as an End User resell an NFT on a Secondary Marketplace, you shall:
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  comply with all laws and regulations in force at the time of the sale;
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  comply with the terms and conditions applicable on the respective Secondary Marketplace; and
                </Text>

                <Text>
                  <span>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  make the purchaser aware of this End User License, (available at the following link:
                  https://maschine.fingerprintsdao.xyz/terms-and-conditions) and effectively incorporate it into the purchase agreement with the
                  purchaser by linking or by other provision, to ensure that, in accordance with this End User License, the purchaser will:{' '}
                </Text>

                <Text>
                  <span>
                    –<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  become the new holder of a license to the Artwork referenced by the NFT under this End User License;
                </Text>

                <Text>
                  <span>
                    –<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  agree to the transfer of the Resale Fee to FP upon a further resale of the NFT by the purchaser to a third party; and
                </Text>

                <Text>
                  <span>
                    –<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </span>
                  be obliged to incorporate the End User License in his or her purchase agreement in case of a further resale of the NFT.
                </Text>
              </Stack>
            </Box>

            <hr />

            <Box mt={8} mb={8}>
              <Text as="strong" fontSize="2xl" display="block" mb={4} color="gray.100">
                Privacy Policy
              </Text>
              <Stack color="gray.300" fontSize="sm" px={[0, 0, 6]} spacing={4}>
                <Text>
                  We, Fingerprints Foundation (hereinafter “Fingerprints DAO”, "FP" or "we"), appreciate your visit to our website{' '}
                  <Link href="https://maschine.fingerprintsdao.xyz" color="blue.500">
                    https://maschine.fingerprintsdao.xyz
                  </Link>{' '}
                  and your interest in our platform. We operate a digital platform for minting and offering non-fungible tokens ("NFT") of specific
                  digital art and collectibles (hereinafter “the Service”).
                </Text>
                <Text mt="4">
                  The protection of personal data is very important to us. We process personal data only in accordance with applicable data protection
                  law requirements, in particular the General Data Protection Regulation (GDPR) and relevant national data protection laws. Below, we
                  would like to provide you with all the information you need to review and exercise your data protection rights. In this Privacy
                  Policy, you will find all information regarding the processing of your personal data concerning our Website and the Service.
                </Text>
                <Heading as="h2" fontSize="lg" mt="6" fontFamily={'helvetica'}>
                  A. Information about the processing of your personal data
                </Heading>
                <Heading as="h3" fontSize="md" mt="4" fontFamily={'helvetica'}>
                  I. Data controller and data protection officer
                </Heading>
                <Text>
                  The responsible data controller for the data processing in terms of this Privacy Policy is Fingerprints Foundation, Cricket Square,
                  Hutchins Drive, P.O. Box 2681, Grand Cayman KY1-1111, Cayman Islands.
                </Text>
                <Text>
                  You can reach us via e-mail{' '}
                  <Link href="mailto:contact@fingerprintsdao.xyz" color="blue.500">
                    contact@fingerprintsdao.xyz
                  </Link>
                </Text>
                <Heading as="h3" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  II. Provision of website and creation of log files
                </Heading>
                <Text>
                  Every time you access content on the website, data is temporarily stored that may allow identification. The following data is
                  collected in particular:
                </Text>
                <Text>
                  <Text>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Date and time of access
                  </Text>
                  <Text>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>IP address
                  </Text>
                  <Text>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Host name of the accessing computer
                  </Text>
                  <Text>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Website from which the website was accessed
                  </Text>
                  <Text>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Websites accessed via the website
                  </Text>
                  <Text>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Page visited on our website
                  </Text>
                  <Text>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Message whether the retrieval was successful
                  </Text>
                  <Text>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Transmitted data volume
                  </Text>
                  <Text>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Information about the browser type and version used
                  </Text>
                  <Text>
                    ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Operating system
                  </Text>
                </Text>
                <Text>
                  The temporary storage of data is necessary in order to enable the delivery of the website. Further storage in log files takes place
                  in order to ensure the functionality of the website and the security of the information technology systems. Our legitimate interest
                  in data processing is also based on these purposes.
                </Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  2. On what legal basis are these data processed?
                </Heading>
                <Text>The data are processed on the basis of Art. 6(1)(f) GDPR.</Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  3. Are there other recipients of the personal data besides the controller?
                </Heading>
                <Text>The website is hosted by Fingerprints DAO.</Text>
                <Text>
                  Note: Since July 16, 2020, the (partial) adequacy decision for the USA, the so-called Privacy Shield, no longer exists. The USA is
                  thus currently a so-called unsafe third country. This means that the same level of data protection is not provided in the USA as in
                  the EU. There is therefore a risk that personal data may be processed for the purposes of third parties without your knowledge, that
                  the data may not be protected against access by third parties and that you may not be able to assert your data protection rights
                  (e.g. by means of a complaint to a data protection authority). In particular, there may be government access in the U.S., for
                  example in the context of intelligence collection powers under Section 702 FISA and Executive Order 12 333. EU citizens have no
                  effective legal protection against such access in the U.S. or the EU.
                </Text>
                <Text>
                  In order to establish an appropriate level of protection for your data, we protect your personal data sufficiently and ensure a
                  level of protection comparable to the GDPR.
                </Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  4. How long will the data be stored?
                </Heading>
                <Text>The log files are kept for a maximum of up to 30 days.</Text>
                <Heading as="h3" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  II. Provision of the Service: Minting and Offering of NFT
                </Heading>
                <Heading as="h4" fontSize="md" mt="4" fontFamily={'helvetica'}>
                  1. What personal data is processed for what purpose?
                </Heading>
                <Text>
                  In order to provide the Service, we process certain of your personal data in pseudonymised form. If you trigger the ‘buy now’
                  button, your personal wallet connected to the platform will submit your personal wallet address (a unique identification number
                  connected with your wallet called “Public Key”) to our smart contract. The smart contract we use is a reliable code script
                  permanently stored on the Ethereum blockchain and defines the unalterable rules of the NFT purchase. When the smart contract
                  executes the transaction, your Public Key is permanently stored on the blockchain together with unique ID of NFT, the address of the
                  smart contract and meta data about the NFT such as the URI (“Minting”). We do not process any personal data other than your Public
                  Key during this transaction. Even so, it cannot be excluded that your Public Key could allow conclusions about your identity and
                  your transactions by using specific analytical tools. In any case, the possibility of identification depends largely on your own
                  transaction behavior. The fewer transactions are made with the same Public Key, the less likely it is to be identified. However, as
                  the Public Key does not openly reveal your identity, your personal data is pseud onymized.
                </Text>
                <Text>We process your personal data for the purpose of enabling the purchase of our NFT Artworks and collectibles.</Text>
                <Text>
                  For the avoidance of doubt, the data processing on the blockchain is controlled by the Ethereum Blockchain network and its
                  providers, whereas the processing in connection with the cryptocurrency Ether (ETH) and the storage of your NFTs in your personal
                  wallet is controlled by your wallet service provider. In this respect, we are not responsible for the processing.
                </Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  2. On what legal basis are these data processed?
                </Heading>
                <Text>
                  The data is processed on the basis of Art. 6(1)(b) GDPR. The processing is necessary for the performance of the purchase contract
                  between you and us. One component of the contract is the proof of your ownership of the purchased NFT. This also includes your
                  previous ownership, even if you resell your NFT and transfer the ownership.
                </Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  3. Are there other recipients of the personal data besides the controller?
                </Heading>
                <Text>
                  The data processing on the blockchain is controlled by the Ethereum Blockchain network and its providers, whereas the processing in
                  connection with the cryptocurrency Ether (ETH) and the storage of your NFTs in your personal wallet is controlled by your wallet
                  service provider. In this respect, we are not responsible.
                </Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  4. How long will the data be stored?
                </Heading>
                <Text>
                  Your Public Key is stored on the blockchain as long as the underlying distributed ledger technology continues its operation.
                </Text>
                <Heading as="h3" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  III. Compliance with legal obligations
                </Heading>
                <Heading as="h4" fontSize="md" mt="4" fontFamily={'helvetica'}>
                  1. What personal data is processed for what purpose?
                </Heading>
                <Text>
                  We might process certain personal data to comply with legal obligations required by the respectively applicable law. Such
                  obligations could be imposed, for instance, by tax, financial, criminal or money laundering law. For example, we may collect your IP
                  address and geographical location in order to identify the relevant tax jurisdiction. We ensure you that we only disclose data to
                  any authorities if there is a definite legal obligation to do so.
                </Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  2. On what legal basis are these data processed?
                </Heading>
                <Text>The data is processed on the basis of Art. 6(1)(c) GDPR.</Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  3. Are there other recipients of the personal data besides the controller?
                </Heading>
                <Text>Recipients of the data might be public authorities.</Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  4. How long will the data be stored?
                </Heading>
                <Text>The respective storage period is determined by the relevant legal requirements.</Text>
                <Heading as="h3" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  IV. Remuneration of Artworks
                </Heading>
                <Heading as="h4" fontSize="md" mt="4" fontFamily={'helvetica'}>
                  1. What personal data is processed for what purpose?
                </Heading>
                <Text>
                  We process certain personal data to ensure appropriate remuneration of the artist of the digital artworks and collectibles and the
                  licensors of the rights associated with Mercedes Benz. Therefore, we collect and transmit transaction-related information, which may
                  include personal data such as your IP address. The processing is necessary to provide a basis for the calculation of the
                  remuneration. We do not use the data for any other purpose. Our legitimate interest in data processing is also based on these
                  purposes.
                </Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  2. On what legal basis are these data processed?
                </Heading>
                <Text>The data is processed on the basis of Art. 6(1)(f) GDPR.</Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  3. Are there other recipients of the personal data besides the controller?
                </Heading>
                <Text>
                  Recipients of the data could be:
                  <br />
                  - 0xNXT GmbH, c/o Omnicom Holding Germany GmBH, Königsallee 92, 40212 Düsseldorf, Germany
                  <br />- Mercedes-Benz Group AG, 70546 Stuttgart, Germany.
                </Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  4. How long will the data be stored?
                </Heading>
                <Text>We store the data only as long as it is necessary for its respective purpose.</Text>
                <Heading as="h3" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  V. Cookies and comparable technologies
                </Heading>
                <Text>
                  Our website uses cookies. Cookies are text files that are stored in the internet browser or by the internet browser on the user's
                  computer system. When a user accesses a website, a cookie may be stored on the user's operating system. This cookie contains a
                  characteristic string of characters that enables the browser to be uniquely identified when the website is called up again.
                </Text>
                <Heading as="h4" fontSize="md" mt="4" fontFamily={'helvetica'}>
                  1. What personal data is processed for what purpose?
                </Heading>
                <Text>
                  We use technically necessary cookies to make our website more user-friendly. Some elements of our website require that the accessing
                  browser can be identified even after a page change. If you have given us your consent to do so, we also use technically not
                  necessary cookies on our website that allow us to analyse your surfing behaviour. This helps us to improve the quality of our
                  website. The data collected from you in this way is pseudonymised by technical precautions. Therefore, an assignment of the data to
                  your person is no longer possible. The data is not stored together with your other personal data. When you access our website, we
                  inform you about the use of cookies for analysis purposes and obtain your consent to the processing of personal data used in this
                  context.
                </Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  2. On what legal basis are these data processed?
                </Heading>
                <Text>
                  In the case of technically necessary cookies, the legal basis for the processing of personal data is Art. 6(1)(f) GDPR (legitimate
                  interest) and § 25(2)(2) TTDSG. In the case of technically unnecessary cookies, the legal basis for the processing of personal data
                  is Art. 6(1)(a) GDPR (consent) and § 25(1) TTDSG.
                </Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  3. Are there other recipients of the personal data besides the controller?
                </Heading>
                <Text>In case of third-party cookies, we transfer the personal data to the respective cookie provider.</Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  4. How long will the data be stored?
                </Heading>
                <Text>We store the data only as long as it is necessary for its respective purpose.</Text>
                <Heading as="h3" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  VI. YouTube
                </Heading>
                <Text>
                  If you have given your consent, we use YouTube on our website to be able to show you certain content in the form of videos. YouTube
                  is a video hosting service provided to users in the EU by Google Ireland Limited, Google Building Gordon House, 4 Barrow St, Dublin,
                  D04 E5W5, Ireland ("Google"). For more information, please see YouTube's privacy policy:{' '}
                  <Link href="https://policies.google.com/privacy" color="blue.500" isExternal>
                    https://policies.google.com/privacy
                  </Link>
                </Text>
                <Heading as="h4" fontSize="md" mt="4" fontFamily={'helvetica'}>
                  1. What data is processed for what purpose?
                </Heading>
                <Text>
                  To protect your privacy, we offer this service as so-called "2-click buttons". The "2-click solution" prevents data (e.g. your IP
                  address) from being transmitted to YouTube when you enter our website. For this purpose, the buttons are deactivated by default and
                  are only activated by clicking on the embedded video for the first time. YouTube also collects personal data after activation and
                  sends it to its own servers where it is stored, for example: - http data - IP address. In addition, the activated service sets a
                  cookie with a unique identifier when the relevant website is accessed. The data transfer takes place regardless of whether you have
                  an account with YouTube and are logged in there. If you are logged in to YouTube, the data we collect is assigned to your existing
                  account.
                </Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  2. On what legal basis are these data processed?
                </Heading>
                <Text>The legal basis for the processing of personal data is your consent according to Art. 6(1)(a) GDPR and § 25(1) TTDSG.</Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  3. Are there other recipients of the personal data besides the controller?
                </Heading>
                <Text>
                  Recipients of the data can be:
                  <br />
                  - Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland
                  <br />- Google LLC, 1600 Amphitheatre Parkway Mountain View, CA 94043, USA
                </Text>
                <Text>
                  Note: Since July 16, 2020, the (partial) adequacy decision for the USA, the so-called Privacy Shield, no longer exists. The USA is
                  thus currently a so-called unsafe third country. This means that the same level of data protection is not provided in the USA as in
                  the EU. There is therefore a risk that personal data may be processed for the purposes of third parties without your knowledge, that
                  the data may not be protected against access by third parties and that you may not be able to assert your data protection rights
                  (e.g. by means of a complaint to a data protection authority). In particular, there may be government access in the U.S., for
                  example in the context of intelligence collection powers under Section 702 FISA and Executive Order 12 333. EU citizens have no
                  effective legal protection against such access in the U.S. or the EU.
                </Text>
                <Text>
                  In order to establish an appropriate level of protection for your data, we have concluded EU standard contractual clauses with the
                  service provider with the recipients and implemented additional safeguards. In these standard contractual clauses, the recipient
                  assures to protect the data sufficiently and thus to ensure a level of protection comparable to the GDPR.
                </Text>
                <Text>
                  For the data collection and transmission to YouTube, we and Google Ireland Limited are jointly responsible for data processing (Art.
                  26 DSGVO). For information on the processing of your data by Youtube/Google and on your data subject rights against Youtube/Google,
                  please refer to Google's data policy:{' '}
                  <Link href="https://policies.google.com/privacy?hl=en" color="blue.500" isExternal>
                    https://policies.google.com/privacy?hl=en
                  </Link>
                </Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  4. How long will the data be stored?
                </Heading>
                <Text>
                  The data is deleted as soon as it is no longer required to achieve the purpose for which it was collected. For more information
                  about the storage duration, please see YouTube's privacy policy:{' '}
                  <Link href="https://policies.google.com/privacy?hl=de" color="blue.500" isExternal>
                    https://policies.google.com/privacy?hl=de
                  </Link>
                </Text>
                <Heading as="h2" fontSize="lg" mt="6" fontFamily={'helvetica'}>
                  B. Data subject rights
                </Heading>
                <Heading as="h4" fontSize="md" mt="4" fontFamily={'helvetica'}>
                  I. Right to obtain and access
                </Heading>
                <Text>You can request information in accordance with Art. 15 GDPR about your personal data that we process.</Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  II. Right of objection
                </Heading>
                <Text>
                  You have the right to object at any time, on grounds relating to your particular situation, to the processing of your personal data
                  carried out on the basis of Article 6(1)(f) GDPR. The controller will then no longer process the personal data unless it can
                  demonstrate compelling legitimate grounds for the processing which override the interests, rights and freedoms of the data subject,
                  or for the establishment, exercise or defence of legal claims. The collection of data for the provision of the website and the
                  storage of log files are absolutely necessary for the operation of the website.
                </Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  III. Right of rectification
                </Heading>
                <Text>
                  If the information concerning you is not (or no longer) correct, you can request a correction in accordance with Art. 16 GDPR. If
                  your data is incomplete, you can request that it be completed.
                </Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  IV. Right to erasure
                </Heading>
                <Text>You can request the deletion of your personal data in accordance with Art. 17 GDPR.</Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  V. Right to restriction of processing
                </Heading>
                <Text>According to Art. 18 GDPR, you have the right to request a restriction of the processing of your personal data.</Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  VI. Right to complain
                </Heading>
                <Text>
                  If you believe that the processing of your personal data violates data protection law, you have the right to complain to a data
                  protection supervisory authority of your choice in accordance with Art. 77(1) GDPR.
                </Text>
                <Heading as="h4" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  VII. Right to data portability
                </Heading>
                <Text>
                  In the event that the requirements of Art. 20(1) GDPR are met, you have the right to have data that we process automatically on the
                  basis of your consent or in fulfilment of a contract handed over to you or to third parties. The collection of data for the
                  provision of the website and the storage of log files are absolutely necessary for the operation of the website. They are therefore
                  not based on consent according to Art. 6(1)(a) GDPR or on a contract according to Art. 6(1)(b) GDPR, but are justified according to
                  Art. 6(1)(f) GDPR. The requirements of Article 20(1) GDPR are therefore not fulfilled.
                </Text>
                <Heading as="h3" fontSize="md" mt="6" fontFamily={'helvetica'}>
                  C. Status of Privacy Policy
                </Heading>
                <Text>
                  The Privacy Policy is as of [date] and is permanently available at{' '}
                  <Link href="https://maschine.fingerprintsdao.xyz/terms-and-conditions" color="blue.500" isExternal>
                    https://maschine.fingerprintsdao.xyz/terms-and-conditions
                  </Link>
                </Text>
              </Stack>
            </Box>
            <Footer />
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default TermsAndConditionsPage
