# POC Cargas

Neste projeto usamos arquiteturas modernas com DDD para provar um conceito de desenvolvimento em camada desacoplada do banco de dados.

Para isto, estamos criando um projeto em TS + Nest para controlar um fluxo de saida de cargas. Este fluxo por sua vez conciste em:
- 1 carga_saida;
- N's origem_carga_saida;
- 1 carga_saida_pendente;
- 1 carga_saida_grade;
- 1 carga_saida_cancelada;

Onde o cada um pros processos citados sao considerados `Cores Domains` devido cada um deles, existir suas regras de negocio especificas onde as `origem_carga_saida` tem suas particularidades, as `cargas_saidas`e assim por diante com `carga_saida_pendente`, `carga_saida_cancelada` e `carga_saida_grade`

Cada um destes processos e usado por outros N's processos, nao nescessariamente mapeados neste projeto, por exemplo, para a geracao de um picking (logistica) precisamos que uma carga esteja com ao menos uma `origem_carga_saida` vinculada, a carga nao pode estar cancelada nem pendente. 

A origem da carga deve ter pedido vinculado, assim como deve haver uma validacao no motorista, veiculo e transportador informado. Por exemplo, nao podemos liberar uma carga para um motorista que esta em viagem, ou para um veiculo com documentacao atrasada, por isto consideramos cada um destes processos `cores domains`;
