import { useState, useEffect } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Checkbox,
    Stack,
    Spinner,
    Modal,
    ModalOverlay,
    ModalCloseButton,
    ModalBody,
    Text,
    useDisclosure,
    ModalContent,
    ModalHeader,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        brand: '',
        model: '',
        condition: '',
        internalMemory: '',
        color: '',
        bateryHealth: '',
        price: '',
        isVisiblePhone: true,
    });
    const [isDisable, setIsDisable] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        axios.get('http://localhost:5000/announcement')
            .then((response) => {
                setFormData({
                    title: response.data['0'].answer + ' ' + response.data['2'].answer + ' ' + response.data['4'].answer,
                    description: response.data.description,
                    brand: response.data['1'].answer,
                    model: response.data['0'].answer,
                    condition: response.data['2'].answer,
                    internalMemory: response.data['3'].answer,
                    color: response.data['4'].answer,
                    bateryHealth: response.data['5'].answer,
                    price: response.data['6'].answer,
                    isVisiblePhone: true,
                });
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    function handleInputChange(e) {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsDisable(true);

        onOpen();
        // TODO: mensagem de sucesso
    };

    if (isLoading) return <Spinner
        color='gray.500'
        size='lg'
        minH='32%'
        minW='50%'
        thickness='6px'
        speed='0.65s'
        emptyColor='#F28000'
        mt={25}
    />;

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={4} w='100vw' p='0 10%'>
                <FormControl>
                    <FormLabel>Título</FormLabel>
                    <Input
                        disabled={isDisable}
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Descrição</FormLabel>
                    <Textarea
                        disabled={isDisable}
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Marca</FormLabel>
                    <Input
                        disabled={isDisable}
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleInputChange}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Modelo</FormLabel>
                    <Input
                        disabled={isDisable}
                        type="text"
                        name="model"
                        value={formData.model}
                        onChange={handleInputChange}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Condição</FormLabel>
                    <Input
                        disabled={isDisable}
                        type="text"
                        name="condition"
                        value={formData.condition}
                        onChange={handleInputChange}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Memória interna</FormLabel>
                    <Input
                        disabled={isDisable}
                        type="text"
                        name="internalMemory"
                        value={formData.internalMemory}
                        onChange={handleInputChange}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Cor</FormLabel>
                    <Input
                        disabled={isDisable}
                        type="text"
                        name="color"
                        value={formData.color}
                        onChange={handleInputChange}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Saúde da bateria</FormLabel>
                    <Input
                        disabled={isDisable}
                        type="text"
                        name="bateryHealth"
                        value={formData.bateryHealth}
                        onChange={handleInputChange}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Preço (R$)</FormLabel>
                    <Input
                        disabled={isDisable}
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Ocultar meu telefone neste anúncio</FormLabel>
                    <Checkbox
                        disabled={isDisable}
                        name="isVisiblePhone"
                        isChecked={formData.isVisiblePhone}
                        onChange={handleInputChange}
                    >
                    </Checkbox>
                </FormControl>

                <Button type="submit" colorScheme="orange" disabled={isDisable}>
                    {isDisable ? (
                        <Spinner color='gray.500' />
                    ) : (
                        "Enviar anúncio"
                    )}
                </Button>
            </Stack>

            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Anúncio em análise</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Obrigado pela confiança! Avisaremos quando sua publicação estiver no ar.</Text>
                    </ModalBody>
                    
                </ModalContent>
            </Modal>
        </form>
    );
}
