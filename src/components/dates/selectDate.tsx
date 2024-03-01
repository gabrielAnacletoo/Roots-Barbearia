import { Card } from 'react-bootstrap'

export const SelectDate = () => {
    // Mock de dados - Horários disponíveis
    const availableTimes = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

    // Função para verificar se a data é atual ou futura
    const isFutureDate = (date: any) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date >= today;
    };

    // Função para filtrar horários disponíveis com base na data selecionada e nos horários já agendados
    const filterAvailableTimes = (selectedDate: any, bookedTimes:any) => {
        if (!isFutureDate(selectedDate)) {
            // Retorna uma lista vazia se a data selecionada for anterior à data atual
            return [];
        }

        // Filtra os horários disponíveis excluindo os horários já agendados
        return availableTimes.filter(time => !bookedTimes.includes(time));
    };

    // Exemplo de uso da função de filtragem de horários disponíveis
    const selectedDate = new Date(); // Supondo que a data selecionada seja o dia atual
    const bookedTimes = ['10:00', '14:00']; // Horários já agendados
    const availableTimesFiltered = filterAvailableTimes(selectedDate, bookedTimes);

    return (
        <>
        <Card>
        <small>Datas Disponíveis:</small>
            <ul>
                {availableTimesFiltered.map((time, index) => (
                    <li key={index}>{time}</li>
                ))}
            </ul>

        </Card>
        
        </>
    );
};

export default SelectDate;
