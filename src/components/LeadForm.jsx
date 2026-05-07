import { useState } from 'react';

const mobileStyles = `
  @media (max-width: 480px) {
    .leadform-card {
      padding: 28px 20px !important;
    }
  }
`;

function maskPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const labelStyle = {
  display: 'block',
  color: 'var(--texto-medio)',
  fontSize: '14px',
  fontWeight: 600,
  marginBottom: '7px',
};

const fieldStyle = { marginBottom: '20px' };

function inputStyle(isFocused) {
  return {
    width: '100%',
    backgroundColor: '#ffffff',
    border: isFocused ? '1.5px solid var(--laranja)' : '1.5px solid var(--borda-forte)',
    padding: '13px 15px',
    borderRadius: '9px',
    color: 'var(--texto)',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.15s, box-shadow 0.15s',
    boxShadow: isFocused ? '0 0 0 3px rgba(249, 115, 22, 0.15)' : 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
  };
}

function SubmitButton({ loading }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="submit"
      disabled={loading}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '100%',
        padding: '15px',
        backgroundColor: hovered && !loading ? 'var(--laranja-hover)' : 'var(--laranja)',
        color: '#ffffff',
        fontWeight: 700,
        fontSize: '16px',
        borderRadius: '10px',
        transition: 'background-color 0.2s',
        opacity: loading ? 0.75 : 1,
        cursor: loading ? 'not-allowed' : 'pointer',
        border: 'none',
        fontFamily: 'inherit',
      }}
    >
      {loading ? 'Enviando...' : 'Quero melhorar minha operação'}
    </button>
  );
}

export default function LeadForm() {
  const [form, setForm] = useState({
    nome: '',
    whatsapp: '',
    cidade: '',
    tipo: '',
    volume: '',
    desafio: '',
  });
  const [focused, setFocused] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'whatsapp') {
      setForm((prev) => ({ ...prev, whatsapp: maskPhone(value) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const params = new URLSearchParams(window.location.search);
    const payload = {
      ...form,
      utm_source: params.get('utm_source') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_content: params.get('utm_content') || '',
      referrer: document.referrer,
      device: /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
      timestamp: new Date().toISOString(),
    };

    console.log('Lead payload:', payload);

    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);

    const mensagem = `Olá! Sou ${form.nome}, da ${form.cidade}.

Tenho um negócio de marmitas (${form.tipo}) e gostaria de um orçamento de embalagens personalizadas.

Volume estimado: ${form.volume}
Principal desafio: ${form.desafio}

Vim pelo site da CSP.`;

    window.open(
      `https://wa.me/5551984304699?text=${encodeURIComponent(mensagem)}`,
      '_blank'
    );

    setSuccess(true);
  };

  if (success) {
    return (
      <section id="form" style={{ backgroundColor: 'var(--bg-alt)', padding: '96px 16px' }}>
        <div style={{
          maxWidth: '520px',
          margin: '0 auto',
          backgroundColor: '#f0fdf4',
          border: '1.5px solid #22c55e',
          borderRadius: '16px',
          padding: '48px 32px',
          textAlign: 'center',
        }}>
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#22c55e"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ margin: '0 auto 20px' }} aria-hidden="true">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <h2 style={{ color: '#15803d', fontWeight: 800, fontSize: '26px', marginBottom: '10px' }}>
            Tudo certo!
          </h2>
          <p style={{ color: 'var(--texto-medio)', fontSize: '17px' }}>
            Estamos te levando ao WhatsApp...
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <style>{mobileStyles}</style>
      <section id="form" style={{ backgroundColor: 'var(--bg-alt)', padding: '96px 16px' }}>
        <div className="leadform-card" style={{
          maxWidth: '560px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          padding: '44px 40px',
          borderRadius: '20px',
          border: '1px solid var(--borda)',
          boxShadow: 'var(--sombra-card)',
        }}>
          <p style={{
            color: 'var(--verde)',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '14px',
            textAlign: 'center',
          }}>
            Orçamento personalizado
          </p>

          <h2 style={{
            fontWeight: 800,
            fontSize: '26px',
            color: 'var(--texto)',
            lineHeight: 1.2,
            marginBottom: '8px',
            textAlign: 'center',
            letterSpacing: '-0.3px',
          }}>
            Vamos montar a embalagem ideal pra sua marmitaria
          </h2>

          <p style={{
            color: 'var(--texto-leve)',
            fontSize: '15px',
            marginBottom: '36px',
            textAlign: 'center',
          }}>
            Resposta no mesmo dia útil. Sem compromisso.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div style={fieldStyle}>
              <label htmlFor="nome" style={labelStyle}>Seu nome</label>
              <input id="nome" type="text" name="nome" value={form.nome}
                onChange={handleChange} onFocus={() => setFocused('nome')} onBlur={() => setFocused(null)}
                style={inputStyle(focused === 'nome')} required autoComplete="name" />
            </div>

            <div style={fieldStyle}>
              <label htmlFor="whatsapp" style={labelStyle}>WhatsApp</label>
              <input id="whatsapp" type="tel" name="whatsapp" value={form.whatsapp}
                onChange={handleChange} onFocus={() => setFocused('whatsapp')} onBlur={() => setFocused(null)}
                style={inputStyle(focused === 'whatsapp')} required
                placeholder="(51) 99999-9999" autoComplete="tel" />
            </div>

            <div style={fieldStyle}>
              <label htmlFor="cidade" style={labelStyle}>Cidade/Estado</label>
              <input id="cidade" type="text" name="cidade" value={form.cidade}
                onChange={handleChange} onFocus={() => setFocused('cidade')} onBlur={() => setFocused(null)}
                style={inputStyle(focused === 'cidade')} required
                placeholder="Ex: sua cidade/estado" autoComplete="address-level2" />
            </div>

            <div style={fieldStyle}>
              <label htmlFor="tipo" style={labelStyle}>Tipo de marmita</label>
              <select id="tipo" name="tipo" value={form.tipo}
                onChange={handleChange} onFocus={() => setFocused('tipo')} onBlur={() => setFocused(null)}
                style={inputStyle(focused === 'tipo')} required>
                <option value="">Selecione...</option>
                <option value="Congelada">Congelada</option>
                <option value="Fitness">Fitness</option>
                <option value="Prato feito">Prato feito</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div style={fieldStyle}>
              <label htmlFor="volume" style={labelStyle}>Volume mensal estimado</label>
              <select id="volume" name="volume" value={form.volume}
                onChange={handleChange} onFocus={() => setFocused('volume')} onBlur={() => setFocused(null)}
                style={inputStyle(focused === 'volume')} required>
                <option value="">Selecione...</option>
                <option value="1.000 a 3.000 unidades">1.000 a 3.000 unidades</option>
                <option value="3.000 a 10.000 unidades">3.000 a 10.000 unidades</option>
                <option value="10.000+ unidades">10.000+ unidades</option>
              </select>
            </div>

            <div style={fieldStyle}>
              <label htmlFor="desafio" style={labelStyle}>Principal desafio hoje</label>
              <select id="desafio" name="desafio" value={form.desafio}
                onChange={handleChange} onFocus={() => setFocused('desafio')} onBlur={() => setFocused(null)}
                style={inputStyle(focused === 'desafio')} required>
                <option value="">Selecione...</option>
                <option value="Custo alto de embalagem">Custo alto de embalagem</option>
                <option value="Problema no transporte">Problema no transporte</option>
                <option value="Falta de padronização">Falta de padronização</option>
                <option value="Quero melhorar minha marca">Quero melhorar minha marca</option>
              </select>
            </div>

            <p style={{
              color: 'var(--texto-leve)',
              fontSize: '13px',
              textAlign: 'center',
              marginBottom: '18px',
            }}>
              Atendimento rápido · Orçamento sem compromisso · Personalização inclusa
            </p>

            <SubmitButton loading={loading} />

            <p style={{
              color: 'var(--texto-leve)',
              fontSize: '12px',
              textAlign: 'center',
              marginTop: '12px',
            }}>
              Você será redirecionado para o WhatsApp com seus dados já preenchidos.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
