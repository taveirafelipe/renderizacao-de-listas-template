import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Estudar react", "Fazer o exercício", "Descansar"])
  const [novaTarefa, setNovaTarefa] = useState("");


  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const removeTarefa = (indexTarefa) => {
    const listaFiltrada = lista.filter((tarefa, index) => {
      return index !== indexTarefa 
    });
    setLista(listaFiltrada);
  };

  const renderizarLista = lista.map((tarefa, index) => {
    return (
      <Tarefa key={index}>
        <p>{tarefa}</p>
        <RemoveButton>
          <img src={bin} alt="" width="16px" onClick={() => removeTarefa(index)}/>
        </RemoveButton>
      </Tarefa>
    )
  });

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa]
    setLista(novaLista)
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {/* <Tarefa>
            <p>TESTE</p>
            <RemoveButton>
              <img src={bin} alt="" width="16px"/>
            </RemoveButton>
          </Tarefa> */}
          {renderizarLista}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
