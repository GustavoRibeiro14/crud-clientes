import { useState } from "react";

function App() {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [clienteEditando, setClienteEditando] = useState(null);
  const [dadosEdicao, setDadosEdicao] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  function adicionarCliente() {
    if (!nome || !email || !telefone) return;
    const novoCliente = { id: Date.now(), nome, email, telefone };
    setClientes([...clientes, novoCliente]);
    setNome("");
    setEmail("");
    setTelefone("");
  }

  function deletarCliente(id) {
    setClientes(clientes.filter((c) => c.id !== id));
  }

  function iniciarEdicao(cliente) {
    setClienteEditando(cliente.id);
    setDadosEdicao({
      nome: cliente.nome,
      email: cliente.email,
      telefone: cliente.telefone,
    });
  }

  function salvarEdicao(id) {
    setClientes(
      clientes.map((c) => (c.id === id ? { ...c, ...dadosEdicao } : c)),
    );
    setClienteEditando(null);
    setDadosEdicao({ nome: "", email: "", telefone: "" });
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "#1a1a2e", marginBottom: "30px" }}>
        Cadastro de Clientes
      </h1>

      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "30px",
          borderRadius: "12px",
          marginBottom: "40px",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#1a1a2e" }}>Novo Cliente</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          />
          <input
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          />
          <input
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          />
          <button
            onClick={adicionarCliente}
            style={{
              backgroundColor: "#e94560",
              color: "#fff",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Cadastrar
          </button>
        </div>
      </div>

      <h2 style={{ color: "#1a1a2e", marginBottom: "20px" }}>
        Clientes cadastrados
      </h2>
      {clientes.length === 0 && (
        <p style={{ color: "#999" }}>Nenhum cliente cadastrado ainda.</p>
      )}
      {clientes.map(c => (
  <div key={c.id} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', marginBottom: '15px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
    {clienteEditando === c.id ? (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          value={dadosEdicao.nome}
          onChange={e => setDadosEdicao({ ...dadosEdicao, nome: e.target.value })}
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }}
        />
        <input
          value={dadosEdicao.email}
          onChange={e => setDadosEdicao({ ...dadosEdicao, email: e.target.value })}
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }}
        />
        <input
          value={dadosEdicao.telefone}
          onChange={e => setDadosEdicao({ ...dadosEdicao, telefone: e.target.value })}
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }}
        />
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => salvarEdicao(c.id)}
            style={{ backgroundColor: '#4caf50', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Salvar
          </button>
          <button
            onClick={() => setClienteEditando(null)}
            style={{ backgroundColor: '#999', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Cancelar
          </button>
        </div>
      </div>
    ) : (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <strong style={{ color: '#1a1a2e' }}>{c.nome}</strong>
          <p style={{ color: '#555', margin: '5px 0' }}>{c.email}</p>
          <p style={{ color: '#555', margin: 0 }}>{c.telefone}</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => iniciarEdicao(c)}
            style={{ backgroundColor: '#1a1a2e', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Editar
          </button>
          <button
            onClick={() => deletarCliente(c.id)}
            style={{ backgroundColor: '#ff4d4d', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Deletar
          </button>
        </div>
      </div>
    )}
  </div>
))}
    </div>
  );
}

export default App;
