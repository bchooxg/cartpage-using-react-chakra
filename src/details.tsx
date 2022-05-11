import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Select,
  SimpleGrid,
  GridItem,
  Checkbox,
  Button,
  useBreakpointValue
} from "@chakra-ui/react";

const Details = () => {
    const colSpan = useBreakpointValue({base:2, md:1});
    return(
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
    <VStack spacing={3} alignItems="flex-">
      <Heading size="2xl">Details</Heading>
      <Text>If you already have an account click here to login</Text>
    </VStack>

    <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input placeholder="John" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input placeholder="Smith" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <FormLabel>Address</FormLabel>
        <Input placeholder="76 Cherry Lane" />
      </GridItem>
      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input placeholder="San Francisco" />
        </FormControl>
      </GridItem>

      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>Country</FormLabel>
          <Select>
            <option value={"usa"}>United States of America</option>
            <option value={"sg"}>Singapore</option>
            <option value={"myr"}>Malaysia</option>
          </Select>
        </FormControl>
      </GridItem>
      
      <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address?</Checkbox>
      </GridItem>
      
      <GridItem colSpan={2}>
          <Button w="full" size={"lg"}>Place Order</Button>
      </GridItem>
      
    </SimpleGrid>
  </VStack>
)
}
  

export default Details;
