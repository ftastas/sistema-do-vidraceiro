# 🏢 Sistema de Gerenciamento para Vidraçaria - Versão Profissional

Sistema completo de gerenciamento para vidraçarias com design profissional, funcionalidades avançadas e interface moderna.

## ✨ Características Profissionais

### 🎨 Design Premium
- **Interface moderna** com gradientes e animações suaves
- **Paleta de cores profissional** específica para vidraçarias
- **Componentes elegantes** com efeitos glass e sombras
- **Responsividade total** para desktop, tablet e mobile
- **Micro-interações** que melhoram a experiência do usuário

### 🚀 Funcionalidades Avançadas
- **Dashboard interativo** com gráficos e métricas em tempo real
- **Gestão de orçamentos** com filtros e busca avançada
- **Controle financeiro** com relatórios visuais
- **Ordem de serviços** com acompanhamento por status
- **Controle de estoque** com alertas automáticos
- **Caixa diário** com movimentações detalhadas

### 🔧 Tecnologias Utilizadas
- **React 18** com hooks modernos
- **Tailwind CSS** com configuração personalizada
- **Lucide React** para ícones profissionais
- **Recharts** para gráficos interativos
- **React Router** para navegação
- **Supabase** para banco de dados (opcional)

## 🎯 Credenciais de Acesso

### Modo Demonstração
- **Email**: admin@vidracaria.com
- **Senha**: senha123

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou pnpm

### Passos
```bash
# 1. Instalar dependências
npm install
# ou
pnpm install

# 2. Executar em desenvolvimento
npm run dev
# ou
pnpm run dev

# 3. Acessar
http://localhost:5173
```

## 🌐 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente (opcional)
3. Deploy automático a cada commit

### Netlify
1. Conecte seu repositório
2. Configure build command: `npm run build`
3. Configure publish directory: `dist`

## 🔐 Configuração do Banco de Dados (Opcional)

### Supabase
1. Crie uma conta em [supabase.com](https://supabase.com)
2. Crie um novo projeto
3. Configure as variáveis de ambiente:
   ```env
   VITE_SUPABASE_URL=sua_url_do_supabase
   VITE_SUPABASE_ANON_KEY=sua_chave_anonima
   ```

### Modo Demonstração
Por padrão, o sistema funciona em modo demonstração com dados simulados, permitindo testar todas as funcionalidades sem configurar banco de dados.

## 📱 Funcionalidades por Módulo

### 📊 Dashboard
- Métricas de faturamento, clientes e orçamentos
- Gráficos de receita e vendas por produto
- Agenda de compromissos do dia
- Ordens de serviço recentes

### 💰 Orçamentos
- Listagem com filtros por status e cliente
- Criação e edição de orçamentos
- Conversão para ordem de serviço
- Impressão e exportação

### 💳 Finanças
- Controle de receitas e despesas
- Gráficos de desempenho financeiro
- Relatórios por período
- Análise de margem de lucro

### 📋 Ordem de Serviços
- Visualização por status (Em aberto, Em produção, Entregue)
- Acompanhamento de prazos
- Histórico de alterações
- Notificações de vencimento

### 📦 Estoque
- Cadastro de produtos com códigos
- Controle de entrada e saída
- Alertas de estoque baixo
- Relatórios de movimentação

### 💵 Caixa
- Abertura e fechamento diário
- Registro de entradas e saídas
- Controle de diferenças
- Relatórios de fechamento

## 🎨 Personalização

### Cores
Edite o arquivo `tailwind.config.js` para personalizar a paleta de cores:
```javascript
colors: {
  primary: {
    // Suas cores personalizadas
  }
}
```

### Logo
Substitua o arquivo `public/logo.png` pelo logo da sua empresa.

### Animações
Personalize as animações no arquivo `src/index.css`.

## 📞 Suporte

Para dúvidas ou suporte:
- Documentação completa no código
- Comentários detalhados em cada componente
- Estrutura modular para fácil manutenção

## 📄 Licença

Este projeto é proprietário e destinado ao uso específico da vidraçaria contratante.

---

**Desenvolvido com ❤️ para modernizar a gestão de vidraçarias**

