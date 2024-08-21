import { VStack, Text, ScrollView, Avatar, Divider } from "native-base"
import { Titulo } from "../componentes/Titulo"

export default function Perfil() {
    return (
        <ScrollView>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="blue.500">Meu Perfil</Titulo>

                <Avatar size="xl" source={{ uri: "https://avatars.githubusercontent.com/u/68551888?v=4" }} mt={5} />

                <Titulo color="blue.500">Informações Pessoais</Titulo>
                <Titulo fontSize="lg" mb={1}>Willian Conrado</Titulo>
                <Text>13/11/1985</Text>
                <Text>Fortaleza - Ceará</Text>

                <Divider mt={5} />

                <Titulo color="blue.500" mb={1}>Histórico Médico</Titulo>
                <Text>Gripe</Text>
                <Text>Resfriado</Text>

            </VStack>
        </ScrollView>
    )
}