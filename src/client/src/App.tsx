import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import InfluencerTable from "./components/InfluencerTable";
import {Influencer} from "./models/influencer.modal";

export const App = () => {

  const influencers: Influencer[] = [];
  const influencersCategory: Influencer[] = [];
  const influencersCountry: Influencer[] = [];

  return (
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <ColorModeSwitcher justifySelf="flex-end" />
          <Grid p={3}>
            <VStack spacing={8}>

              <Text>
                Best influencers
              </Text>

              <InfluencerTable influencers={influencers}/>
            </VStack>
          </Grid>
          <Grid p={3}>
            <VStack spacing={8}>

              <Text>
                Best influencers in Music
              </Text>

              <InfluencerTable influencers={influencersCategory}/>
            </VStack>
          </Grid>
          <Grid p={3}>
            <VStack spacing={8}>
              <Text>
                Best influencers in Spain
              </Text>
              <InfluencerTable influencers={influencersCountry}/>
            </VStack>
          </Grid>
        </Box>
      </ChakraProvider>
  )
}
