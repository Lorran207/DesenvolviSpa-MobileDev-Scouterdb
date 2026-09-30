# Scouter DBZ · Simulador de Transformações de Dragon Ball

Aplicação Single Page Application (SPA) em React com Vite desenvolvida para a **Avaliação Prática 1** da Fatec Mogi Mirim (Curso de Análise e Desenvolvimento de Sistemas — Disciplina de Desenvolvimento Mobile).

A aplicação simula um Scouter (medidor tático de ki do universo de Dragon Ball), permitindo selecionar raças (Saiyajin, Namekuseijin, Raça do Freeza, Humano e Majin), acompanhar suas transformações de combate com cálculo de poder de luta, simular batalhas com sorteio aleatório de oponentes e filtrar guerreiros em tempo real.

---

## Requisitos Técnicos Atendidos (Conforme Avaliação)

1. **Arquitetura de Componentes Modular (Pai/Filho)**:
   - Componentes divididos em pastas dedicadas dentro de `src/components/`:
     - `Header/`
     - `Footer/`
     - `RaceCard/`
     - `TransformCard/`
     - `BackButton/`
   - Uso padronizado de `import` e `export default`.

2. **Comunicação por Props e Renderização de Listas**:
   - Dados estruturados em arquivos JSON (`src/data/racas.json` e `src/data/oponentes.json`).
   - Componentes `RaceCard` e `TransformCard` recebendo dados via `props`.
   - Iteração dinâmica com `.map()` e inclusão obrigatória da propriedade `key`.

3. **Gerenciamento de Estado Reativo (`useState`)**:
   - `busca` (`useState`): filtro de busca em tempo real na página inicial.
   - `nivel` (`useState`): controle do estágio atual de transformação do guerreiro acionado por botões de clique (`onClick`).
   - `oponente` (`useState`): simulador de batalha com sorteador aleatório de adversários usando `Math.random()`.

4. **Navegação SPA**:
   - Roteamento com `react-router-dom`:
     - Rota `/`: Radar de Guerreiros (Página Inicial).
     - Rota `/scouter/:id`: Tela de Análise e Transformações do Guerreiro.
     - Rota `*`: Redirecionamento amigável para a página inicial.
   - Componente reutilizável de navegação `BackButton`.

5. **Estilização com CSS e Flexbox**:
   - Estilos organizados por componente com CSS puro.
   - Layout responsivo baseado em `display: flex`, alinhamentos e espaçamentos.
   - Design temático sci-fi/Dragon Ball com cantoneiras de HUD e animações de aura.

6. **Deploy e Publicação**:
   - Arquivo `vercel.json` configurado com rewrites para suporte a SPA sem erro de 404 em recarregamentos.
   - Arquivo `.gitignore` configurado.

---

## Como Rodar o Projeto Localmente

1. Clone o repositório ou acesse a pasta do projeto:
```bash
cd scouter-dragon-ball
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Para testar o build de produção:
```bash
npm run build
npm run preview
```

---

## Links de Entrega

- **Repositório GitHub:** `[COLAR_LINK_AQUI]`
- **Aplicação na Vercel:** `[COLAR_LINK_AQUI]`
