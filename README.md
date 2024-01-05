# POC Cargas

Neste projeto usamos arquiteturas modernas com DDD para provar um conceito de desenvolvimento em camada desacoplada do banco de dados.

Para isto, estamos criando um projeto em TS + Nest para controlar um fluxo de saida de cargas. Este fluxo por sua vez conciste em:
- 1 carga_saida;
- N's origem_carga_saida;

Onde ambos dos processos citados sao considerados `Cores Domains` devido cada um deles, existir suas regras de negocio especificas onde as `origem_carga_saida` tem suas particularidades, as `cargas_saidas`.

Cada um destes processos e usado por outros N's processos, nao nescessariamente mapeados neste projeto, por exemplo, para a geracao de um picking (logistica) precisamos que uma carga esteja com ao menos uma `origem_carga_saida` vinculada, a carga nao pode estar cancelada nem pendente.

A origem da carga deve ter pedido vinculado, assim como deve haver uma validacao no motorista, veiculo e transportador informado.

Por exemplo, nao podemos liberar uma carga para um motorista que esta em viagem, ou para um veiculo com documentacao atrasada, por isto consideramos cada um destes processos `cores domains`;

Quando uma `carga_saida` e criada, ela deve obrigatoriamente criar uma pendencia e uma grade se nescessario.
Ja quando a carga e cancelada, ela deve obrigatoriamente alimentar uma tabela chamada `carga_saida_cancelada`;

Sendo assim, `carga_saida_pendente`, `carga_saida_grade` e `carga_saida_cancelada` sao consideradas sub_domains da do core `carga_saida`;