import { VStack, Heading, Text, Divider, HStack, AspectRatio, Image, Stack, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

const Cart = () => {
    
    const {toggleColorMode} = useColorMode();
    const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
    const secondaryTextColor = useColorModeValue('gray.600', 'gray.400')
    
    return (
        <VStack w="full" h="full" p={10} spacing = {10} alignItems='flex-start' bg={bgColor} >
        <VStack spacing={3} alignItems="flex-">
            <Heading size="2xl">Cart</Heading>
            <Text>If the price is hard on your eyes, {' '}
                <Button onClick={toggleColorMode} colorScheme={'black'} variant={'link'}>try this</Button>
            </Text>
        </VStack>
        <HStack spacing={6} alignItems="center" w={"full"}>
            <AspectRatio ratio={1} w={24}>
                <Image src="/images/skateboard.jpg" />
            </AspectRatio>
            <Stack
                spacing={0}
                w="full"
                direction={"row"}
                justifyContent="space-between"
                alignItems={"center"}
                >
                    <VStack w={'full'} spacing={0} alignItems="flex-start">
                        <Heading size={"md"}>Penny Board</Heading>
                        <Text color={secondaryTextColor}>FDSF41234</Text>
                    </VStack>
                    <Heading size="md" textAlign={'end'}>
                        $199.90
                    </Heading>
            </Stack>
        </HStack>
        <VStack spacing={4} alignItems="stretch" w={'full'}>
            <HStack justifyContent={"space-between"}>
                <Text color={secondaryTextColor}>Subtotal</Text>
                <Heading size={'sm'}>$199.90</Heading>
            </HStack>
            <HStack justifyContent={"space-between"}>
                <Text color={secondaryTextColor}>Shipping</Text>
                <Heading size={'sm'}>$1.90</Heading>
            </HStack>
            <HStack justifyContent={"space-between"}>
                <Text color={secondaryTextColor}>Taxes</Text>
                <Heading size={'sm'}>$0.00</Heading>
            </HStack>
            <Divider/>
            <HStack justifyContent={"space-between"}>
                <Text color={secondaryTextColor}>Total</Text>
                <Heading size={'lg'}>$201.70</Heading>
            </HStack>
        </VStack>

    </VStack>
    )
}
    

export default Cart

