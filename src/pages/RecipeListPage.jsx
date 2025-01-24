import { Center, Heading, Input, Card, Box, Image, Text, SimpleGrid } from '@chakra-ui/react';
import { data } from '../utils/data';
import { useState } from 'react';
import { TextInput } from '../components/ui/TextInput';

export const RecipeListPage = ({ onSelectRecipe }) => {
  const [searchTerm, setSearchTerm] = useState('');//state for text input
  const recipes = data.hits;

  //filter recipes based on search recipe name
  const filteredRecipes = recipes.filter(({ recipe }) => recipe.label.toLowerCase().includes(searchTerm.toLowerCase()));

  //function to handle change in text input
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Center flexDir="column" p={4}>
      <Heading mb={4} textAlign="center">Recipe Checker</Heading>

     <Input value={searchTerm} onChange={handleChange} placeholder="Search for a recipe" />
       
      {filteredRecipes.length === 0 ? (
        <Text>No recipes found</Text>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} w="full">
          {filteredRecipes.map(({ recipe }) => (
            <Card 
              onClick={() => onSelectRecipe(recipe)} 
              w="full" 
              p={4} 
              boxShadow="md" 
              key={recipe.label}
              _hover={{ boxShadow: 'lg', cursor: 'pointer' }}
            >
              <Box mb={4}>
                <Text fontSize="xl" fontWeight="bold" textAlign="center">{recipe.label}</Text>
              </Box>
              <Image src={recipe.image} alt="image" borderRadius="md" mb={4} boxSize="200px" objectFit="cover" w="full" h="200px" />
              <Box>
                <Text bg="green.100" fontSize="sm"><strong>Diet Label:</strong> {recipe.dietLabels.join(', ')}</Text>
                <Box bg="red.100" p={2} borderRadius="md" mb={2}>
                  <Text fontSize="sm" color="red.700"><strong>Caution:</strong> {recipe.cautions.join(', ')}</Text>
                </Box>
                <Text fontSize="sm"><strong>Meal Type:</strong> {recipe.mealType.join(', ')}</Text>
                <Text fontSize="sm"><strong>Dish Type:</strong> {recipe.dishType.join(', ')}</Text>
                <Text bg="purple.100" fontSize="sm"><strong></strong> {recipe.healthLabels.filter(label => label.toLowerCase().includes('vegan') || label.toLowerCase().includes('vegetarian')).join(', ')}</Text>
              </Box>
            </Card>
          ))}
        </SimpleGrid>
      )}
    </Center>
  );
};
