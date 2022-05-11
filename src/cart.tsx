import { VStack, Heading, Text, Divider, HStack, AspectRatio, Image } from "@chakra-ui/react";

const Cart = () => (
    <VStack w="full" h="full" p={10} spacing = {10} alignItems='flex-start' bg="gray.50" >
        <VStack spacing={3} alignItems="flex-">
            <Heading size="2xl">Cart</Heading>
            <Text>If the price is hard on your eyes, try this</Text>
        </VStack>
        <HStack spacing={6} alignItems="center" w={"full"}>
            <AspectRatio ratio={1} w={24}>
                <Image src="/images/skateboard.jpg" />
            </AspectRatio>
        </HStack>

    </VStack>
)

export default Cart

