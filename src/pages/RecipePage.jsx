import { Box, Image, Text, CloseButton, Center, Stack } from '@chakra-ui/react';

export const RecipePage = ({ recipe, onSelectRecipe }) => {
  if (!recipe) {
    return <Center>No recipe selected</Center>;
  }
  const { label, image, mealType, dishType, totalTime, dietLabels, healthLabels, cautions, ingredients, servings, totalNutrients } = recipe;

  return (
    <Center p={4}>
      <Box maxW="600px" w="100%">
        <CloseButton onClick={() => onSelectRecipe(null)} mb={4} />
        
        <Image src={image} alt={label} borderRadius="md" mb={4} boxSize="300px" objectFit="cover" mx="auto" />
        
        <Stack spacing={4}>
          <Text><strong>Meal Type:</strong> {mealType.join(', ')}</Text>
          <Text fontSize="2xl" fontWeight="bold" mb={2}>{label}</Text>
          <Text><strong>Dish Type:</strong> {dishType.join(', ')}</Text>
          <Text><strong>Total Cooking Time:</strong> {totalTime} minutes</Text>
          <Text bg="green.100" p={2} borderRadius="md"><strong>Diet Label:</strong> {dietLabels.join(', ')}</Text>
          <Text bg="purple.100" p={2} borderRadius="md"><strong>Health Labels:</strong> {healthLabels.join(', ')}</Text>
          <Text bg="red.100" p={2} borderRadius="md"><strong>Cautions:</strong> {cautions.join(', ')}</Text>
          <Text><strong>Ingredients:</strong> {ingredients.map(ingredient => ingredient.text).join(', ')}</Text>
          <Text><strong>Servings:</strong> {servings}</Text>
          <Text><strong>Total Nutrients:</strong></Text>
          <Box ml={4}>
            <Text>Energy: {totalNutrients.ENERC_KCAL.quantity.toFixed(2)} {totalNutrients.ENERC_KCAL.unit}</Text>
            <Text>Protein: {totalNutrients.PROCNT.quantity.toFixed(2)} {totalNutrients.PROCNT.unit}</Text>
            <Text>Fat: {totalNutrients.FAT.quantity.toFixed(2)} {totalNutrients.FAT.unit}</Text>
            <Text>Carbs: {totalNutrients.CHOCDF.quantity.toFixed(2)} {totalNutrients.CHOCDF.unit}</Text>
            <Text>Cholesterol: {totalNutrients.CHOLE.quantity.toFixed(2)} {totalNutrients.CHOLE.unit}</Text>
            <Text>Sodium: {totalNutrients.NA.quantity.toFixed(2)} {totalNutrients.NA.unit}</Text>
          </Box>
        </Stack>
      </Box>
    </Center>
  );
};