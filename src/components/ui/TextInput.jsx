import { useState } from 'react';
import { Input } from '@chakra-ui/react';

export const TextInput = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return ( 
        <Input placeholder="search recipes" mb={4} maxW="sm" value={searchTerm} onChange={handleChange} />
    );
}




