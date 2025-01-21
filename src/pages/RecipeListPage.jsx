import { Center, Heading, Input, Card, Box, Image, Text, SimpleGrid } from '@chakra-ui/react';
import { data } from '../utils/data';

export const RecipeListPage = ({ onSelectRecipe }) => {
  const recipes = data.hits;

  return (
    <Center flexDir="column" p={4}>
      <Heading mb={4} textAlign="center">Recipe App</Heading>
      <Input placeholder="search recipes" mb={4} maxW="sm" />

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} w="full">
        {recipes.map(({ recipe }) => (
          <Card onClick={() => onSelectRecipe(recipe)} w="full" p={4} boxShadow="md" key={recipe.label}>
            <Box mb={4}>
              <Text fontSize="xl" fontWeight="bold">{recipe.label}</Text>
            </Box>
            <Image src={recipe.image} alt="image" borderRadius="md" mb={4} boxSize="200px" objectFit="cover" />
            <Box>
              <Text><strong>Diet Label:</strong> {recipe.dietLabels.join(', ')}</Text>
              <Text><strong>Caution:</strong> {recipe.cautions.join(', ')}</Text>
              <Text><strong>Meal Type:</strong> {recipe.mealType.join(', ')}</Text>
              <Text><strong>Dish Type:</strong> {recipe.dishType.join(', ')}</Text>
              <Text><strong>Health Label:</strong> {recipe.healthLabels.filter(label => label.toLowerCase().includes('vegan') || label.toLowerCase().includes('vegetarian')).join(', ')}</Text>
            </Box>
          </Card>
        ))}
      </SimpleGrid>
    </Center>
  );
};
