import { VStack, ScrollView, Divider } from "native-base"
import { CardConsulta } from "../componentes/CardConsulta"
import { Titulo } from "../componentes/Titulo"
import { Botao } from "../componentes/Botao"

export default function Consultas() {
    return (
        <ScrollView p={5}>
            <Titulo color="blue.500" >Minhas Consultas</Titulo>
            <Botao mt={5} mb={5}>Agendar nova consulta</Botao>
            <Titulo color="blue.500" fontSize="lg"
                alignSelf="flex-start" mb={2}>Próximas Consultas</Titulo>
            <CardConsulta
                nome="Dr Hans Chucrute"
                especialidade="Neurologista"
                foto="https://avatars.githubusercontent.com/u/68551888?v=4"
                data="20/08/2024"
                foiAgendado
            />

            <Divider mt={5} />

            <Titulo color="blue.500" fontSize="lg"
                alignSelf="flex-start" mb={2}>Consultas Passadas</Titulo>
            <CardConsulta
                nome="Dr Hans Chucrute"
                especialidade="Neurologista"
                foto="https://avatars.githubusercontent.com/u/68551888?v=4"
                data="20/08/2024"
                foiAtendido
            />
            <CardConsulta
                nome="Dr Hans Chucrute"
                especialidade="Neurologista"
                foto="https://avatars.githubusercontent.com/u/68551888?v=4"
                data="20/08/2024"
                foiAtendido
            />
            <CardConsulta
                nome="Dr Hans Chucrute"
                especialidade="Neurologista"
                foto="https://avatars.githubusercontent.com/u/68551888?v=4"
                data="20/08/2024"
                foiAtendido
            />
        </ScrollView>
    )
}