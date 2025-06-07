import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Grid,
    GridItem,
    HStack,
    Heading,
    Image,
    ListItem,
    OrderedList,
    Stack,
    Text,
    Tooltip,
    UnorderedList,
    VStack,
    useBreakpointValue
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { TbBrandGithubFilled, TbBrandLinkedin, TbBrandLinkedinFilled, TbMail } from "react-icons/tb";
import { FaGithubAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import memeker from '../assets/meme.png';
import ahorradas from '../assets/ahorradas.png';
import marvelandia from '../assets/marvel.png';
import muu from '../assets/muu.png';
import { Link as ScrollLink } from 'react-scroll';
import { FaFileArrowDown } from "react-icons/fa6";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

const Home = () => {

    const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 2 });

    const urls = [
        'https://github.com/MarinaArrieta/memeker',
        'https://github.com/Natalia-Schwindt/proyectoAhorrADAs',
        'https://github.com/MarinaArrieta/marvel',
        'https://github.com/MarinaArrieta/muu'
    ];

    const urlsDeploy = [
        'https://memeker.vercel.app/',
        'https://natalia-schwindt.github.io/proyectoAhorrADAs/',
        'https://marvelandia.vercel.app/',
        'https://muu-blush.vercel.app/'
    ];

    const iconHoverStyle = {
        transition: 'transform 0.3s ease',
        _hover: {
            transform: 'rotate(-10deg)',
        },
    };

    return (
        <VStack
            w="100%"
            minH="100vh"
            spacing={10}
            bg='#fff3e3'
            // bg= 'repeating-linear-gradient(0deg, transparent 0px, transparent 25px,hsla(222,99%,62%,0.08) 25px, hsla(222,99%,62%,0.08) 27px,transparent 27px, transparent 51px),repeating-linear-gradient(90deg, transparent 0px, transparent 25px,hsla(222,99%,62%,0.08) 25px, hsla(222,99%,62%,0.08) 27px,transparent 27px, transparent 51px),repeating-linear-gradient(90deg, transparent 0px, transparent 50px,hsla(328,92%,72%,0.12) 50px, hsla(328,92%,72%,0.12) 52px,transparent 52px, transparent 102px),repeating-linear-gradient(0deg, transparent 0px, transparent 50px,hsla(328,92%,72%,0.12) 50px, hsla(328,92%,72%,0.12) 52px,transparent 52px, transparent 102px),repeating-linear-gradient(0deg, hsla(231,83%,44%,0.12) 0px, hsla(231,83%,44%,0.12) 2px,transparent 2px, transparent 102px),repeating-linear-gradient(90deg, hsla(231,83%,44%,0.12) 0px, hsla(231,83%,44%,0.12) 2px,transparent 2px, transparent 102px),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))'
            px={4}
        >
            <VStack w='100%' h='100vh' justifyContent='center'>
                <VStack spacing={2} textAlign="center">
                    <Heading
                        fontSize="5em"
                        color="#ed64a6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Marina Arrieta
                    </Heading>
                    <MotionText
                        fontSize="md"
                        color="#5a0e23"
                        fontWeight='600'
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Frontend Developer
                    </MotionText>
                    <OrderedList display='flex' listStyleType='none' p='30px 0px' margin='0' gap='20px'>
                        <ListItem color='#ffb520' fontSize="2em" sx={iconHoverStyle}>
                            <NavLink to='https://www.linkedin.com/in/marina-arrieta-react-developer/'>
                                <Tooltip label='Conectemos! 😀' fontSize='md' placement='top'>
                                    <TbBrandLinkedinFilled />
                                </Tooltip>
                            </NavLink>
                        </ListItem>
                        <ListItem color='#ffb520' fontSize="2em" sx={iconHoverStyle}>
                            <a href="mailto:arrietamarina12@gmail.com?subject=Consulta%20&body=Hola%20Marina%2C%20te%20escribo%20porque...">
                                <Tooltip label='Escribime! 😉' fontSize='md' placement='top'>
                                    <MdEmail />
                                </Tooltip>
                            </a>
                        </ListItem>
                        <ListItem color='#ffb520' fontSize="2em" sx={iconHoverStyle}>
                            <Tooltip label='Proyectos ❤️' fontSize='md' placement='top'>
                                <NavLink to='https://github.com/MarinaArrieta'><FaGithubAlt /></NavLink>
                            </Tooltip>
                        </ListItem>
                        <ListItem color='#ffb520' sx={iconHoverStyle} fontSize="1.6em" display='flex' alignItems='center'>
                            <a href="/CV-Marina-Arrieta.pdf" download>
                                <Tooltip label='Descargá mi CV 😉' fontSize='md' placement='top'>
                                    <FaFileArrowDown />
                                </Tooltip>
                            </a>
                        </ListItem>
                    </OrderedList>
                </VStack>

                <Grid
                    templateColumns={`repeat(${gridColumns}, 1fr)`}
                    gap={4}
                    w={{ base: "90%", md: "60%", lg: "30%" }}
                >
                    <GridItem
                        as={motion.div}
                        whileHover={{ scale: 1.05 }}
                        bg="#c7141f"
                        borderRadius="lg"
                        p={4}
                        textAlign="center"
                        color="white"
                        fontWeight="bold"
                    >
                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            style={{ cursor: 'pointer' }}
                        >
                            Sobre mí
                        </ScrollLink>
                    </GridItem>
                    <GridItem
                        as={motion.div}
                        whileHover={{ scale: 1.05 }}
                        bg="#c7141f"
                        borderRadius="lg"
                        p={4}
                        textAlign="center"
                        color="white"
                        fontWeight="bold"
                    >
                        <ScrollLink
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            style={{ cursor: 'pointer' }}
                        >
                            Proyectos
                        </ScrollLink>
                    </GridItem>
                </Grid>
            </VStack>

            <VStack spacing={6} w={{ base: "90%", md: "60%", xl: "60%" }} id="about">
                <Heading color="#c7141f">Sobre mí</Heading>
                <Text color="#5a0e23" textAlign="center" w={{ lg: '60%' }}>
                    Soy desarrolladora Frontend, próxima a recibirme como Técnica en Desarrollo de Software. Tengo experiencia en Quality Control (QC), realizando pruebas, reporte de errores y asegurando la calidad de sistemas. También he trabajado con WordPress para gestión de contenido. Me apasiona el frontend y crear experiencias atractivas y funcionales.
                </Text>
                <Text color="#c7141f" fontWeight="bold">
                    Habilidades
                </Text>
                <Grid templateColumns={{ base: "repeat(2, minmax(100px, 1fr))", md: "repeat(4, minmax(100px, 1fr))" }} gap={4}>
                    {["HTML", "CSS", "JavaScript", "React", "Vite", "Chakra UI", "Tailwind", "Figma", "Jira", "Scrum", "GitHub", "MySQL"].map((skill) => (
                        <GridItem
                            key={skill}
                            bg="#ed64a6"
                            color="#fff3e3"
                            borderRadius="full"
                            py={2}
                            textAlign="center"
                            fontWeight="bold"
                        >
                            {skill}
                        </GridItem>
                    ))}
                </Grid>
            </VStack>

            <VStack w={{ base: "90%", xl: "70%" }} spacing={6} mt={20} mb={30} id="projects">
                <Heading color="#c7141f" mb={30}>Proyectos</Heading>
                <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={6}>
                    {["Memeker", "AhorrADAs", "Marvelandia", "MUU Helados"].map((title, i) => (
                        <Card
                            key={i}
                            overflow="hidden"
                            variant="outline"
                            bg='linear-gradient(45deg, #faf1a5 -2%, transparent 51%)'
                            border={'3px solid #ffffff'}
                        >
                            <Image
                                objectFit="cover"
                                maxW={{ base: "100%" }}
                                src={[memeker, ahorradas, marvelandia, muu][i]}
                                alt={title}
                            />
                            <Stack bg="#d4c9be73" height='100%'>
                                <CardBody >
                                    <Heading size="md" color='#c7141f'>{title}</Heading>
                                    <UnorderedList
                                        margin='8px 0px'
                                        display='flex'
                                        gap='10px'
                                    >
                                        <ListItem
                                            listStyleType='none'
                                            fontSize='0.8em'
                                            display='flex'
                                            p='3px'
                                            bg='#c7141f'
                                            borderRadius='5px'
                                            fontWeight={700}
                                            color='#e2d6ca'
                                        >
                                            {['HTML | CSS | JS', 'Jira | Tailwind | JS', 'Tailwind | JS', 'React | JS | Vite | Chakra'][i]}
                                        </ListItem>
                                    </UnorderedList>
                                    <Text py={2} color='#5a0e23'>
                                        {['Memeker es una aplicación web diseñada para crear y editar memes de forma simple e intuitiva. Permite cargar una imagen y aplicar retoques como ajustar el contraste, la saturación o el brillo. También podés agregar texto personalizado, eligiendo la fuente y el tamaño para lograr el estilo que quieras. Una vez terminado el diseño, se puede descargar el meme en un solo clic. Ideal para divertirse y compartir tus creaciones fácilmente.', 'Esta plataforma permite llevar un control detallado de las ganancias y pérdidas a través de diferentes categorías de gastos e ingresos. Los usuarios pueden visualizar reportes que destacan la categoría con mayor ganancia, mayor gasto y mejor balance, así como el mes más rentable y el de mayores pérdidas. Además, ofrece reportes mensuales por categoría y análisis comparativos, proporcionando una visión clara del estado financiero.', 'Esta página web consume la API de Marvel para ofrecer un catálogo interactivo de cómics y personajes. Los usuarios pueden ver el total de cómics y personajes disponibles, aplicar filtros por nombre, fecha de lanzamiento y orden alfabético. Además, permite explorar el universo Marvel de manera dinámica, organizando la información de la A-Z, Z-A o por antigüedad.', 'Esta página web ofrece un catálogo interactivo de helados, permitiendo a los usuarios explorar una amplia variedad de sabores y presentaciones. Cuenta con filtros para buscar helados por tipo: palitos, cucuruchos y potes. Además, cada usuario registrado tiene la función de un carrito de compras para una experiencia de compra rápida y sencilla.'][i]}
                                    </Text>
                                </CardBody>
                                <CardFooter gap={4} justifyContent="end">
                                    <Button
                                        as="a"
                                        href={urls[i]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="solid"
                                        colorScheme="pink"
                                        color="#fff3e3"
                                    >
                                        Code
                                    </Button>
                                    <Button
                                        as="a"
                                        href={urlsDeploy[i]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="solid"
                                        colorScheme="pink"
                                        color="#fff3e3"
                                    >
                                        Deploy
                                    </Button>
                                </CardFooter>
                            </Stack>
                        </Card>
                    ))}
                </Grid>
            </VStack>
        </VStack>
    );
};

export default Home;