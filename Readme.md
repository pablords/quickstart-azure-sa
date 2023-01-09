
# Quickstart Azure Storage Account

Inicio rápido com configurações básicas 

- Criar um Grupo de Recurso
- Criar um Recurso de Service Account
- Criar um container dentro do Service Account
- Registrar uma Applicação dentro do AD (Active Directory)
    - Copiar `Application Name` para `AZURE_SA_NAME`
    - Copiar `Application (client) ID` para `AZURE_TENANT_ID`
    - Copiar `Directory (tenant) ID` para `AZURE_CLIENT_ID`
- Criar uma Secret dentro da Applicação no AD (Active Directory)
    - Copiar `Secret ID`
    - Copiar `Value` para `AZURE_CLIENT_SECRET`
- Dar permisões dentro do grupo de recurso no  IAM (Access control) para Applicação
    - `Storage Blob Data Contributor`