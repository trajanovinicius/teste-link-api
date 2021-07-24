
## REQUISITOS 
● Criar contas testes nas plataformas Pipedrive e Bling.  
● Criar uma integração entre as plataformas Pipedrive e Bling( A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).  
● Criar banco de dados mongo, existem serviços como MongoDB Atlas para criar de graça 
● Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.  
● Criar endpoint para trazer os dados consolidados da collection do MongoDB.    INSTRUÇÕES  
● Desenvolva e versione o projeto usando git  
● Utilize o GitHub para hospedar o código 
● Enviar o link do repositório para people@linkapi..com.br 

## O QUE SERÁ AVALIADO 
● Quantidade de requisitos realizados  
● Desacoplamento de código 
● Legibilidade 
● Boas práticas de desenvolvimento de API RESTful 
● Performance

## Endpoints 

> GET - api/v1/oportunity = Lista todas as oportunidades salvas no banco
> 
> POST - api/v1/oportunity = Busca as oportunidades na api do pipedrive, e logo após, salva as mesmas no banco com valor, data e id.

## Tecnologias e ferramentas
> 
> MongoDB
> 
> Express
> 
> Mongoose
> 
> dotenv
> 
> require-dir
